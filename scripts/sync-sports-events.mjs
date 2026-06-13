import { mkdir, readFile, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, "../data/generated-events.js");
const previousPath = resolve(__dirname, "../data/sync-snapshot.json");
const execFileAsync = promisify(execFile);

const trackedCompetitions = [
  {
    provider: "TheSportsDB",
    leagueId: "4328",
    season: "2026-2027",
    sport: "Футбол",
    competition: "English Premier League",
    ratingBase: "A",
    segments: ["Массмаркет", "VIP Club", "Support"]
  },
  {
    provider: "TheSportsDB",
    leagueId: "4480",
    season: "2026-2027",
    sport: "Футбол",
    competition: "UEFA Champions League",
    ratingBase: "A+",
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum", "Реактивация", "Support"]
  },
  {
    provider: "TheSportsDB",
    leagueId: "4387",
    season: "2026-2027",
    sport: "Баскетбол",
    competition: "NBA",
    ratingBase: "A",
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum"]
  },
  {
    provider: "TheSportsDB",
    leagueId: "4380",
    season: "2026-2027",
    sport: "Хоккей",
    competition: "NHL",
    ratingBase: "B",
    segments: ["Массмаркет", "VIP Club"]
  },
  {
    provider: "TheSportsDB",
    leagueId: "4370",
    season: "2027",
    sport: "Формула-1",
    competition: "Formula 1",
    ratingBase: "B",
    segments: ["Массмаркет", "VIP Club"]
  }
];

function inPlanningWindow(date) {
  return date >= "2026-07-01" && date <= "2027-06-30";
}

function normalizeEvent(apiEvent, tracked) {
  const date = apiEvent.dateEvent || (apiEvent.strTimestamp || "").slice(0, 10);
  if (!date || !inPlanningWindow(date)) return null;
  const time = apiEvent.strTime ? ` ${apiEvent.strTime.slice(0, 5)}` : "";
  const league = apiEvent.strLeague || tracked.competition;
  const name = `${apiEvent.strEvent || "Событие"}${time}`;
  const isFinal = `${name} ${apiEvent.strFilename || ""}`.toLowerCase().includes("final");
  return {
    id: `api-${apiEvent.idEvent}`,
    sport: tracked.sport,
    competition: league,
    name,
    start: date,
    end: date,
    rating: isFinal ? "A+" : tracked.ratingBase,
    stage: apiEvent.intRound ? `Round ${apiEvent.intRound}` : "Матч",
    tags: ["API", tracked.provider, apiEvent.strStatus || ""].filter(Boolean),
    segments: tracked.segments,
    source: `${tracked.provider}: ${league} / ${apiEvent.idEvent}`,
    providerEventId: apiEvent.idEvent,
    providerLeagueId: tracked.leagueId,
    lastSyncedAt: new Date().toISOString()
  };
}

async function fetchSeason(tracked) {
  const url = new URL(`https://www.thesportsdb.com/api/v1/json/123/eventsseason.php`);
  url.searchParams.set("id", tracked.leagueId);
  url.searchParams.set("s", tracked.season);
  let stdout = "";
  try {
    ({ stdout } = await execFileAsync("curl", ["-L", "-s", url.toString()], { timeout: 20000, maxBuffer: 10 * 1024 * 1024 }));
  } catch (error) {
    stdout = error.stdout || "";
  }
  if (!stdout.trim()) return [];
  const payload = JSON.parse(stdout);
  return (payload.events || []).map((event) => normalizeEvent(event, tracked)).filter(Boolean);
}

async function loadPreviousSnapshot() {
  try {
    return JSON.parse(await readFile(previousPath, "utf8"));
  } catch {
    return {};
  }
}

function diffEvents(previousById, events) {
  const changes = [];
  for (const event of events) {
    const previous = previousById[event.id];
    if (!previous) {
      changes.push({ id: event.id, type: "new", name: event.name });
      continue;
    }
    const changedFields = ["start", "end", "name", "stage"].filter((field) => previous[field] !== event[field]);
    if (changedFields.length) changes.push({ id: event.id, type: "updated", name: event.name, changedFields });
  }
  return changes;
}

function toGeneratedJs(events, report) {
  return `window.GENERATED_API_EVENTS = ${JSON.stringify(events, null, 2)};\nwindow.SPORTS_SYNC_REPORT = ${JSON.stringify(report, null, 2)};\n`;
}

async function main() {
  const previous = await loadPreviousSnapshot();
  const all = [];
  const errors = [];

  for (const tracked of trackedCompetitions) {
    try {
      all.push(...await fetchSeason(tracked));
    } catch (error) {
      errors.push(error.message);
    }
  }

  const byId = new Map();
  all.forEach((event) => byId.set(event.id, event));
  const events = [...byId.values()].sort((a, b) => a.start.localeCompare(b.start) || a.name.localeCompare(b.name));
  const changes = diffEvents(previous.eventsById || {}, events);
  const report = {
    syncedAt: new Date().toISOString(),
    provider: "TheSportsDB season sync",
    events: events.length,
    competitions: trackedCompetitions.length,
    newEvents: changes.filter((change) => change.type === "new").length,
    updatedEvents: changes.filter((change) => change.type === "updated").length,
    errors,
    message: errors.length
      ? `Синк выполнен частично: ${events.length} событий, ошибок: ${errors.length}.`
      : `Синк выполнен: ${events.length} событий, новых: ${changes.filter((change) => change.type === "new").length}, изменённых: ${changes.filter((change) => change.type === "updated").length}.`
  };

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, toGeneratedJs(events, report), "utf8");
  await writeFile(previousPath, JSON.stringify({
    syncedAt: report.syncedAt,
    eventsById: Object.fromEntries(events.map((event) => [event.id, event])),
    changes
  }, null, 2), "utf8");
  console.log(report.message);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
