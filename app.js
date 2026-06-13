const segments = [
  "Массмаркет",
  "VIP Club",
  "Silver/Gold/Platinum",
  "Реактивация",
  "Новые игроки",
  "Ритейл",
  "Support"
];

const primarySports = [
  "Футбол",
  "Хоккей",
  "Баскетбол",
  "Теннис",
  "UFC",
  "Бокс",
  "Формула-1",
  "Киберспорт",
  "Американский футбол",
  "Велоспорт",
  "Волейбол",
  "Бейсбол"
];

const sportsEvents = [
  {
    id: "wc-2026-final-stages",
    sport: "Футбол",
    competition: "FIFA World Cup 2026",
    name: "Плей-офф и финальные недели ЧМ-2026",
    start: "2026-07-01",
    end: "2026-07-19",
    rating: "A+",
    stage: "Плей-офф / финал",
    tags: ["TOP", "сборные", "global"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum", "Реактивация", "Ритейл", "Support"],
    source: "FIFA: финал 19.07.2026"
  },
  {
    id: "tour-de-france-2026",
    sport: "Велоспорт",
    competition: "Tour de France",
    name: "Tour de France 2026",
    start: "2026-07-04",
    end: "2026-07-26",
    rating: "B",
    stage: "Гранд-тур",
    tags: ["европа", "длинный турнир"],
    segments: ["Массмаркет"],
    source: "draft"
  },
  {
    id: "wimbledon-2026",
    sport: "Теннис",
    competition: "Wimbledon",
    name: "Wimbledon 2026",
    start: "2026-06-29",
    end: "2026-07-12",
    rating: "A",
    stage: "Grand Slam",
    tags: ["TOP", "теннис"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum"],
    source: "draft: Grand Slam window"
  },
  {
    id: "football-supercups-2026",
    sport: "Футбол",
    competition: "Европейские суперкубки",
    name: "Старт сезона: суперкубки и первые туры",
    start: "2026-08-01",
    end: "2026-08-31",
    rating: "A",
    stage: "Старт сезона",
    tags: ["TOP", "клубы"],
    segments: ["Массмаркет", "VIP Club", "Реактивация"],
    source: "draft"
  },
  {
    id: "us-open-2026",
    sport: "Теннис",
    competition: "US Open",
    name: "US Open 2026",
    start: "2026-08-31",
    end: "2026-09-13",
    rating: "A",
    stage: "Grand Slam",
    tags: ["TOP", "теннис"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum"],
    source: "draft: Grand Slam window"
  },
  {
    id: "ucl-league-phase-2026",
    sport: "Футбол",
    competition: "Лига чемпионов",
    name: "ЛЧ 2026/27: старт league phase",
    start: "2026-09-15",
    end: "2026-10-01",
    rating: "A+",
    stage: "Старт основного этапа",
    tags: ["TOP", "клубы", "европа"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum", "Реактивация"],
    source: "UEFA draft window"
  },
  {
    id: "rpl-autumn-2026",
    sport: "Футбол",
    competition: "РПЛ",
    name: "РПЛ: осенняя серия туров",
    start: "2026-09-01",
    end: "2026-11-30",
    rating: "A",
    stage: "Регулярный сезон",
    tags: ["локальный фокус", "Россия"],
    segments: ["Массмаркет", "VIP Club", "Ритейл", "Support"],
    source: "draft: сезонное окно"
  },
  {
    id: "khl-start-2026",
    sport: "Хоккей",
    competition: "КХЛ",
    name: "КХЛ: старт сезона и первые дерби",
    start: "2026-09-01",
    end: "2026-10-15",
    rating: "A",
    stage: "Старт сезона",
    tags: ["Россия", "хоккей"],
    segments: ["Массмаркет", "VIP Club", "Ритейл"],
    source: "draft: сезонное окно"
  },
  {
    id: "f1-autumn-2026",
    sport: "Формула-1",
    competition: "Formula 1",
    name: "Осенняя серия Гран-при",
    start: "2026-09-01",
    end: "2026-11-30",
    rating: "B",
    stage: "Финальная треть сезона",
    tags: ["медиа", "прайм"],
    segments: ["Массмаркет", "VIP Club"],
    source: "draft"
  },
  {
    id: "nba-start-2026",
    sport: "Баскетбол",
    competition: "NBA",
    name: "NBA 2026/27: старт регулярного сезона",
    start: "2026-10-20",
    end: "2026-11-10",
    rating: "B",
    stage: "Старт сезона",
    tags: ["ночной лайв", "баскетбол"],
    segments: ["Массмаркет", "VIP Club"],
    source: "draft: сезонное окно"
  },
  {
    id: "ufc-autumn-2026",
    sport: "UFC",
    competition: "UFC",
    name: "UFC: осенние numbered events",
    start: "2026-10-01",
    end: "2026-12-15",
    rating: "B",
    stage: "Серия турниров",
    tags: ["единоборства", "ночной лайв"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum"],
    source: "draft: заменить API/ручной фид"
  },
  {
    id: "ucl-december-2026",
    sport: "Футбол",
    competition: "Лига чемпионов",
    name: "ЛЧ: решающие туры league phase",
    start: "2026-12-01",
    end: "2026-12-20",
    rating: "A+",
    stage: "Решающие туры",
    tags: ["TOP", "клубы"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum", "Реактивация"],
    source: "UEFA draft window"
  },
  {
    id: "boxing-ny-2026",
    sport: "Бокс",
    competition: "Boxing PPV",
    name: "Бокс: декабрьские PPV-вечера",
    start: "2026-12-01",
    end: "2026-12-31",
    rating: "C",
    stage: "PPV cards",
    tags: ["watchlist"],
    segments: ["VIP Club", "Silver/Gold/Platinum"],
    source: "draft"
  },
  {
    id: "australian-open-2027",
    sport: "Теннис",
    competition: "Australian Open",
    name: "Australian Open 2027",
    start: "2027-01-11",
    end: "2027-01-31",
    rating: "A",
    stage: "Grand Slam",
    tags: ["TOP", "теннис"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum"],
    source: "AO: 11-31.01.2027"
  },
  {
    id: "nfl-playoffs-2027",
    sport: "Американский футбол",
    competition: "NFL",
    name: "NFL playoffs и Super Bowl окно",
    start: "2027-01-10",
    end: "2027-02-14",
    rating: "B",
    stage: "Плей-офф",
    tags: ["global", "ночной лайв"],
    segments: ["Массмаркет", "VIP Club"],
    source: "draft"
  },
  {
    id: "khl-playoffs-2027",
    sport: "Хоккей",
    competition: "КХЛ",
    name: "КХЛ: плей-офф",
    start: "2027-03-01",
    end: "2027-05-01",
    rating: "A",
    stage: "Плей-офф",
    tags: ["TOP", "Россия"],
    segments: ["Массмаркет", "VIP Club", "Ритейл", "Support"],
    source: "draft: сезонное окно"
  },
  {
    id: "ucl-knockout-2027",
    sport: "Футбол",
    competition: "Лига чемпионов",
    name: "ЛЧ: плей-офф",
    start: "2027-02-15",
    end: "2027-05-15",
    rating: "A+",
    stage: "Плей-офф",
    tags: ["TOP", "клубы", "европа"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum", "Реактивация"],
    source: "UEFA draft window"
  },
  {
    id: "march-madness-2027",
    sport: "Баскетбол",
    competition: "NCAA",
    name: "March Madness 2027",
    start: "2027-03-16",
    end: "2027-04-05",
    rating: "C",
    stage: "Турнир",
    tags: ["US", "watchlist"],
    segments: ["Массмаркет"],
    source: "draft"
  },
  {
    id: "nba-playoffs-2027",
    sport: "Баскетбол",
    competition: "NBA",
    name: "NBA playoffs 2027",
    start: "2027-04-15",
    end: "2027-06-20",
    rating: "A",
    stage: "Плей-офф / финал",
    tags: ["TOP", "ночной лайв"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum"],
    source: "draft: сезонное окно"
  },
  {
    id: "nhl-playoffs-2027",
    sport: "Хоккей",
    competition: "NHL",
    name: "NHL playoffs 2027",
    start: "2027-04-15",
    end: "2027-06-20",
    rating: "B",
    stage: "Плей-офф / финал",
    tags: ["ночной лайв", "хоккей"],
    segments: ["Массмаркет", "VIP Club"],
    source: "draft: сезонное окно"
  },
  {
    id: "rpl-spring-2027",
    sport: "Футбол",
    competition: "РПЛ",
    name: "РПЛ: весенняя развязка",
    start: "2027-04-01",
    end: "2027-05-31",
    rating: "A",
    stage: "Финиш сезона",
    tags: ["TOP", "Россия"],
    segments: ["Массмаркет", "VIP Club", "Ритейл", "Support"],
    source: "draft: сезонное окно"
  },
  {
    id: "roland-garros-2027",
    sport: "Теннис",
    competition: "Roland Garros",
    name: "Roland Garros 2027",
    start: "2027-05-23",
    end: "2027-06-06",
    rating: "A",
    stage: "Grand Slam",
    tags: ["TOP", "теннис"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum"],
    source: "draft: Grand Slam window"
  },
  {
    id: "ucl-final-2027",
    sport: "Футбол",
    competition: "Лига чемпионов",
    name: "Финал Лиги чемпионов 2026/27",
    start: "2027-06-05",
    end: "2027-06-05",
    rating: "A+",
    stage: "Финал",
    tags: ["TOP", "must-use", "финал"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum", "Реактивация", "Ритейл", "Support"],
    source: "UEFA: финал 05.06.2027"
  },
  {
    id: "club-world-cup-2027",
    sport: "Футбол",
    competition: "FIFA Club World Cup",
    name: "Клубный чемпионат мира / летнее окно FIFA",
    start: "2027-06-15",
    end: "2027-06-30",
    rating: "B",
    stage: "Летний турнир",
    tags: ["watchlist", "клубы"],
    segments: ["Массмаркет", "VIP Club"],
    source: "draft"
  }
];

const monthNames = [
  "Июль 2026",
  "Август 2026",
  "Сентябрь 2026",
  "Октябрь 2026",
  "Ноябрь 2026",
  "Декабрь 2026",
  "Январь 2027",
  "Февраль 2027",
  "Март 2027",
  "Апрель 2027",
  "Май 2027",
  "Июнь 2027"
];

const monthKeys = [
  "2026-07",
  "2026-08",
  "2026-09",
  "2026-10",
  "2026-11",
  "2026-12",
  "2027-01",
  "2027-02",
  "2027-03",
  "2027-04",
  "2027-05",
  "2027-06"
];

const ratingOrder = ["A+", "A", "B", "C"];
const STORAGE_KEY = "promoSportsHubCampaigns";
const API_EVENTS_KEY = "promoSportsHubApiEvents";
const SIDEBAR_STATE_KEY = "promoSportsHubSidebarCollapsed";

const todaySnapshot = {
  date: "2026-06-11",
  sourceCheckedAt: "2026-06-11T18:10:00+03:00",
  items: [
    {
      id: "today-fifa-world-cup-opening-day",
      sport: "Футбол",
      competition: "FIFA World Cup 2026",
      title: "Старт ЧМ-2026: Mexico vs South Africa + Korea Republic vs Czechia",
      time: "11.06, Group A",
      rating: "A+",
      status: "Сегодня live",
      promoAngle: "Главный спортивный инфоповод дня: открытие турнира, высокий массовый спрос и понятный повод для all-users коммуникации.",
      supportNote: "Поддержке нужен FAQ по часовым поясам, двум матчам дня, рынкам на матч открытия и расписанию ближайших игр хозяев.",
      sourceLabel: "FIFA.com",
      sourceUrl: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/updated-fifa-world-cup-2026-match-schedule-now-available"
    },
    {
      id: "today-nhl-stanley-cup-game-5",
      sport: "Хоккей",
      competition: "NHL Stanley Cup Final",
      title: "Game 5: Vegas Golden Knights @ Carolina Hurricanes",
      time: "11.06, 8:00 PM ET / ночь 12.06 МСК",
      rating: "A",
      status: "Сегодня live",
      promoAngle: "Серия 2-2 перед Game 5: сильный ночной live для VIP Club, хоккейной аудитории и реактивации через финальную серию.",
      supportNote: "Следить за поздним стартом по МСК и повышенной нагрузкой после матча: возможны вопросы по live-расчётам и сериям рынков.",
      sourceLabel: "NHL.com",
      sourceUrl: "https://www.nhl.com/news/topic/playoffs/2026-stanley-cup-final-schedule-television-results"
    },
    {
      id: "today-nba-finals-game-5-prep",
      sport: "Баскетбол",
      competition: "NBA Finals 2026",
      title: "Knicks vs Spurs: подготовка к Game 5",
      time: "Game 5: 13.06, 8:30 PM ET / ночь 14.06 МСК",
      rating: "A",
      status: "Подготовка",
      promoAngle: "Knicks ведут 3-1, Game 5 может стать титульным матчем: готовим pre-match, VIP-линии и напоминания за сутки.",
      supportNote: "Game 5 не сегодня, но сегодня нужно проверить коммуникации после камбэка Knicks и сценарии, если серия закончится 13 июня.",
      sourceLabel: "NBA.com",
      sourceUrl: "https://www.nba.com/news/2026-nba-finals-schedule"
    },
    {
      id: "today-f1-barcelona-preview",
      sport: "Формула-1",
      competition: "Formula 1",
      title: "Barcelona-Catalunya GP: старт уикенда завтра",
      time: "12.06 - 14.06",
      rating: "B",
      status: "Грядущее",
      promoAngle: "После старта ЧМ это второй weekend-слот: можно держать F1 как дополнительный слой для VIP и weekend-аудитории.",
      supportNote: "Подсветить расписание практик/квалификации и не смешивать коммуникации с матчами открытия ЧМ.",
      sourceLabel: "Formula1.com",
      sourceUrl: "https://www.formula1.com/en/racing/2026"
    },
    {
      id: "today-fifa-hosts-day-2",
      sport: "Футбол",
      competition: "FIFA World Cup 2026",
      title: "Завтра: первые матчи Canada и USA",
      time: "12.06, Group B / Group D",
      rating: "A+",
      status: "Грядущее",
      promoAngle: "После матча открытия нужно удержать внимание: Canada и USA как хосты дают понятный второй коммуникационный пик.",
      supportNote: "Проверить расписание 12 июня, локальные названия стадионов и корректность пушей по часовым поясам.",
      sourceLabel: "FIFA.com",
      sourceUrl: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/updated-fifa-world-cup-2026-match-schedule-now-available"
    }
  ]
};

const enrichedSeasonEvents = [
  {
    id: "euro-qualifiers-autumn-2026",
    sport: "Футбол",
    competition: "EURO / World qualifiers",
    name: "Осенние окна сборных",
    start: "2026-09-03",
    end: "2026-11-18",
    rating: "A",
    stage: "Сборные",
    tags: ["сборные", "окна FIFA"],
    segments: ["Массмаркет", "VIP Club", "Support"],
    source: "draft: международные окна"
  },
  {
    id: "atp-finals-2026",
    sport: "Теннис",
    competition: "ATP Finals",
    name: "ATP Finals 2026",
    start: "2026-11-15",
    end: "2026-11-22",
    rating: "A",
    stage: "Финал сезона",
    tags: ["TOP", "теннис"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum"],
    source: "draft"
  },
  {
    id: "davis-cup-finals-2026",
    sport: "Теннис",
    competition: "Davis Cup",
    name: "Davis Cup Finals 2026",
    start: "2026-11-17",
    end: "2026-11-22",
    rating: "B",
    stage: "Финальный турнир",
    tags: ["теннис", "сборные"],
    segments: ["Массмаркет", "VIP Club"],
    source: "draft"
  },
  {
    id: "f1-season-start-2027",
    sport: "Формула-1",
    competition: "Formula 1",
    name: "Formula 1: старт сезона 2027",
    start: "2027-03-01",
    end: "2027-04-30",
    rating: "B",
    stage: "Старт сезона",
    tags: ["медиа", "weekend"],
    segments: ["Массмаркет", "VIP Club"],
    source: "draft"
  },
  {
    id: "ufc-spring-2027",
    sport: "UFC",
    competition: "UFC",
    name: "Весенние UFC numbered events",
    start: "2027-03-01",
    end: "2027-05-31",
    rating: "B",
    stage: "Серия турниров",
    tags: ["единоборства", "ночной лайв"],
    segments: ["Массмаркет", "VIP Club", "Silver/Gold/Platinum"],
    source: "draft: API/manual watchlist"
  },
  {
    id: "esports-majors-2027",
    sport: "Киберспорт",
    competition: "CS2 / Dota 2 Majors",
    name: "Крупные киберспортивные мейджоры весны",
    start: "2027-03-01",
    end: "2027-06-30",
    rating: "B",
    stage: "Major window",
    tags: ["кибер", "молодая аудитория"],
    segments: ["Массмаркет", "Реактивация", "Новые игроки"],
    source: "draft: нужен профильный esports feed"
  },
  {
    id: "iihf-worlds-2027",
    sport: "Хоккей",
    competition: "IIHF World Championship",
    name: "ЧМ по хоккею 2027",
    start: "2027-05-07",
    end: "2027-05-23",
    rating: "A",
    stage: "Чемпионат мира",
    tags: ["TOP", "сборные", "хоккей"],
    segments: ["Массмаркет", "VIP Club", "Ритейл", "Support"],
    source: "draft"
  },
  {
    id: "fa-cup-final-2027",
    sport: "Футбол",
    competition: "FA Cup",
    name: "Финал Кубка Англии 2027",
    start: "2027-05-15",
    end: "2027-05-15",
    rating: "B",
    stage: "Финал",
    tags: ["Англия", "финал"],
    segments: ["Массмаркет", "VIP Club"],
    source: "draft"
  },
  {
    id: "uefa-conference-final-2027",
    sport: "Футбол",
    competition: "Лига конференций",
    name: "Финал Лиги конференций 2026/27",
    start: "2027-05-19",
    end: "2027-05-19",
    rating: "B",
    stage: "Финал",
    tags: ["финал", "европа"],
    segments: ["Массмаркет", "VIP Club"],
    source: "UEFA draft window"
  },
  {
    id: "uefa-europa-final-2027",
    sport: "Футбол",
    competition: "Лига Европы",
    name: "Финал Лиги Европы 2026/27",
    start: "2027-05-26",
    end: "2027-05-26",
    rating: "A",
    stage: "Финал",
    tags: ["TOP", "финал"],
    segments: ["Массмаркет", "VIP Club", "Реактивация", "Support"],
    source: "UEFA draft window"
  }
];

const defaultCampaigns = [
  {
    id: "camp-world-cup-final",
    eventId: "wc-2026-final-stages",
    name: "Фрибеты всем на плей-офф ЧМ",
    segment: "Массмаркет",
    mechanic: "Фрибет",
    start: "2026-07-01",
    end: "2026-07-19",
    status: "planned",
    owner: "CVM",
    note: "Базовый федеральный промо-слой, нужна синхронизация с поддержкой."
  },
  {
    id: "camp-ucl-final",
    eventId: "ucl-final-2027",
    name: "VIP Club финал ЛЧ",
    segment: "VIP Club",
    mechanic: "Prediction",
    start: "2027-05-29",
    end: "2027-06-05",
    status: "brief",
    owner: "CVM",
    note: "Нужен список VIP Club без пересечения с Silver/Gold/Platinum."
  }
];

const eventDetails = {
  "wimbledon-2026": {
    phases: [
      { date: "29.06", title: "Старт основной сетки", note: "Первые раунды, высокий объём матчей каждый день." },
      { date: "06.07", title: "Вторая неделя", note: "Сужение сетки, рост медийности топ-игроков." },
      { date: "09.07 - 10.07", title: "Полуфиналы", note: "Ключевые инфоповоды перед финальным уикендом." },
      { date: "11.07 - 12.07", title: "Финалы", note: "Пиковое окно для TOP-механик." }
    ],
    breaks: ["13.07 - 30.08: пауза до US Open как следующего Grand Slam окна."],
    schedule: [
      { date: "29.06 - 05.07", title: "1-4 раунды", note: "Много матчей, удобно для накопительных механик и турниров." },
      { date: "06.07 - 08.07", title: "Четвертьфиналы", note: "Фокус на топ-игроках и live-ставках." },
      { date: "09.07 - 12.07", title: "Финальная стадия", note: "Отдельный промо-спринт или prediction." }
    ],
    storiesNow: ["Grand Slam на траве", "Высокая плотность матчей в первую неделю"],
    storiesUpcoming: ["Финальный уикенд", "Переход внимания к US Open"]
  },
  "wc-2026-final-stages": {
    phases: [
      { date: "01.07 - 05.07", title: "Раунд 1/8", note: "Максимальная плотность матчей плей-офф." },
      { date: "09.07 - 11.07", title: "Четвертьфиналы", note: "Сильное окно для рейтинговых матчей." },
      { date: "14.07 - 15.07", title: "Полуфиналы", note: "Федеральный инфоповод." },
      { date: "19.07", title: "Финал", note: "Must-use событие сезона." }
    ],
    breaks: ["06.07 - 08.07: пауза между 1/8 и 1/4", "16.07 - 18.07: окно перед финалом"],
    schedule: [
      { date: "01.07 - 19.07", title: "Плей-офф ЧМ-2026", note: "Полное расписание должно подтягиваться daily sync после публикации/уточнений." }
    ],
    storiesNow: ["Сборные", "Плей-офф", "Глобальный спортивный инфоповод"],
    storiesUpcoming: ["Полуфиналы", "Финал 19.07.2026", "Офлайн/ритейл просмотры"]
  },
  "us-open-2026": {
    phases: [
      { date: "31.08", title: "Старт турнира", note: "Первая неделя с высокой плотностью матчей." },
      { date: "07.09", title: "Вторая неделя", note: "Топ-матчи и праймовые пары." },
      { date: "12.09 - 13.09", title: "Финалы", note: "Пиковые инфоповоды." }
    ],
    breaks: ["После 13.09: переход в осенний футбольный календарь."],
    schedule: [
      { date: "31.08 - 06.09", title: "Ранние раунды", note: "Подходит для турнира по ставкам." },
      { date: "07.09 - 13.09", title: "Финальная неделя", note: "Prediction/фрибеты на финальные матчи." }
    ],
    storiesNow: ["Grand Slam", "Ночной live"],
    storiesUpcoming: ["Финалы", "Закрытие теннисного летнего цикла"]
  }
};

const state = {
  tab: "sports",
  sportsMode: "list",
  search: "",
  sport: "all",
  month: "all",
  campaignStatus: "all",
  selectedSegments: new Set(segments),
  selectedRatings: new Set(ratingOrder),
  campaigns: loadCampaigns(),
  apiEvents: loadApiEvents()
};

function allEvents() {
  const byId = new Map();
  [...sportsEvents, ...enrichedSeasonEvents, ...state.apiEvents].forEach((event) => byId.set(event.id, event));
  return [...byId.values()];
}

function loadCampaigns() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultCampaigns;
  try {
    return JSON.parse(saved);
  } catch {
    return defaultCampaigns;
  }
}

function saveCampaigns() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.campaigns));
}

function loadApiEvents() {
  if (Array.isArray(window.GENERATED_API_EVENTS)) return window.GENERATED_API_EVENTS;
  const saved = localStorage.getItem(API_EVENTS_KEY);
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

function saveApiEvents() {
  localStorage.setItem(API_EVENTS_KEY, JSON.stringify(state.apiEvents));
}

function dateLabel(start, end) {
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  const fmt = new Intl.DateTimeFormat("ru-RU", { day: "2-digit", month: "2-digit" });
  if (start === end) return fmt.format(startDate);
  return `${fmt.format(startDate)} - ${fmt.format(endDate)}`;
}

function monthKeyFor(date) {
  return date.slice(0, 7);
}

function eventMatchesMonth(event, month) {
  if (month === "all") return true;
  return event.start.slice(0, 7) <= month && event.end.slice(0, 7) >= month;
}

function campaignsForEvent(eventId) {
  return state.campaigns.filter((campaign) => campaign.eventId === eventId);
}

function filteredEvents() {
  const search = state.search.trim().toLowerCase();
  return allEvents()
    .filter((event) => state.sport === "all" || event.sport === state.sport)
    .filter((event) => eventMatchesMonth(event, state.month))
    .filter((event) => state.selectedRatings.has(event.rating))
    .filter((event) => state.tab !== "campaigns" || event.segments.some((segment) => state.selectedSegments.has(segment)))
    .filter((event) => {
      if (!search) return true;
      return [event.sport, event.competition, event.name, event.stage, event.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(search);
    })
    .sort((a, b) => a.start.localeCompare(b.start) || ratingOrder.indexOf(a.rating) - ratingOrder.indexOf(b.rating));
}

function filteredCampaigns() {
  const search = state.search.trim().toLowerCase();
  return state.campaigns
    .filter((campaign) => state.campaignStatus === "all" || campaign.status === state.campaignStatus)
    .filter((campaign) => state.selectedSegments.has(campaign.segment))
    .filter((campaign) => {
      const event = allEvents().find((item) => item.id === campaign.eventId);
      return state.sport === "all" || !event || event.sport === state.sport;
    })
    .filter((campaign) => {
      if (state.month === "all") return true;
      return campaign.start.slice(0, 7) <= state.month && campaign.end.slice(0, 7) >= state.month;
    })
    .filter((campaign) => {
      if (!search) return true;
      const event = allEvents().find((item) => item.id === campaign.eventId);
      return [campaign.name, campaign.mechanic, campaign.owner, campaign.note, event?.name, event?.competition]
        .join(" ")
        .toLowerCase()
        .includes(search);
    })
    .sort((a, b) => a.start.localeCompare(b.start));
}

function initControls() {
  const sportFilter = document.getElementById("sportFilter");
  initSidebarToggle();
  refreshSportFilter();

  const monthFilter = document.getElementById("monthFilter");
  monthKeys.forEach((key, index) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = monthNames[index];
    monthFilter.append(option);
  });

  const segmentFilters = document.getElementById("segmentFilters");
  segments.forEach((segment) => {
    segmentFilters.append(createCheckbox(segment, true, (checked) => {
      toggleSet(state.selectedSegments, segment, checked);
      render();
    }));
  });

  const ratingFilters = document.getElementById("ratingFilters");
  ratingOrder.forEach((rating) => {
    ratingFilters.append(createCheckbox(rating, true, (checked) => {
      toggleSet(state.selectedRatings, rating, checked);
      render();
    }));
  });

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => setTab(button.dataset.tab));
  });
  document.querySelectorAll("[data-sports-mode]").forEach((button) => {
    button.addEventListener("click", () => setSportsMode(button.dataset.sportsMode));
  });

  document.getElementById("searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });
  sportFilter.addEventListener("change", (event) => {
    state.sport = event.target.value;
    render();
  });
  monthFilter.addEventListener("change", (event) => {
    state.month = event.target.value;
    render();
  });
  document.getElementById("campaignStatusFilter").addEventListener("change", (event) => {
    state.campaignStatus = event.target.value;
    render();
  });
  document.getElementById("refreshCalendarData").addEventListener("click", refreshCalendarData);
  document.getElementById("openCampaignForm").addEventListener("click", () => openCampaignDialog());
  document.getElementById("closeCampaignForm").addEventListener("click", () => document.getElementById("campaignDialog").close());
  document.getElementById("closeEventDialog").addEventListener("click", () => document.getElementById("eventDialog").close());
  document.getElementById("seedExamples").addEventListener("click", () => {
    state.campaigns = defaultCampaigns;
    saveCampaigns();
    render();
  });
  document.getElementById("campaignForm").addEventListener("submit", addCampaign);

  fillCampaignSelects();
  updateScopedSidebar();
}

function initSidebarToggle() {
  const button = document.getElementById("toggleSidebar");
  const saved = localStorage.getItem(SIDEBAR_STATE_KEY) === "true";
  setSidebarCollapsed(saved);
  button.addEventListener("click", () => {
    const next = !document.body.classList.contains("sidebar-collapsed");
    setSidebarCollapsed(next);
    localStorage.setItem(SIDEBAR_STATE_KEY, String(next));
  });
}

function setSidebarCollapsed(collapsed) {
  const button = document.getElementById("toggleSidebar");
  document.body.classList.toggle("sidebar-collapsed", collapsed);
  button.setAttribute("aria-label", collapsed ? "Раскрыть боковое меню" : "Скрыть боковое меню");
  button.setAttribute("title", collapsed ? "Раскрыть боковое меню" : "Скрыть боковое меню");
}

function createCheckbox(labelText, checked, onChange) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.addEventListener("change", () => onChange(input.checked));
  const span = document.createElement("span");
  span.textContent = labelText;
  label.append(input, span);
  return label;
}

function toggleSet(set, value, enabled) {
  if (enabled) set.add(value);
  else set.delete(value);
}

function fillCampaignSelects() {
  const eventSelect = document.getElementById("campaignEvent");
  eventSelect.innerHTML = "";
  allEvents()
    .sort((a, b) => a.start.localeCompare(b.start))
    .forEach((event) => {
      const option = document.createElement("option");
      option.value = event.id;
      option.textContent = `${dateLabel(event.start, event.end)} · ${event.competition} · ${event.name}`;
      eventSelect.append(option);
    });

  const segmentSelect = document.getElementById("campaignSegment");
  segmentSelect.innerHTML = "";
  segments.forEach((segment) => {
    const option = document.createElement("option");
    option.value = segment;
    option.textContent = segment;
    segmentSelect.append(option);
  });
}

function setTab(tabName) {
  state.tab = tabName;
  document.querySelectorAll(".tab").forEach((button) => button.classList.toggle("active", button.dataset.tab === tabName));
  updateScopedSidebar();
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  document.getElementById(`${tabName}View`).classList.add("active-view");
  document.getElementById("viewTitle").textContent = {
    sports: "Спортивный календарь",
    campaigns: "Акции и механики"
  }[tabName];
  render();
}

function updateScopedSidebar() {
  document.querySelectorAll("[data-visible-tab]").forEach((block) => {
    block.classList.toggle("is-visible", block.dataset.visibleTab === state.tab);
  });
}

function setSportsMode(mode) {
  state.sportsMode = mode;
  document.querySelectorAll("[data-sports-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sportsMode === mode);
  });
  renderCalendar();
}

function openCampaignDialog(eventId = null) {
  const dialog = document.getElementById("campaignDialog");
  document.getElementById("campaignForm").reset();
  const event = allEvents().find((item) => item.id === eventId) || filteredEvents()[0] || allEvents()[0];
  document.getElementById("campaignEvent").value = event.id;
  document.getElementById("campaignStart").value = event.start;
  document.getElementById("campaignEnd").value = event.end;
  document.getElementById("campaignSegment").value = event.segments[0];
  dialog.showModal();
}

function addCampaign(event) {
  event.preventDefault();
  const campaign = {
    id: `camp-${Date.now()}`,
    eventId: document.getElementById("campaignEvent").value,
    name: document.getElementById("campaignName").value.trim(),
    segment: document.getElementById("campaignSegment").value,
    mechanic: document.getElementById("campaignMechanic").value,
    start: document.getElementById("campaignStart").value,
    end: document.getElementById("campaignEnd").value,
    status: document.getElementById("campaignStatus").value,
    owner: document.getElementById("campaignOwner").value.trim() || "CVM",
    note: document.getElementById("campaignNote").value.trim()
  };
  state.campaigns.push(campaign);
  saveCampaigns();
  document.getElementById("campaignDialog").close();
  render();
}

function render() {
  renderTodaySnapshot();
  renderSyncStatus();
  renderSummary();
  renderCalendar();
  renderCampaigns();
}

function renderTodaySnapshot() {
  const board = document.getElementById("todayBoard");
  const count = document.getElementById("todaySourceCount");
  if (!board || !count) return;
  const sourceCount = new Set(todaySnapshot.items.map((item) => item.sourceUrl)).size;
  count.textContent = `${sourceCount} источников`;
  board.innerHTML = todaySnapshot.items.map((item) => `
    <article class="today-card ${ratingClass(item.rating)}">
      <div class="today-card-head">
        <div>
          <span class="today-sport">${item.sport}</span>
          <h4>${item.title}</h4>
        </div>
        <span class="rating-pill ${ratingClass(item.rating)}">${item.rating}</span>
      </div>
      <p class="today-competition">${item.competition}</p>
      <div class="today-meta">
        <span>${item.time}</span>
        <span>${item.status}</span>
      </div>
      <p>${item.promoAngle}</p>
      <p class="source">${item.supportNote}</p>
      <a class="source-link" href="${item.sourceUrl}" target="_blank" rel="noreferrer">${item.sourceLabel}</a>
    </article>
  `).join("");
}

function renderSyncStatus() {
  const report = window.SPORTS_SYNC_REPORT || {};
  document.getElementById("lastSyncAt").textContent = report.syncedAt
    ? new Date(report.syncedAt).toLocaleString("ru-RU")
    : "ещё не выполнялся";
  document.getElementById("syncProvider").textContent = report.provider || "TheSportsDB + seed";
  document.getElementById("syncUpdatedCount").textContent = String(report.events || state.apiEvents.length || 0);
  document.getElementById("apiStatus").textContent =
    report.message || "Календарь обновляется ежедневным job-ом. Пользовательских действий не требуется.";
}

function refreshCalendarData() {
  const button = document.getElementById("refreshCalendarData");
  const previousText = button.textContent;
  button.disabled = true;
  button.textContent = "Обновляю";
  const script = document.createElement("script");
  script.src = `data/generated-events.js?v=${Date.now()}`;
  script.onload = () => {
    state.apiEvents = Array.isArray(window.GENERATED_API_EVENTS) ? window.GENERATED_API_EVENTS : [];
    refreshSportFilter();
    fillCampaignSelects();
    render();
    button.disabled = false;
    button.textContent = previousText;
  };
  script.onerror = () => {
    document.getElementById("apiStatus").textContent = "Не удалось обновить витрину данных. Проверь файл data/generated-events.js.";
    button.disabled = false;
    button.textContent = previousText;
  };
  document.body.append(script);
}

function renderSummary() {
  const events = filteredEvents();
  const topEvents = events.filter((event) => event.rating === "A+" || event.tags.includes("TOP"));
  const sportsCount = new Set(events.map((event) => event.sport)).size;
  const summary = [
    ["Событий в выборке", events.length],
    ["TOP / A+", topEvents.length],
    ["API events", state.apiEvents.length],
    ["Видов спорта", sportsCount]
  ];
  document.getElementById("summaryGrid").innerHTML = summary
    .map(([label, value]) => `<article class="metric"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
}

function renderCalendar() {
  const events = filteredEvents();
  const board = document.getElementById("calendarBoard");
  const matrix = document.getElementById("seasonMatrix");
  board.classList.toggle("hidden", state.sportsMode !== "list");
  matrix.classList.toggle("hidden", state.sportsMode !== "matrix");
  if (state.sportsMode === "matrix") {
    renderSeasonMatrix(events);
    return;
  }

  if (!events.length) {
    board.innerHTML = `<div class="empty-state">По текущим фильтрам событий нет.</div>`;
    matrix.innerHTML = "";
    return;
  }

  const byMonth = monthKeys.map((key, index) => ({
    key,
    name: monthNames[index],
    events: events.filter((event) => eventMatchesMonth(event, key))
  })).filter((month) => month.events.length);

  board.innerHTML = byMonth.map((month) => `
    <section class="month-section">
      <div class="month-head">
        <h3>${month.name}</h3>
        <span>${month.events.length} событий</span>
      </div>
      <div class="event-grid">
        ${month.events.map(renderEventRow).join("")}
      </div>
    </section>
  `).join("");
  board.querySelectorAll("[data-open-event]").forEach((button) => {
    button.addEventListener("click", () => openEventDialog(button.dataset.openEvent));
  });
}

function renderSeasonMatrix(events) {
  const matrix = document.getElementById("seasonMatrix");
  if (!events.length) {
    matrix.innerHTML = `<div class="empty-state">По текущим фильтрам событий нет.</div>`;
    return;
  }

  const rows = events
    .slice()
    .sort((a, b) => a.sport.localeCompare(b.sport, "ru") || a.competition.localeCompare(b.competition, "ru") || a.start.localeCompare(b.start));

  matrix.innerHTML = `
    <div class="matrix-grid">
      <div class="matrix-head matrix-col-sport">Спорт</div>
      <div class="matrix-head matrix-col-tournament">Турнир / событие</div>
      <div class="matrix-head matrix-col-rating">Ранг</div>
      ${monthNames.map((month) => `<div class="matrix-head">${month}</div>`).join("")}
      ${rows.map(renderMatrixRow).join("")}
    </div>
  `;
  matrix.querySelectorAll("[data-open-event]").forEach((button) => {
    button.addEventListener("click", () => openEventDialog(button.dataset.openEvent));
  });
}

function renderMatrixRow(event) {
  return `
    <div class="matrix-sticky matrix-col-sport">
      <div class="matrix-sport"><span class="sport-dot"></span>${event.sport}</div>
    </div>
    <div class="matrix-sticky matrix-col-tournament">
      <strong>${event.competition}</strong>
      <div class="source">${event.name}</div>
    </div>
    <div class="matrix-sticky matrix-col-rating">
      <span class="rating-pill ${ratingClass(event.rating)}">${event.rating}</span>
    </div>
    ${monthKeys.map((monthKey) => `<div class="matrix-cell">${renderMatrixEventInMonth(event, monthKey)}</div>`).join("")}
  `;
}

function renderMatrixEventInMonth(event, monthKey) {
  if (!eventMatchesMonth(event, monthKey)) return "";
  return `
    <button class="matrix-event ${ratingClass(event.rating)}" type="button" data-open-event="${event.id}">
      <strong>${dateLabel(clampDateToMonth(event.start, monthKey, "start"), clampDateToMonth(event.end, monthKey, "end"))}</strong>
      <span>${event.stage}</span>
      ${event.tags.slice(0, 2).map((tag) => `<span>${tag}</span>`).join("")}
    </button>
  `;
}

function clampDateToMonth(date, monthKey, edge) {
  const first = `${monthKey}-01`;
  const lastDate = new Date(Number(monthKey.slice(0, 4)), Number(monthKey.slice(5, 7)), 0).getDate();
  const last = `${monthKey}-${String(lastDate).padStart(2, "0")}`;
  if (edge === "start") return date < first ? first : date;
  return date > last ? last : date;
}

function renderEventRow(event) {
  return `
    <div class="event-row">
      <div class="event-cell"><strong>${dateLabel(event.start, event.end)}</strong></div>
      <div class="event-cell event-name">
        <button class="event-title-button" type="button" data-open-event="${event.id}">${event.name}</button>
        <span>${event.competition} · ${event.stage}</span>
        <div class="chips">${event.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
      </div>
      <div class="event-cell">${event.sport}</div>
      <div class="event-cell">
        <span class="rating-pill ${ratingClass(event.rating)}">${event.rating}</span>
        <p class="source">${event.source}</p>
      </div>
    </div>
  `;
}

function openEventDialog(eventId) {
  const event = allEvents().find((item) => item.id === eventId);
  if (!event) return;
  const detail = eventDetails[event.id] || buildDefaultEventDetail(event);
  document.getElementById("eventDetailSport").textContent = `${event.sport} · ${event.competition}`;
  document.getElementById("eventDetailTitle").textContent = event.name;
  document.getElementById("eventDetailBody").innerHTML = renderEventDetail(event, detail);
  document.getElementById("eventDialog").showModal();
}

function buildDefaultEventDetail(event) {
  return {
    phases: [
      { date: dateLabel(event.start, event.end), title: event.stage, note: "Базовое окно турнира из спортивного календаря." }
    ],
    breaks: ["Перерывы и уточнения расписания появятся после daily sync или ручной детализации турнира."],
    schedule: [
      { date: dateLabel(event.start, event.end), title: event.name, note: "Полное расписание матчей будет отображаться после появления данных у провайдера." }
    ],
    storiesNow: event.tags,
    storiesUpcoming: ["Уточнение расписания", "Выделение TOP-матчей", "Проверка медийных инфоповодов"]
  };
}

function renderEventDetail(event, detail) {
  return `
    <section class="detail-grid">
      <article class="detail-card"><span>Даты</span><strong>${dateLabel(event.start, event.end)}</strong></article>
      <article class="detail-card"><span>Ранг</span><strong>${event.rating}</strong></article>
      <article class="detail-card"><span>Стадия</span><strong>${event.stage}</strong></article>
      <article class="detail-card"><span>Источник</span><strong>${event.source}</strong></article>
    </section>
    <section class="detail-section">
      <h3>Ключевые даты и туры</h3>
      <div class="timeline">${detail.phases.map((phase) => `
        <article class="timeline-item">
          <div class="timeline-date">${phase.date}</div>
          <div><strong>${phase.title}</strong><p class="source">${phase.note}</p></div>
        </article>
      `).join("")}</div>
    </section>
    <section class="detail-section">
      <h3>Перерывы и окна внимания</h3>
      <div class="story-list">${detail.breaks.map((item) => `<article class="story-item"><strong>${item}</strong></article>`).join("")}</div>
    </section>
    <section class="detail-section">
      <h3>Полное расписание</h3>
      <div class="schedule-list">${detail.schedule.map((item) => `
        <article class="schedule-item">
          <strong>${item.date} · ${item.title}</strong>
          <span>${item.note}</span>
        </article>
      `).join("")}</div>
    </section>
    <section class="detail-section">
      <h3>Инфоповоды</h3>
      <div class="detail-grid">
        <article class="detail-card"><span>Текущие</span><strong>${detail.storiesNow.join(", ") || "нет"}</strong></article>
        <article class="detail-card"><span>Грядущие</span><strong>${detail.storiesUpcoming.join(", ") || "нет"}</strong></article>
      </div>
    </section>
  `;
}

function ratingClass(rating) {
  return {
    "A+": "rating-a-plus",
    A: "rating-a",
    B: "rating-b",
    C: "rating-c"
  }[rating];
}

function renderCampaigns() {
  const campaigns = filteredCampaigns();
  const campaignList = document.getElementById("campaignList");
  if (!campaigns.length) {
    campaignList.innerHTML = `<div class="empty-state">Акций по текущим фильтрам нет.</div>`;
  } else {
    campaignList.innerHTML = campaigns.map((campaign) => {
      const event = allEvents().find((item) => item.id === campaign.eventId);
      return `
        <article class="campaign-card">
          <h4>${campaign.name}</h4>
          <p>${event ? `${event.competition}: ${event.name}` : "Без события"}</p>
          <div class="campaign-meta">
            <span class="status-pill status-${campaign.status}">${statusLabel(campaign.status)}</span>
            <span class="chip">${campaign.segment}</span>
            <span class="chip">${campaign.mechanic}</span>
            <span class="chip">${dateLabel(campaign.start, campaign.end)}</span>
            <span class="chip">${campaign.owner}</span>
          </div>
          ${campaign.note ? `<p class="source">${campaign.note}</p>` : ""}
        </article>
      `;
    }).join("");
  }

  const opportunities = filteredEvents()
    .filter((event) => (event.rating === "A+" || event.tags.includes("TOP")) && campaignsForEvent(event.id).length === 0)
    .slice(0, 8);
  document.getElementById("opportunityList").innerHTML = opportunities.length
    ? opportunities.map((event) => `
      <article class="opportunity-card">
        <h4>${event.name}</h4>
        <p>${dateLabel(event.start, event.end)} · ${event.sport} · ${event.competition}</p>
        <div class="chips"><span class="rating-pill ${ratingClass(event.rating)}">${event.rating}</span>${event.segments.map((segment) => `<span class="chip">${segment}</span>`).join("")}</div>
      </article>
    `).join("")
    : `<div class="empty-state">Все TOP-события в выборке уже имеют акции.</div>`;
}

function statusLabel(status) {
  return {
    planned: "Планируется",
    brief: "Бриф",
    live: "Live",
    done: "Завершено"
  }[status];
}

function refreshSportFilter() {
  const sportFilter = document.getElementById("sportFilter");
  const current = sportFilter.value;
  sportFilter.innerHTML = `<option value="all">Все виды спорта</option>`;
  [...new Set([...primarySports, ...allEvents().map((event) => event.sport)])].sort().forEach((sport) => {
    const option = document.createElement("option");
    option.value = sport;
    option.textContent = sport;
    sportFilter.append(option);
  });
  sportFilter.value = [...sportFilter.options].some((option) => option.value === current) ? current : "all";
}

initControls();
render();
