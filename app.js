const seedEvents = [
  { id: "wc-2026", sport: "Футбол", competition: "FIFA World Cup 2026", name: "Плей-офф и финальные недели ЧМ-2026", start: "2026-07-01", end: "2026-07-19", rating: "A+", stage: "Плей-офф / финал", source: "FIFA", tags: ["TOP", "global"] },
  { id: "wimbledon-2026", sport: "Теннис", competition: "Wimbledon", name: "Wimbledon 2026", start: "2026-06-29", end: "2026-07-12", rating: "A", stage: "Grand Slam", source: "draft", tags: ["TOP"] },
  { id: "ucl-2026", sport: "Футбол", competition: "Лига чемпионов", name: "ЛЧ 2026/27: старт league phase", start: "2026-09-15", end: "2026-10-01", rating: "A+", stage: "Старт основного этапа", source: "UEFA draft", tags: ["TOP"] },
  { id: "nba-2026", sport: "Баскетбол", competition: "NBA", name: "NBA 2026/27: старт регулярного сезона", start: "2026-10-20", end: "2026-11-10", rating: "B", stage: "Старт сезона", source: "draft", tags: ["ночной лайв"] },
  { id: "khl-2027", sport: "Хоккей", competition: "КХЛ", name: "КХЛ: плей-офф", start: "2027-03-01", end: "2027-05-01", rating: "A", stage: "Плей-офф", source: "draft", tags: ["Россия"] }
];

const apiEvents = Array.isArray(window.GENERATED_API_EVENTS) ? window.GENERATED_API_EVENTS : [];
const allEvents = [...seedEvents, ...apiEvents];
const ratingClass = (rating) => ({ "A+": "rating-a-plus", A: "rating-a", B: "rating-b", C: "rating-c" }[rating] || "rating-c");
const dateLabel = (start, end) => start === end ? start : `${start} - ${end}`;

function byId(id) { return document.getElementById(id); }
function unique(items) { return [...new Set(items)].filter(Boolean); }

function renderSync() {
  const report = window.SPORTS_SYNC_REPORT || {};
  if (byId("lastSyncAt")) byId("lastSyncAt").textContent = report.syncedAt ? new Date(report.syncedAt).toLocaleString("ru-RU") : "нет данных";
  if (byId("syncProvider")) byId("syncProvider").textContent = report.provider || "TheSportsDB + seed";
  if (byId("syncUpdatedCount")) byId("syncUpdatedCount").textContent = String(report.events || apiEvents.length || 0);
  if (byId("apiStatus")) byId("apiStatus").textContent = report.message || "Календарь обновляется ежедневным job-ом.";
}

function renderSummary(events) {
  if (!byId("summaryGrid")) return;
  const top = events.filter((event) => event.rating === "A+" || event.tags?.includes("TOP"));
  byId("summaryGrid").innerHTML = [
    ["Событий в выборке", events.length],
    ["TOP / A+", top.length],
    ["API events", apiEvents.length],
    ["Видов спорта", unique(events.map((event) => event.sport)).length]
  ].map(([label, value]) => `<article class="metric"><span>${label}</span><strong>${value}</strong></article>`).join("");
}

function renderSportsFilter() {
  const select = byId("sportFilter");
  if (!select) return;
  const current = select.value || "all";
  select.innerHTML = `<option value="all">Все виды спорта</option>` + unique(allEvents.map((event) => event.sport)).sort().map((sport) => `<option value="${sport}">${sport}</option>`).join("");
  select.value = [...select.options].some((option) => option.value === current) ? current : "all";
}

function filteredEvents() {
  const query = (byId("searchInput")?.value || "").toLowerCase();
  const sport = byId("sportFilter")?.value || "all";
  return allEvents.filter((event) => {
    const matchesSport = sport === "all" || event.sport === sport;
    const haystack = `${event.sport} ${event.competition} ${event.name} ${event.stage}`.toLowerCase();
    return matchesSport && haystack.includes(query);
  });
}

function renderCalendar() {
  const events = filteredEvents().sort((a, b) => a.start.localeCompare(b.start));
  renderSummary(events);
  const board = byId("calendarBoard");
  if (!board) return;
  board.innerHTML = `<section class="month-section"><div class="month-head"><h3>События сезона</h3><span>${events.length} событий</span></div><div class="event-grid">${events.map((event) => `
    <div class="event-row">
      <div class="event-cell"><strong>${dateLabel(event.start, event.end)}</strong></div>
      <div class="event-cell event-name"><strong>${event.name}</strong><span>${event.competition} · ${event.stage}</span><div class="chips">${(event.tags || []).map((tag) => `<span class="chip">${tag}</span>`).join("")}</div></div>
      <div class="event-cell">${event.sport}</div>
      <div class="event-cell"><span class="rating-pill ${ratingClass(event.rating)}">${event.rating}</span><p class="source">${event.source || "draft"}</p></div>
    </div>`).join("")}</div></section>`;
}

function renderToday() {
  const board = byId("todayBoard");
  if (!board) return;
  const todayItems = allEvents.slice(0, 3);
  if (byId("todaySourceCount")) byId("todaySourceCount").textContent = `${todayItems.length} источников`;
  board.innerHTML = todayItems.map((event) => `<article class="today-card ${ratingClass(event.rating)}"><div class="today-card-head"><div><span class="today-sport">${event.sport}</span><h4>${event.name}</h4></div><span class="rating-pill ${ratingClass(event.rating)}">${event.rating}</span></div><p class="today-competition">${event.competition}</p><div class="today-meta"><span>${dateLabel(event.start, event.end)}</span><span>${event.stage}</span></div><p class="source">${event.source || "draft"}</p></article>`).join("");
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    const tab = button.dataset.tab;
    byId("sportsView")?.classList.toggle("active-view", tab === "sports");
    byId("campaignsView")?.classList.toggle("active-view", tab === "campaigns");
    if (byId("viewTitle")) byId("viewTitle").textContent = tab === "sports" ? "Спортивный календарь" : "Акции";
  }));
  byId("toggleSidebar")?.addEventListener("click", () => document.body.classList.toggle("sidebar-collapsed"));
  byId("searchInput")?.addEventListener("input", renderCalendar);
  byId("sportFilter")?.addEventListener("change", renderCalendar);
  byId("refreshCalendarData")?.addEventListener("click", () => location.reload());
}

renderSportsFilter();
renderSync();
renderToday();
renderCalendar();
initTabs();
