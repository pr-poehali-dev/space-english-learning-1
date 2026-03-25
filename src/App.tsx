import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "lessons" | "tasks" | "audio" | "profile" | "dictionary" | "tests";

// ─── STARS ────────────────────────────────────────────────────────────────────
function StarsBg() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4,
  }));
  return (
    <div className="stars-bg">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            "--duration": `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
      <div className="nebula-blob" style={{ width: 600, height: 600, background: "#7c3aed", top: "-10%", left: "-10%" }} />
      <div className="nebula-blob" style={{ width: 500, height: 500, background: "#0891b2", top: "40%", right: "-5%" }} />
      <div className="nebula-blob" style={{ width: 400, height: 400, background: "#be185d", bottom: "-10%", left: "30%" }} />
    </div>
  );
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
const navItems = [
  { id: "home", icon: "Rocket", label: "Главная" },
  { id: "lessons", icon: "BookOpen", label: "Уроки" },
  { id: "tasks", icon: "PenLine", label: "Задания" },
  { id: "audio", icon: "Headphones", label: "Аудирование" },
  { id: "profile", icon: "User", label: "Кабинет" },
  { id: "dictionary", icon: "Globe", label: "Словарь" },
  { id: "tests", icon: "Trophy", label: "Тесты" },
] as const;

function Nav({ current, onNav }: { current: Page; onNav: (p: Page) => void }) {
  return (
    <nav
      style={{
        background: "linear-gradient(180deg, rgba(10,5,32,0.97) 0%, rgba(20,10,50,0.93) 100%)",
        borderRight: "1px solid rgba(168,85,247,0.2)",
        backdropFilter: "blur(20px)",
      }}
      className="fixed left-0 top-0 h-full w-20 lg:w-60 flex flex-col z-50 py-6"
    >
      <div className="px-4 mb-8 flex items-center gap-3">
        <span className="text-2xl">🚀</span>
        <span
          className="hidden lg:block font-exo text-lg leading-tight"
          style={{ color: "#c4b5fd", fontWeight: 900 }}
        >
          Space<br />English
        </span>
      </div>

      <div className="flex flex-col gap-1 px-2 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNav(item.id as Page)}
            className={`nav-item flex items-center gap-3 px-3 py-3 rounded-xl border border-transparent w-full text-left ${
              current === item.id ? "active" : "hover:bg-purple-900/20"
            }`}
          >
            <Icon
              name={item.icon}
              size={20}
              className={current === item.id ? "text-purple-300" : "text-purple-500"}
            />
            <span
              className="hidden lg:block text-sm font-medium font-rubik"
              style={{ color: current === item.id ? "#e9d5ff" : "#a78bfa" }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="px-3 mt-4">
        <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(168,85,247,0.1)" }}>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}
          >
            👨‍🚀
          </div>
          <div className="hidden lg:block">
            <div className="text-xs font-semibold text-white">Космонавт</div>
            <div className="text-xs" style={{ color: "#a78bfa" }}>Уровень 3</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <div className="relative overflow-hidden">
      <div className="planet-yellow planet-float" style={{ position: "absolute", width: 140, height: 140, top: -20, right: 80, opacity: 0.8 }} />
      <div className="planet-green planet-float2" style={{ position: "absolute", width: 90, height: 90, top: 60, right: 240, opacity: 0.7 }} />
      <div className="planet-pink planet-float3" style={{ position: "absolute", width: 70, height: 70, top: 20, right: 380, opacity: 0.6 }} />
      <div className="planet-blue planet-float" style={{ position: "absolute", width: 110, height: 110, bottom: 200, right: 60, opacity: 0.7 }} />

      <div className="relative z-10 pt-16 pb-10">
        <div className="fade-in-up-1 flex items-center gap-3 mb-4">
          <span className="badge-space">6–9 классы · Инженерно-космический профиль</span>
        </div>
        <h1
          className="fade-in-up-2 font-exo font-black text-5xl lg:text-6xl leading-tight mb-4"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 40%, #67e8f9 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Космический<br />английский 🚀
        </h1>
        <p className="fade-in-up-3 text-lg mb-8 max-w-lg" style={{ color: "#c4b5fd" }}>
          Изучай профессиональную лексику астронавтов, космических инженеров и учёных. Задания, аудирование, тесты и сертификаты!
        </p>
        <div className="fade-in-up-4 flex flex-wrap gap-4">
          <button className="btn-space px-8 py-3 text-base" onClick={() => onNav("lessons")}>
            🛸 Начать обучение
          </button>
          <button className="btn-cyan px-8 py-3 text-base" onClick={() => onNav("tests")}>
            🏆 Пройти тест
          </button>
        </div>
      </div>

      <div className="fade-in-up-5 grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {[
          { emoji: "📚", value: "12", label: "Уроков" },
          { emoji: "✏️", value: "48", label: "Заданий" },
          { emoji: "🎧", value: "24", label: "Аудио" },
          { emoji: "🏅", value: "15", label: "Достижений" },
        ].map((s) => (
          <div key={s.label} className="space-card rounded-2xl p-5 text-center">
            <div className="text-3xl mb-1">{s.emoji}</div>
            <div className="font-exo font-black text-2xl text-white">{s.value}</div>
            <div className="text-sm" style={{ color: "#a78bfa" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="fade-in-up-6 mt-8">
        <h2 className="font-exo font-bold text-xl text-white mb-4">Разделы курса</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[
            { page: "lessons" as Page, emoji: "🌌", title: "Уроки", desc: "Космическая лексика, грамматика, фразы астронавтов", color: "#7c3aed" },
            { page: "tasks" as Page, emoji: "✏️", title: "Интерактивные задания", desc: "Fill-in, перевод, конструктор предложений", color: "#0891b2" },
            { page: "audio" as Page, emoji: "🎧", title: "Аудирование", desc: "Переговоры ЦУП, интервью астронавтов, NASA записи", color: "#be185d" },
            { page: "dictionary" as Page, emoji: "📖", title: "Словарь терминов", desc: "800+ космических терминов с произношением", color: "#d97706" },
          ].map((item) => (
            <div
              key={item.page}
              className="space-card rounded-2xl p-5 cursor-pointer"
              onClick={() => onNav(item.page)}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${item.color}33`, border: `1px solid ${item.color}66` }}
                >
                  {item.emoji}
                </div>
                <div>
                  <div className="font-exo font-bold text-white text-lg">{item.title}</div>
                  <div className="text-sm mt-1" style={{ color: "#a78bfa" }}>{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── LESSONS PAGE ─────────────────────────────────────────────────────────────
const lessonsData = [
  {
    id: 1, unit: "Unit 1", emoji: "🚀", color: "#7c3aed",
    title: "Launch & Orbit",
    topic: "Лексика запуска и орбиты",
    level: "Intermediate",
    words: ["trajectory", "apogee", "perigee", "orbital velocity", "escape velocity"],
    grammar: "Future Perfect для описания манёвров: 'By the time we reach LEO, we will have burned 80% of fuel.'",
    done: true,
  },
  {
    id: 2, unit: "Unit 2", emoji: "🌍", color: "#0891b2",
    title: "Mission Control",
    topic: "Язык ЦУП и переговоры",
    level: "Intermediate",
    words: ["abort", "nominal", "telemetry", "downlink", "roger that"],
    grammar: "Conditional II для нештатных ситуаций: 'If the thruster failed, we would initiate abort sequence.'",
    done: true,
  },
  {
    id: 3, unit: "Unit 3", emoji: "🛸", color: "#be185d",
    title: "Spacecraft Systems",
    topic: "Системы космического аппарата",
    level: "Upper-Intermediate",
    words: ["propulsion", "attitude control", "RCS", "thermal shield", "solar array"],
    grammar: "Passive Voice в технических описаниях: 'The module is pressurized to 14.7 psi before docking.'",
    done: false,
  },
  {
    id: 4, unit: "Unit 4", emoji: "🌑", color: "#d97706",
    title: "Celestial Bodies",
    topic: "Небесные тела и астрофизика",
    level: "Upper-Intermediate",
    words: ["gravitational lensing", "event horizon", "singularity", "accretion disk", "pulsar"],
    grammar: "Defining Relative Clauses: 'A black hole is an object whose gravity is so strong that nothing can escape it.'",
    done: false,
  },
  {
    id: 5, unit: "Unit 5", emoji: "👨‍🚀", color: "#4ade80",
    title: "EVA & Spacewalk",
    topic: "Выход в открытый космос",
    level: "Advanced",
    words: ["umbilical", "MMU", "tether", "airlock", "depress/repress"],
    grammar: "Imperative + Modals для процедур безопасности: 'You must secure the tether before opening the airlock.'",
    done: false,
  },
  {
    id: 6, unit: "Unit 6", emoji: "🔬", color: "#a855f7",
    title: "Space Science",
    topic: "Научные эксперименты на МКС",
    level: "Advanced",
    words: ["microgravity", "crystallography", "combustion", "spectrometer", "bioregenerative"],
    grammar: "Gerunds & Infinitives: 'Conducting experiments in microgravity requires adapting standard procedures.'",
    done: false,
  },
];

function LessonsPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const lesson = lessonsData.find((l) => l.id === selected);

  if (lesson) {
    return (
      <div className="fade-in-up">
        <button
          className="flex items-center gap-2 mb-6 transition-colors"
          style={{ color: "#c4b5fd" }}
          onClick={() => setSelected(null)}
        >
          <Icon name="ChevronLeft" size={20} />
          <span className="font-rubik">Все уроки</span>
        </button>

        <div className="space-card rounded-3xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: `${lesson.color}33`, border: `1px solid ${lesson.color}66` }}
            >
              {lesson.emoji}
            </div>
            <div>
              <div className="badge-space mb-2">{lesson.unit} · {lesson.level}</div>
              <h2 className="font-exo font-black text-2xl text-white">{lesson.title}</h2>
              <p style={{ color: "#a78bfa" }}>{lesson.topic}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-exo font-bold text-lg text-white mb-4">📝 Key Vocabulary</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {lesson.words.map((w) => (
                <div
                  key={w}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}
                >
                  <span className="font-mono text-purple-200 font-semibold">{w}</span>
                  <button
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: "rgba(168,85,247,0.3)", color: "#e9d5ff" }}
                  >
                    🔊 Listen
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)" }}>
            <h3 className="font-exo font-bold text-lg mb-3" style={{ color: "#67e8f9" }}>⚙️ Grammar Focus</h3>
            <p className="text-white">{lesson.grammar}</p>
          </div>
        </div>

        <button className="btn-space px-8 py-3 text-base">✏️ Перейти к заданиям урока</button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-exo font-black text-3xl text-white mb-2 fade-in-up-1">📚 Уроки</h2>
      <p className="mb-8 fade-in-up-2" style={{ color: "#a78bfa" }}>
        Космическая лексика и грамматика для инженерно-технического английского
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {lessonsData.map((lesson, i) => (
          <div
            key={lesson.id}
            className={`space-card rounded-2xl p-5 cursor-pointer fade-in-up-${Math.min(i + 1, 6)}`}
            onClick={() => setSelected(lesson.id)}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 relative"
                style={{ background: `${lesson.color}33`, border: `1px solid ${lesson.color}66` }}
              >
                {lesson.emoji}
                {lesson.done && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-400 flex items-center justify-center text-xs text-white font-bold">✓</div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold" style={{ color: "#a78bfa" }}>{lesson.unit}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: lesson.level === "Advanced" ? "rgba(236,72,153,0.2)" : lesson.level === "Upper-Intermediate" ? "rgba(251,191,36,0.2)" : "rgba(74,222,128,0.2)",
                      color: lesson.level === "Advanced" ? "#f9a8d4" : lesson.level === "Upper-Intermediate" ? "#fde68a" : "#86efac",
                    }}
                  >
                    {lesson.level}
                  </span>
                </div>
                <div className="font-exo font-bold text-white">{lesson.title}</div>
                <div className="text-sm mt-1" style={{ color: "#a78bfa" }}>{lesson.topic}</div>
                <div className="text-xs mt-2" style={{ color: "#7c6aad" }}>
                  {lesson.words.slice(0, 3).join(" · ")} · ...
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TASKS PAGE ───────────────────────────────────────────────────────────────

type TaskType = "cards" | "wordbuild" | "match" | "fill";

interface Task {
  id: number;
  type: TaskType;
  badge: string;
  question: string;
  // cards
  options?: string[];
  correct?: number;
  explanation?: string;
  // wordbuild
  words?: string[];
  sentence?: string;
  // match
  pairs?: [string, string][];
  // fill
  answer?: string;
  hint?: string;
  before?: string;
  after?: string;
}

const allTasks: Task[] = [
  {
    id: 1, type: "cards", badge: "🎯 Выбор ответа",
    question: "Что означает слово 'nominal' в языке ЦУП?",
    options: ["Сломан / неисправен", "Штатно / как и ожидалось", "Аварийная остановка", "Замедлить процедуру"],
    correct: 1,
    explanation: "'Nominal' — всё работает нормально, по плану. Одно из ключевых слов Mission Control! 🚀",
  },
  {
    id: 2, type: "wordbuild", badge: "🔤 Собери фразу",
    question: "Собери правило EVA в правильном порядке:",
    words: ["must", "Before", "you", "your", "check", "opening", "the airlock,", "tether"],
    sentence: "Before opening the airlock, you must check your tether",
  },
  {
    id: 3, type: "cards", badge: "🎯 Выбор ответа",
    question: "Какая точка орбиты БЛИЖЕ всего к Земле?",
    options: ["Apogee 🔴", "Zenith ⬆️", "Perigee 🟢", "Nadir ⬇️"],
    correct: 2,
    explanation: "Perigee = ближайшая точка орбиты. Apogee = дальняя. От греч. peri = около, geo = земля 🌍",
  },
  {
    id: 4, type: "match", badge: "🔗 Соедини пары",
    question: "Соедини космический термин с переводом:",
    pairs: [
      ["Trajectory", "Траектория"],
      ["Telemetry", "Телеметрия"],
      ["Airlock", "Шлюз"],
      ["Abort", "Прерывание"],
    ],
  },
  {
    id: 5, type: "fill", badge: "✍️ Вставь слово",
    question: "Вставь правильную форму глагола:",
    before: "Mission data",
    after: "to ground stations every orbit. (transmit — Passive Voice)",
    answer: "is transmitted",
    hint: "Present Simple Passive: is + глагол + -ed",
  },
  {
    id: 6, type: "cards", badge: "🎯 Выбор ответа",
    question: "Что такое 'escape velocity'?",
    options: [
      "Скорость стыковки",
      "Вторая космическая скорость",
      "Скорость выхода в открытый космос",
      "Скорость звука в атмосфере",
    ],
    correct: 1,
    explanation: "Escape velocity = вторая космическая скорость — минимальная скорость для выхода из гравитационного поля планеты ⚡",
  },
  {
    id: 7, type: "wordbuild", badge: "🔤 Собери фразу",
    question: "Собери предложение про чёрную дыру:",
    words: ["is", "A black hole", "an object", "whose", "so strong", "gravity is", "that nothing", "can escape"],
    sentence: "A black hole is an object whose gravity is so strong that nothing can escape",
  },
  {
    id: 8, type: "match", badge: "🔗 Соедини пары",
    question: "Соедини тип орбиты или явления с описанием:",
    pairs: [
      ["Apogee", "Дальняя точка орбиты"],
      ["Microgravity", "Невесомость на МКС"],
      ["Downlink", "Связь спутник → Земля"],
      ["Tether", "Страховочный трос"],
    ],
  },
  {
    id: 9, type: "fill", badge: "✍️ Вставь слово",
    question: "Вставь правильное модальное слово:",
    before: "Astronauts",
    after: "wear a spacesuit during EVA. It is not optional. (обязательство)",
    answer: "must",
    hint: "Строгое обязательство — один из модальных глаголов",
  },
  {
    id: 10, type: "cards", badge: "🎯 Выбор ответа",
    question: "Выбери правильный перевод фразы 'attitude control':",
    options: [
      "Контроль поведения экипажа",
      "Управление ориентацией аппарата",
      "Управление скоростью полёта",
      "Система жизнеобеспечения",
    ],
    correct: 1,
    explanation: "'Attitude' в авиации/космосе = ориентация в пространстве (тангаж, крен, рыскание). Не 'отношение'! 🛸",
  },
];

// ── WordBuild task ────────────────────────────────────────────────────────────
function WordBuildTask({
  task, onResult,
}: {
  task: Task;
  onResult: (ok: boolean) => void;
}) {
  const shuffled = [...task.words!].sort(() => Math.random() - 0.5);
  const [available, setAvailable] = useState<string[]>(shuffled);
  const [chosen, setChosen] = useState<string[]>([]);
  const [result, setResult] = useState<null | boolean>(null);

  function pick(word: string, idx: number) {
    if (result !== null) return;
    setChosen((c) => [...c, word]);
    setAvailable((a) => a.filter((_, i) => i !== idx));
  }
  function unpick(word: string, idx: number) {
    if (result !== null) return;
    setAvailable((a) => [...a, word]);
    setChosen((c) => c.filter((_, i) => i !== idx));
  }
  function check() {
    const userSentence = chosen.join(" ").toLowerCase().replace(/[.,!?]/g, "");
    const correct = task.sentence!.toLowerCase().replace(/[.,!?]/g, "");
    const ok = userSentence === correct;
    setResult(ok);
    onResult(ok);
  }

  return (
    <div>
      {/* Drop zone */}
      <div
        className="min-h-16 rounded-2xl p-4 mb-4 flex flex-wrap gap-2 items-center"
        style={{ background: "rgba(45,27,105,0.4)", border: `2px dashed ${result === null ? "rgba(168,85,247,0.4)" : result ? "#4ade80" : "#ef4444"}` }}
      >
        {chosen.length === 0 && (
          <span className="text-sm" style={{ color: "#6d5a9e" }}>Нажимай слова снизу →</span>
        )}
        {chosen.map((w, i) => (
          <button
            key={i}
            onClick={() => unpick(w, i)}
            className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            style={{ background: "rgba(168,85,247,0.5)", color: "#e9d5ff", border: "1px solid rgba(168,85,247,0.7)" }}
          >
            {w}
          </button>
        ))}
      </div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2 mb-6">
        {available.map((w, i) => (
          <button
            key={i}
            onClick={() => pick(w, i)}
            className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            style={{ background: "rgba(6,182,212,0.2)", color: "#67e8f9", border: "1px solid rgba(6,182,212,0.4)" }}
          >
            {w}
          </button>
        ))}
      </div>

      {result === null ? (
        <button
          className="btn-space px-8 py-3"
          onClick={check}
          style={{ opacity: chosen.length === 0 ? 0.4 : 1 }}
          disabled={chosen.length === 0}
        >
          Проверить
        </button>
      ) : (
        <div
          className="p-4 rounded-xl text-sm"
          style={{
            background: result ? "rgba(74,222,128,0.1)" : "rgba(239,68,68,0.1)",
            border: `1px solid ${result ? "#4ade80" : "#ef4444"}`,
            color: result ? "#86efac" : "#fca5a5",
          }}
        >
          {result ? "✓ Верно! Отличная работа, космонавт!" : `✗ Правильно: "${task.sentence}"`}
        </div>
      )}
    </div>
  );
}

// ── Match task ────────────────────────────────────────────────────────────────
function MatchTask({ task, onResult }: { task: Task; onResult: (ok: boolean) => void }) {
  const lefts = task.pairs!.map((p) => p[0]);
  const rights = [...task.pairs!.map((p) => p[1])].sort(() => Math.random() - 0.5);
  const [leftSel, setLeftSel] = useState<number | null>(null);
  const [matched, setMatched] = useState<Record<number, number>>({});
  const [wrong, setWrong] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  function pickLeft(i: number) {
    if (done || Object.keys(matched).some((k) => parseInt(k) === i)) return;
    setLeftSel(i);
  }
  function pickRight(j: number) {
    if (done || leftSel === null) return;
    if (Object.values(matched).includes(j)) return;
    const expectedRight = task.pairs![leftSel][1];
    if (rights[j] === expectedRight) {
      const next = { ...matched, [leftSel]: j };
      setMatched(next);
      setLeftSel(null);
      if (Object.keys(next).length === task.pairs!.length) {
        setDone(true);
        onResult(true);
      }
    } else {
      setWrong(j);
      setTimeout(() => { setWrong(null); setLeftSel(null); }, 700);
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex flex-col gap-2">
          {lefts.map((l, i) => {
            const isMatched = Object.keys(matched).some((k) => parseInt(k) === i);
            const isSelected = leftSel === i;
            return (
              <button
                key={i}
                onClick={() => pickLeft(i)}
                className="p-3 rounded-xl text-sm font-semibold text-left transition-all"
                style={{
                  background: isMatched ? "rgba(74,222,128,0.15)" : isSelected ? "rgba(168,85,247,0.4)" : "rgba(45,27,105,0.5)",
                  border: `2px solid ${isMatched ? "#4ade80" : isSelected ? "#a855f7" : "rgba(168,85,247,0.3)"}`,
                  color: isMatched ? "#86efac" : isSelected ? "#e9d5ff" : "#c4b5fd",
                  transform: isSelected ? "scale(1.03)" : "scale(1)",
                }}
              >
                {isMatched && "✓ "}{l}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {rights.map((r, j) => {
            const isMatched = Object.values(matched).includes(j);
            const isWrong = wrong === j;
            return (
              <button
                key={j}
                onClick={() => pickRight(j)}
                className="p-3 rounded-xl text-sm font-semibold text-left transition-all"
                style={{
                  background: isMatched ? "rgba(74,222,128,0.15)" : isWrong ? "rgba(239,68,68,0.2)" : leftSel !== null ? "rgba(6,182,212,0.15)" : "rgba(45,27,105,0.3)",
                  border: `2px solid ${isMatched ? "#4ade80" : isWrong ? "#ef4444" : leftSel !== null ? "rgba(6,182,212,0.5)" : "rgba(168,85,247,0.2)"}`,
                  color: isMatched ? "#86efac" : isWrong ? "#fca5a5" : "#a5f3fc",
                  animation: isWrong ? "shake 0.3s ease" : undefined,
                }}
              >
                {isMatched && "✓ "}{r}
              </button>
            );
          })}
        </div>
      </div>
      {done && (
        <div className="p-4 rounded-xl text-sm" style={{ background: "rgba(74,222,128,0.1)", border: "1px solid #4ade80", color: "#86efac" }}>
          ✓ Все пары найдены! Отлично, космонавт! 🚀
        </div>
      )}
      {!done && leftSel !== null && (
        <p className="text-sm" style={{ color: "#67e8f9" }}>← Теперь выбери правильный перевод справа</p>
      )}
      {!done && leftSel === null && Object.keys(matched).length === 0 && (
        <p className="text-sm" style={{ color: "#a78bfa" }}>← Начни с выбора слова слева</p>
      )}
    </div>
  );
}

// ── Fill task ─────────────────────────────────────────────────────────────────
function FillTask({ task, onResult }: { task: Task; onResult: (ok: boolean) => void }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  function check() {
    const ok = value.trim().toLowerCase() === task.answer!.toLowerCase();
    setResult(ok);
    onResult(ok);
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-4 text-lg text-white font-rubik">
        <span>{task.before}</span>
        <input
          type="text"
          value={value}
          onChange={(e) => result === null && setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && value && result === null && check()}
          placeholder="___________"
          className="px-4 py-2 rounded-xl outline-none font-semibold text-center"
          style={{
            background: "rgba(45,27,105,0.6)",
            border: `2px solid ${result === null ? "rgba(168,85,247,0.5)" : result ? "#4ade80" : "#ef4444"}`,
            color: result === null ? "white" : result ? "#86efac" : "#fca5a5",
            minWidth: 160,
          }}
          disabled={result !== null}
        />
        <span>{task.after}</span>
      </div>

      <div className="text-sm mb-5" style={{ color: "#a78bfa" }}>
        💡 {task.hint}
      </div>

      {result === null ? (
        <button className="btn-space px-8 py-3" onClick={check} style={{ opacity: value ? 1 : 0.4 }} disabled={!value}>
          Проверить
        </button>
      ) : (
        <div
          className="p-4 rounded-xl text-sm"
          style={{
            background: result ? "rgba(74,222,128,0.1)" : "rgba(239,68,68,0.1)",
            border: `1px solid ${result ? "#4ade80" : "#ef4444"}`,
            color: result ? "#86efac" : "#fca5a5",
          }}
        >
          {result ? "✓ Правильно!" : `✗ Правильный ответ: "${task.answer}"`}
        </div>
      )}
    </div>
  );
}

function TasksPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const q = allTasks[current];
  const isLast = current === allTasks.length - 1;

  function handleResult(ok: boolean) {
    if (!answered) {
      setAnswered(true);
      if (ok) setScore((s) => s + 1);
    }
  }

  function handleCardSelect(i: number) {
    if (answered) return;
    setSelectedCard(i);
    const ok = i === q.correct;
    setAnswered(true);
    if (ok) setScore((s) => s + 1);
  }

  function next() {
    if (isLast) { setDone(true); return; }
    setCurrent((c) => c + 1);
    setAnswered(false);
    setSelectedCard(null);
  }

  function reset() {
    setCurrent(0); setScore(0); setAnswered(false); setSelectedCard(null); setDone(false);
  }

  if (done) {
    const pct = Math.round((score / allTasks.length) * 100);
    return (
      <div className="flex flex-col items-center text-center py-10 fade-in-up">
        <div className="text-7xl mb-4 achievement-pop">{pct >= 80 ? "🏆" : pct >= 60 ? "🥈" : "📚"}</div>
        <h2 className="font-exo font-black text-3xl text-white mb-2">Задания завершены!</h2>
        <p className="text-xl mb-2" style={{ color: "#c4b5fd" }}>{score} / {allTasks.length} правильных</p>
        <div className="text-5xl font-exo font-black mb-4" style={{ color: pct >= 80 ? "#4ade80" : pct >= 60 ? "#fbbf24" : "#f87171" }}>{pct}%</div>
        <div className="flex gap-1 mb-6">
          {allTasks.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full" style={{ background: i < score ? "#4ade80" : "#ef4444" }} />
          ))}
        </div>
        <p className="mb-8 max-w-sm" style={{ color: "#a78bfa" }}>
          {pct >= 80 ? "Отличная работа, космонавт! Ты готов к настоящей миссии 🚀" : pct >= 60 ? "Неплохо! Ещё немного практики — и ты в строю." : "Повтори уроки — и попробуй снова. Ты справишься!"}
        </p>
        <button className="btn-space px-8 py-3" onClick={reset}>🔄 Пройти снова</button>
      </div>
    );
  }

  const progressPct = (current / allTasks.length) * 100;

  return (
    <div>
      <h2 className="font-exo font-black text-3xl text-white mb-2 fade-in-up-1">✏️ Интерактивные задания</h2>
      <p className="mb-5 fade-in-up-2" style={{ color: "#a78bfa" }}>Лексика и грамматика в реальных космических ситуациях</p>

      {/* Progress bar */}
      <div className="mb-6 fade-in-up-3">
        <div className="flex justify-between text-sm mb-2">
          <span style={{ color: "#a78bfa" }}>Задание {current + 1} из {allTasks.length}</span>
          <span style={{ color: "#4ade80" }}>⭐ {score} правильных</span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(168,85,247,0.15)" }}>
          <div className="progress-bar h-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
        {/* Step dots */}
        <div className="flex gap-1 mt-2">
          {allTasks.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1 rounded-full transition-all"
              style={{ background: i < current ? "#a855f7" : i === current ? "#67e8f9" : "rgba(168,85,247,0.15)" }}
            />
          ))}
        </div>
      </div>

      {/* Question card */}
      <div className="space-card rounded-3xl p-7 fade-in-up-4">
        <div className="flex items-center gap-3 mb-5">
          <span className="badge-space text-sm">{q.badge}</span>
          <span className="text-xs" style={{ color: "#7c6aad" }}>Unit {Math.ceil(q.id / 2)}</span>
        </div>

        <h3 className="font-rubik font-semibold text-xl text-white mb-6 leading-relaxed">{q.question}</h3>

        {/* CARDS type */}
        {q.type === "cards" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {q.options!.map((opt, i) => {
                const isCorrect = i === q.correct;
                const isSelected = selectedCard === i;
                let bg = "rgba(45,27,105,0.5)";
                let border = "rgba(168,85,247,0.3)";
                let color = "#c4b5fd";
                if (answered) {
                  if (isCorrect) { bg = "rgba(74,222,128,0.15)"; border = "#4ade80"; color = "#86efac"; }
                  else if (isSelected) { bg = "rgba(239,68,68,0.15)"; border = "#ef4444"; color = "#fca5a5"; }
                } else if (isSelected) {
                  bg = "rgba(168,85,247,0.3)"; border = "#a855f7"; color = "#e9d5ff";
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleCardSelect(i)}
                    disabled={answered}
                    className="p-4 rounded-2xl text-left transition-all font-rubik font-medium text-sm"
                    style={{
                      background: bg, border: `2px solid ${border}`, color,
                      transform: !answered && isSelected ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    <span
                      className="inline-block w-6 h-6 rounded-full text-xs font-bold text-center leading-6 mr-2"
                      style={{ background: answered && isCorrect ? "#4ade80" : "rgba(168,85,247,0.3)", color: answered && isCorrect ? "#052e16" : "#c4b5fd" }}
                    >
                      {answered && isCorrect ? "✓" : ["A","B","C","D"][i]}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>
            {answered && q.explanation && (
              <div className="p-4 rounded-xl text-sm animate-fade-in" style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", color: "#a5f3fc" }}>
                💡 {q.explanation}
              </div>
            )}
          </div>
        )}

        {/* WORDBUILD type */}
        {q.type === "wordbuild" && (
          <WordBuildTask task={q} onResult={handleResult} />
        )}

        {/* MATCH type */}
        {q.type === "match" && (
          <MatchTask task={q} onResult={handleResult} />
        )}

        {/* FILL type */}
        {q.type === "fill" && (
          <FillTask task={q} onResult={handleResult} />
        )}

        {/* Next button — show after answer */}
        {answered && (
          <button className="btn-space px-8 py-3 mt-5 animate-fade-in" onClick={next}>
            {isLast ? "🏆 Завершить" : "Следующее задание →"}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── AUDIO PAGE ───────────────────────────────────────────────────────────────
const audioTracks = [
  {
    id: 1, emoji: "🎙️", color: "#7c3aed",
    title: "Apollo 13: 'Houston, we have a problem'",
    description: "Реальная запись переговоров экипажа с ЦУП — анализ языка кризисной ситуации",
    duration: "3:42", level: "Intermediate",
    questions: [
      "What does the astronaut report about the oxygen tank pressure?",
      "Identify all modal verbs used to express urgency and necessity.",
      "Find and list all passive voice constructions in the dialogue.",
    ],
  },
  {
    id: 2, emoji: "📡", color: "#0891b2",
    title: "ISS Daily Briefing — Mission Control",
    description: "Утренний брифинг МКС: технические термины, числа, процедуры",
    duration: "5:15", level: "Intermediate",
    questions: [
      "List all spacecraft systems and subsystems mentioned.",
      "What time expressions are used? (UTC, elapsed time, T+, etc.)",
      "Summarise the crew's daily tasks in 3 sentences.",
    ],
  },
  {
    id: 3, emoji: "👨‍🚀", color: "#be185d",
    title: "Astronaut Interview — Tim Peake, ESA",
    description: "Интервью британского астронавта о жизни на орбите — разговорный регистр",
    duration: "7:30", level: "Upper-Intermediate",
    questions: [
      "What does Tim say about microgravity adaptation during the first week?",
      "Find 5 examples of Present Perfect tense used in context.",
      "What idioms and informal expressions does he use?",
    ],
  },
  {
    id: 4, emoji: "🔬", color: "#d97706",
    title: "NASA Science Podcast — Black Holes Explained",
    description: "Научный подкаст NASA об астрофизике — академический язык, термины",
    duration: "9:00", level: "Advanced",
    questions: [
      "Define 'event horizon' in your own words based on what you heard.",
      "What analogy does the speaker use to explain singularity?",
      "Identify all defining relative clauses in the transcript.",
    ],
  },
];

function AudioPage() {
  const [active, setActive] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <h2 className="font-exo font-black text-3xl text-white mb-2 fade-in-up-1">🎧 Аудирование</h2>
      <p className="mb-8 fade-in-up-2" style={{ color: "#a78bfa" }}>
        Реальные записи NASA, интервью астронавтов и научные подкасты с заданиями
      </p>

      <div className="flex flex-col gap-6">
        {audioTracks.map((track, i) => (
          <div key={track.id} className={`fade-in-up-${Math.min(i + 3, 6)}`}>
            <div className="audio-player">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${track.color}33`, border: `1px solid ${track.color}66` }}
                >
                  {track.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-exo font-bold text-white">{track.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(168,85,247,0.2)", color: "#c4b5fd" }}>
                      {track.level}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "#a78bfa" }}>{track.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "rgba(0,0,0,0.3)" }}>
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${track.color}, ${track.color}99)` }}
                  onClick={() => { setActive(active === track.id ? null : track.id); setPlaying(!playing); }}
                >
                  <Icon name={active === track.id && playing ? "Pause" : "Play"} size={16} className="text-white" />
                </button>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(168,85,247,0.2)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: active === track.id ? "35%" : "0%", background: `linear-gradient(90deg, ${track.color}, #06b6d4)` }}
                  />
                </div>
                <span className="text-sm font-mono" style={{ color: "#a78bfa" }}>{track.duration}</span>
              </div>

              <button
                className="mt-4 flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#67e8f9" }}
                onClick={() => setActive(active === track.id ? null : track.id)}
              >
                <Icon name={active === track.id ? "ChevronUp" : "ChevronDown"} size={16} />
                Задания к записи
              </button>

              {active === track.id && (
                <div className="mt-4 flex flex-col gap-2 fade-in-up">
                  {track.questions.map((q, qi) => (
                    <div key={qi} className="flex gap-3 p-3 rounded-xl" style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}>
                      <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ background: track.color }}>
                        {qi + 1}
                      </span>
                      <span className="text-sm text-white">{q}</span>
                    </div>
                  ))}
                  <textarea
                    placeholder="Напиши ответы здесь..."
                    className="w-full mt-2 p-3 rounded-xl text-white text-sm font-rubik outline-none resize-none"
                    rows={4}
                    style={{ background: "rgba(45,27,105,0.4)", border: "1px solid rgba(168,85,247,0.3)" }}
                  />
                  <button className="btn-space px-6 py-2 text-sm self-start">Отправить ответы</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PROFILE PAGE ─────────────────────────────────────────────────────────────
const achievements = [
  { emoji: "🚀", title: "First Launch", desc: "Завершил первый урок", done: true },
  { emoji: "🌍", title: "Orbit Master", desc: "Unit 1 на 100%", done: true },
  { emoji: "📡", title: "Signal Received", desc: "5 аудио-заданий", done: true },
  { emoji: "🏆", title: "Mission Complete", desc: "Прошёл все тесты юнита", done: false },
  { emoji: "⭐", title: "Star Cadet", desc: "7 дней подряд", done: false },
  { emoji: "🔬", title: "Space Scientist", desc: "Словарь 100+ слов", done: false },
  { emoji: "💫", title: "Supernova", desc: "Все уроки завершены", done: false },
  { emoji: "🎖️", title: "Commander", desc: "Сертификат получен", done: false },
];

function ProfilePage() {
  return (
    <div>
      <h2 className="font-exo font-black text-3xl text-white mb-6 fade-in-up-1">👨‍🚀 Личный кабинет</h2>

      <div className="space-card rounded-3xl p-6 mb-6 fade-in-up-2">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl" style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}>
            👨‍🚀
          </div>
          <div>
            <h3 className="font-exo font-black text-2xl text-white">Алексей Космонавтов</h3>
            <p style={{ color: "#a78bfa" }}>8А класс · Инженерно-космический профиль</p>
            <div className="mt-2"><span className="badge-space">🌟 Уровень 3 — Cadet</span></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span style={{ color: "#a78bfa" }}>До уровня 4 — Space Officer</span>
            <span style={{ color: "#c4b5fd" }}>720 / 1000 XP</span>
          </div>
          <div className="h-3 rounded-full" style={{ background: "rgba(168,85,247,0.2)" }}>
            <div className="progress-bar" style={{ width: "72%", height: "100%" }} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            { emoji: "📚", val: "2/6", label: "Уроков" },
            { emoji: "✏️", val: "18/48", label: "Заданий" },
            { emoji: "🔥", val: "5", label: "Дней подряд" },
          ].map((s) => (
            <div key={s.label} className="text-center p-3 rounded-xl" style={{ background: "rgba(168,85,247,0.1)" }}>
              <div className="text-xl mb-1">{s.emoji}</div>
              <div className="font-exo font-bold text-white">{s.val}</div>
              <div className="text-xs" style={{ color: "#a78bfa" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="fade-in-up-3 mb-6">
        <h3 className="font-exo font-bold text-xl text-white mb-4">🏅 Достижения</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 text-center transition-all"
              style={{
                background: a.done ? "rgba(168,85,247,0.15)" : "rgba(168,85,247,0.04)",
                border: `1px solid ${a.done ? "rgba(168,85,247,0.5)" : "rgba(168,85,247,0.1)"}`,
                opacity: a.done ? 1 : 0.45,
              }}
            >
              <div className="text-3xl mb-2">{a.emoji}</div>
              <div className="font-exo font-bold text-sm text-white">{a.title}</div>
              <div className="text-xs mt-1" style={{ color: "#a78bfa" }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="fade-in-up-4">
        <h3 className="font-exo font-bold text-xl text-white mb-4">📊 Прогресс по юнитам</h3>
        <div className="space-card rounded-2xl p-5">
          {lessonsData.map((lesson) => (
            <div key={lesson.id} className="mb-4 last:mb-0">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-medium">{lesson.unit}: {lesson.title}</span>
                <span style={{ color: "#a78bfa" }}>{lesson.done ? "100%" : "0%"}</span>
              </div>
              <div className="h-2 rounded-full" style={{ background: "rgba(168,85,247,0.15)" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: lesson.done ? "100%" : "0%", background: `linear-gradient(90deg, ${lesson.color}, #06b6d4)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── DICTIONARY PAGE ──────────────────────────────────────────────────────────
const dictTerms = [
  { term: "Apogee", ipa: "/ˈæpədʒiː/", ru: "Апогей", def: "The point in the orbit at which a satellite is furthest from Earth.", unit: "Unit 1" },
  { term: "Perigee", ipa: "/ˈperɪdʒiː/", ru: "Перигей", def: "The point in the orbit at which a satellite is closest to Earth.", unit: "Unit 1" },
  { term: "Telemetry", ipa: "/tɪˈlemɪtri/", ru: "Телеметрия", def: "Remote measurement and transmission of data from spacecraft to ground.", unit: "Unit 2" },
  { term: "Nominal", ipa: "/ˈnɒmɪnl/", ru: "Штатный / нормальный", def: "In aerospace: functioning normally and as expected.", unit: "Unit 2" },
  { term: "Propulsion", ipa: "/prəˈpʌlʃn/", ru: "Тяга / движение", def: "The force that drives a spacecraft through space.", unit: "Unit 3" },
  { term: "Abort", ipa: "/əˈbɔːt/", ru: "Аварийное прекращение", def: "To terminate a mission before completion due to danger.", unit: "Unit 2" },
  { term: "Microgravity", ipa: "/ˌmaɪkrəʊˈɡrævɪti/", ru: "Микрогравитация", def: "Condition where gravity effects are greatly reduced, as on the ISS.", unit: "Unit 5" },
  { term: "Event Horizon", ipa: "/ɪˈvent həˈraɪzn/", ru: "Горизонт событий", def: "Boundary around a black hole beyond which nothing can escape.", unit: "Unit 4" },
  { term: "Trajectory", ipa: "/trəˈdʒektəri/", ru: "Траектория", def: "The curved path followed by a spacecraft through space.", unit: "Unit 1" },
  { term: "Airlock", ipa: "/ˈeəlɒk/", ru: "Шлюзовая камера", def: "A chamber between spacecraft interior and exterior used for EVA.", unit: "Unit 5" },
  { term: "Downlink", ipa: "/ˈdaʊnlɪŋk/", ru: "Нисходящая линия связи", def: "Communication link transmitting data from a spacecraft to ground.", unit: "Unit 2" },
  { term: "Accretion Disk", ipa: "/əˈkriːʃn dɪsk/", ru: "Аккреционный диск", def: "Rotating disk of gas and dust spiralling into a massive body.", unit: "Unit 4" },
  { term: "Escape Velocity", ipa: "/ɪˈskeɪp vɪˈlɒsɪti/", ru: "Вторая космическая скорость", def: "Minimum speed needed to escape a body's gravitational pull.", unit: "Unit 1" },
  { term: "Attitude Control", ipa: "/ˈætɪtjuːd kənˈtrəʊl/", ru: "Управление ориентацией", def: "System for controlling spacecraft orientation in 3D space.", unit: "Unit 3" },
  { term: "Singularity", ipa: "/ˌsɪŋɡjʊˈlærɪti/", ru: "Сингулярность", def: "A point of infinite density at the center of a black hole.", unit: "Unit 4" },
  { term: "Tether", ipa: "/ˈteðə/", ru: "Страховочный трос", def: "A cable connecting an astronaut to the spacecraft during EVA.", unit: "Unit 5" },
];

function DictionaryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = dictTerms.filter(
    (t) =>
      (filter === "All" || t.unit === filter) &&
      (t.term.toLowerCase().includes(search.toLowerCase()) || t.ru.toLowerCase().includes(search.toLowerCase()))
  );

  const units = ["All", "Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"];

  return (
    <div>
      <h2 className="font-exo font-black text-3xl text-white mb-2 fade-in-up-1">📖 Словарь терминов</h2>
      <p className="mb-6 fade-in-up-2" style={{ color: "#a78bfa" }}>
        Профессиональная космическая лексика с транскрипцией и переводом
      </p>

      <div className="flex flex-col lg:flex-row gap-4 mb-6 fade-in-up-3">
        <div className="relative flex-1">
          <Icon name="Search" size={16} className="absolute left-4 top-3.5 text-purple-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск термина..."
            className="w-full pl-10 pr-4 py-3 rounded-xl text-white font-rubik outline-none"
            style={{ background: "rgba(45,27,105,0.5)", border: "1px solid rgba(168,85,247,0.3)" }}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {units.map((u) => (
            <button
              key={u}
              onClick={() => setFilter(u)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: filter === u ? "rgba(168,85,247,0.4)" : "rgba(45,27,105,0.3)",
                border: `1px solid ${filter === u ? "rgba(168,85,247,0.8)" : "rgba(168,85,247,0.2)"}`,
                color: filter === u ? "#e9d5ff" : "#a78bfa",
              }}
            >
              {u}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 fade-in-up-4">
        {filtered.map((t) => (
          <div key={t.term} className="space-card rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="font-exo font-black text-xl text-white">{t.term}</span>
                <span className="ml-2 text-sm font-mono" style={{ color: "#67e8f9" }}>{t.ipa}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: "rgba(168,85,247,0.2)" }}>
                  🔊
                </button>
                <span className="text-xs px-2 py-1 rounded-lg" style={{ background: "rgba(6,182,212,0.2)", color: "#67e8f9" }}>{t.unit}</span>
              </div>
            </div>
            <div className="text-sm font-semibold mb-1" style={{ color: "#fbbf24" }}>🇷🇺 {t.ru}</div>
            <p className="text-sm" style={{ color: "#a78bfa" }}>{t.def}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10" style={{ color: "#7c6aad" }}>
          <div className="text-4xl mb-4">🔭</div>
          <p>Термин не найден. Попробуй другой запрос.</p>
        </div>
      )}
    </div>
  );
}

// ─── TESTS PAGE ───────────────────────────────────────────────────────────────
const testsList = [
  {
    id: 1, emoji: "🚀", color: "#7c3aed",
    title: "Unit 1–2 Test",
    subtitle: "Launch, Orbit & Mission Control",
    questions: 20, duration: "25 мин", level: "Intermediate",
    topics: ["Vocabulary: trajectory, orbital mechanics", "Grammar: Future Perfect", "Mission Control dialogue comprehension"],
    done: true, score: 88,
  },
  {
    id: 2, emoji: "🛸", color: "#0891b2",
    title: "Midterm Test",
    subtitle: "Units 1–4: Systems & Celestial Bodies",
    questions: 35, duration: "45 мин", level: "Upper-Intermediate",
    topics: ["Passive Voice in technical texts", "Spacecraft systems vocabulary", "Reading: NASA article comprehension"],
    done: false,
  },
  {
    id: 3, emoji: "🏆", color: "#d97706",
    title: "Final Certification Test",
    subtitle: "Полный курс — Сертификат Space English",
    questions: 50, duration: "60 мин", level: "Advanced",
    topics: ["All units: comprehensive vocabulary", "All grammar structures", "Listening & Writing tasks"],
    done: false, locked: true,
  },
];

function TestsPage() {
  const [showCert, setShowCert] = useState(false);

  if (showCert) {
    return (
      <div className="flex flex-col items-center text-center py-10 fade-in-up">
        <div className="w-full max-w-lg space-card rounded-3xl p-10">
          <div className="text-6xl mb-4">🏆</div>
          <div className="font-exo font-black text-3xl text-white mb-1">Certificate of Achievement</div>
          <div className="font-exo text-lg mb-1" style={{ color: "#c4b5fd" }}>Space English · Cosmic Level</div>
          <div className="h-px my-5" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)" }} />
          <p className="mb-2 text-sm" style={{ color: "#a78bfa" }}>This is to certify that</p>
          <p className="font-exo font-black text-2xl text-white mb-2">Алексей Космонавтов</p>
          <p className="text-sm mb-2" style={{ color: "#a78bfa" }}>
            has successfully completed the course
          </p>
          <p className="font-exo font-bold text-lg mb-4" style={{ color: "#e9d5ff" }}>
            «Космический английский»<br />
            <span className="text-sm font-normal" style={{ color: "#a78bfa" }}>для учеников инженерно-космических классов 6–9</span>
          </p>
          <div className="text-3xl mb-4">🚀🌌👨‍🚀</div>
          <div className="text-sm" style={{ color: "#7c6aad" }}>25 марта 2026</div>
          <div className="mt-6 flex gap-3 justify-center">
            <button className="btn-space px-6 py-2 text-sm">💾 Скачать PDF</button>
            <button className="btn-cyan px-6 py-2 text-sm" onClick={() => setShowCert(false)}>← Назад</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-exo font-black text-3xl text-white mb-2 fade-in-up-1">🏆 Тесты и сертификаты</h2>
      <p className="mb-8 fade-in-up-2" style={{ color: "#a78bfa" }}>
        Проверочные работы по каждому блоку и финальный сертификат курса
      </p>

      <div className="flex flex-col gap-5">
        {testsList.map((test, i) => (
          <div key={test.id} className={`space-card rounded-3xl p-6 fade-in-up-${i + 3}`}>
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `${test.color}33`, border: `1px solid ${test.color}66` }}
              >
                {test.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-exo font-bold text-xl text-white">{test.title}</h3>
                  {test.done && <span className="text-green-400 text-lg">✓</span>}
                  {test.locked && <Icon name="Lock" size={16} className="text-yellow-400" />}
                </div>
                <p className="text-sm mb-3" style={{ color: "#a78bfa" }}>{test.subtitle}</p>

                <div className="flex flex-wrap gap-4 text-sm mb-3" style={{ color: "#7c6aad" }}>
                  <span>❓ {test.questions} вопросов</span>
                  <span>⏱ {test.duration}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: "rgba(168,85,247,0.2)", color: "#c4b5fd" }}>
                    {test.level}
                  </span>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  {test.topics.map((topic) => (
                    <div key={topic} className="text-sm flex items-center gap-2" style={{ color: "#a78bfa" }}>
                      <span style={{ color: test.color }}>•</span> {topic}
                    </div>
                  ))}
                </div>

                {test.done && test.score && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: "#a78bfa" }}>Результат</span>
                      <span style={{ color: "#4ade80" }}>{test.score}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: "rgba(74,222,128,0.1)" }}>
                      <div className="h-full rounded-full" style={{ width: `${test.score}%`, background: "linear-gradient(90deg, #4ade80, #06b6d4)" }} />
                    </div>
                  </div>
                )}

                <div className="flex gap-3 flex-wrap">
                  {test.locked ? (
                    <button className="px-6 py-2 rounded-full text-sm font-semibold" style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)", color: "#fbbf24" }}>
                      🔒 Завершить предыдущий тест
                    </button>
                  ) : test.done ? (
                    <>
                      <button className="btn-space px-6 py-2 text-sm">🔄 Пройти снова</button>
                      {test.score && test.score >= 80 && (
                        <button className="btn-yellow px-6 py-2 text-sm" onClick={() => setShowCert(true)}>
                          🏆 Получить сертификат
                        </button>
                      )}
                    </>
                  ) : (
                    <button className="btn-space px-6 py-2 text-sm">▶ Начать тест</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  function renderPage() {
    switch (page) {
      case "home": return <HomePage onNav={setPage} />;
      case "lessons": return <LessonsPage />;
      case "tasks": return <TasksPage />;
      case "audio": return <AudioPage />;
      case "profile": return <ProfilePage />;
      case "dictionary": return <DictionaryPage />;
      case "tests": return <TestsPage />;
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--space-deep)" }}>
      <StarsBg />
      <Nav current={page} onNav={setPage} />
      <main className="relative z-10 min-h-screen" style={{ marginLeft: "5rem", padding: "2rem 1.5rem" }}>
        <style>{`@media (min-width: 1024px) { main { margin-left: 15rem; padding: 2rem 2.5rem; } }`}</style>
        <div className="max-w-4xl mx-auto">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}