/* ============================================================
   НАСТРОЙКИ САЙТА — меняйте только этот блок
   ============================================================ */
const CONFIG = {
  // Ссылки на установщики в GitHub Releases.
  // "latest/download" всегда отдаёт файл из самого свежего релиза,
  // поэтому при выходе новой версии сайт менять не нужно —
  // просто загрузите в новый релиз файлы с ТЕМИ ЖЕ именами.
  downloadUser:    "https://github.com/zhyk1320-jpg/quicksoundtray/releases/latest/download/QuickSoundTray-Setup.exe",
  downloadMachine: "https://github.com/zhyk1320-jpg/quicksoundtray/releases/latest/download/QuickSoundTray-Setup-AllUsers.exe",
  // Ссылка на приложение в Microsoft Store (например https://apps.microsoft.com/detail/9XXXXXXXXXXX).
  // Пока пусто — кнопка магазина скрыта.
  storeUrl: "https://apps.microsoft.com/detail/9mvsfks8m8cj",
};

/* ============================================================
   Переводы (русский берётся прямо из HTML)
   ============================================================ */
const I18N = {
  uk: {
    "nav.features":"Можливості","nav.screens":"Скріншоти","nav.install":"Встановлення","nav.faq":"FAQ","nav.about":"Про застосунок","nav.contact":"Зв'язок",
    "cta.short":"Завантажити","cta.main":"Завантажити для Windows","cta.sub":"Setup · 46 МБ · Windows 10 / 11 x64",
    "cta.alt":"Інсталятор для всіх користувачів (потрібні права адміністратора)",
    "chip.mic":"Мікрофон вимкнено","chip.mode":"Режим «Геймінг» увімкнено",
    "hero.badge":"Версія 1.3.0 · Безкоштовно","hero.t1":"Кожен звук\u00a0—","hero.t2":"в один клік.",
    "hero.lead":"Компактний мікшер у треї, що замінює стандартний регулятор гучності Windows. Пристрої, застосунки, мікрофон і звукові режими — все під рукою.",
    "hero.k1":"Без реклами та реєстрації","hero.k2":"Дані не збираються","hero.k3":"7 мов · 6 тем",
    "st.1":"клік до будь-якого пристрою","st.2":"мов інтерфейсу","st.3":"тем оформлення","st.4":"вартість — повністю безкоштовно",
    "f.kicker":"Можливості","f.title":"Все, чого бракує мікшеру Windows","f.sub":"Одне охайне вікно замість п'яти різних меню в «Параметрах».",
    "f.1t":"Гучність застосунків","f.1d":"Окремий повзунок і mute для кожної програми: гра тихіше, Discord гучніше.",
    "f.2t":"Пристрої в 1 клік","f.2d":"Колонки, навушники, гарнітура — перемикання виводу та запису одним натиском.",
    "f.3t":"Мікрофон гарячою клавішею","f.3d":"Глобальна клавіша вимикає мікрофон з будь-якої гри чи застосунку.",
    "f.4t":"Звукові режими","f.4d":"Стрим, ігри, музика, дзвінки — цілий набір налаштувань однією кнопкою, з відкатом якщо пристрій відключили.",
    "f.5t":"Автоприглушення","f.5d":"Вибрані застосунки стають тихішими, поки ви говорите в мікрофон.",
    "f.6t":"Лагодження звуку","f.6d":"Виправляє типові проблеми зі звуком Windows за пару натискань.",
    "f.7t":"Віджет і живий значок","f.7d":"Анімований значок у треї та віджет на робочому столі реагують на звук.",
    "f.8t":"Приватно й локально","f.8d":"Нічого не надсилається в мережу. Налаштування зберігаються лише на вашому ПК, є експорт та імпорт.",
    "s.kicker":"Скріншоти","s.title":"Погляньте зсередини","s.t1":"Мікшер","s.t2":"Налаштування","s.t3":"Гарячі клавіші","s.t4":"Теми",
    "s.p1t":"Головне вікно","s.p1d":"Загальна гучність, швидкі режими, пристрій виводу й мікрофон — на одному екрані. Відкривається кліком по значку в треї або комбінацією ALT + SHIFT + S.",
    "s.p2t":"Налаштуйте під себе","s.p2d":"Тема, мова інтерфейсу, анімації та поведінка значка в треї. Все змінюється миттєво, без перезапуску.",
    "s.p3t":"Гарячі клавіші","s.p3d":"Власні комбінації для мікшера й мікрофона, тихий автозапуск разом з Windows, скидання та перезапуск.",
    "i.kicker":"Встановлення","i.title":"Готово за хвилину",
    "i.1t":"Завантажте","i.1d":"Натисніть «Завантажити» — інсталятор завантажиться автоматично.",
    "i.2t":"Встановіть","i.2d":"Запустіть файл. Якщо Windows покаже SmartScreen — «Докладніше» → «Усе одно запустити».",
    "i.3t":"Користуйтеся","i.3d":"Значок з'явиться в треї. Клік по ньому або ALT + SHIFT + S — і мікшер під рукою.",
    "q.title":"Часті питання",
    "q.1q":"Це справді безкоштовно?","q.1a":"Так. Жодної реклами, підписок і реєстрації.",
    "q.2q":"Чому Windows попереджає під час запуску?","q.2a":"SmartScreen показує попередження для нових програм, які ще мають мало завантажень. Натисніть «Докладніше» → «Усе одно запустити». Контрольну суму файлу можна звірити в розділі «Про застосунок».",
    "q.3q":"Які системи підтримуються?","q.3a":"Windows 10 і Windows 11, 64-біт. Додатково нічого встановлювати не потрібно.",
    "q.4q":"Чи збирає застосунок дані?","q.4a":"Ні. Застосунок не надсилає дані в мережу. Усі налаштування зберігаються локально в %LOCALAPPDATA%\\QuickSoundTray.",
    "q.5q":"Чим відрізняються два інсталятори?","q.5a":"Основний встановлює програму лише для вашого користувача й не потребує прав адміністратора. Другий — для всіх користувачів комп'ютера.",
    "q.6q":"Знайшов баг або є ідея — куди писати?","q.6a":"У Telegram @Zhukkk_kkk або на пошту zhukskyline@gmail.com. Відповідаю особисто.",
    "c.title":"Спробуйте просто зараз","c.sub":"Безкоштовно. Без реєстрації. Видаляється в один клік.","c.copy":"Натисніть, щоб скопіювати",
    "ft.privacy":"Конфіденційність",
    "a.tag":"Компактний мікшер звуку для Windows","a.desc":"QuickSoundTray замінює стандартний мікшер гучності Windows компактним вікном у треї. Керуйте загальною гучністю, перемикайте пристрої відтворення й запису, регулюйте звук окремих застосунків і вимикайте мікрофон глобальною гарячою клавішею.",
    "a.ver":"Версія","a.os":"Система","a.size":"Розмір","a.sizev":"46 МБ","a.lic":"Ліцензія","a.licv":"Безкоштовно","a.langs":"Мови","a.hot":"Гарячі клавіші",
    "pr.1":"QuickSoundTray не збирає, не зберігає на серверах і не передає жодних персональних даних. Застосунок не містить аналітики та реклами.",
    "pr.2":"Усі налаштування зберігаються локально на вашому комп'ютері в теці %LOCALAPPDATA%\\QuickSoundTray і видаляються разом із застосунком.",
    "pr.3":"Цей сайт не використовує cookies і лічильники.",
    "t.title":"Завантаження почалося!","t.sub":"Відкрийте завантажений файл QuickSoundTray-Setup.exe і дотримуйтесь кроків інсталятора.","t.retry":"Завантаження не почалося?","t.link":"Завантажити вручну",
    "toast.copied":"Пошту скопійовано","cta.store":"Або встановіть з Microsoft Store","g.kicker":"Інструкції","g.1t":"Як налаштувати гучність кожної програми окремо","g.1d":"Вбудований спосіб Windows і як зробити те саме в один клік.","g.2t":"Як швидко перемикатися між навушниками й колонками","g.2d":"Де вибрати пристрій виведення і як не лізти щоразу в налаштування.","g.3t":"Як вимикати мікрофон гарячою клавішею","g.3d":"Що вміє Windows сама і як вимикати мікрофон у будь-якій грі.","g.read":"Читати →","g.title":"Корисне про звук у Windows","toast.soon":"Посилання на завантаження ще не налаштоване",
  },
  en: {
    "nav.features":"Features","nav.screens":"Screenshots","nav.install":"Install","nav.faq":"FAQ","nav.about":"About","nav.contact":"Contact",
    "cta.short":"Download","cta.main":"Download for Windows","cta.sub":"Setup · 46 MB · Windows 10 / 11 x64",
    "cta.alt":"Installer for all users (requires administrator rights)",
    "chip.mic":"Microphone muted","chip.mode":"“Gaming” mode on",
    "hero.badge":"Version 1.3.0 · Free","hero.t1":"Every sound\u00a0—","hero.t2":"one click away.",
    "hero.lead":"A compact tray mixer that replaces the stock Windows volume control. Devices, apps, microphone and sound modes — all at your fingertips.",
    "hero.k1":"No ads, no sign-up","hero.k2":"No data collected","hero.k3":"7 languages · 6 themes",
    "st.1":"click to any device","st.2":"interface languages","st.3":"themes","st.4":"price — completely free",
    "f.kicker":"Features","f.title":"Everything the Windows mixer is missing","f.sub":"One clean window instead of five different menus in Settings.",
    "f.1t":"Per-app volume","f.1d":"A separate slider and mute for every program: game quieter, Discord louder.",
    "f.2t":"Devices in 1 click","f.2d":"Speakers, headphones, headset — switch output and input with a single click.",
    "f.3t":"Mic mute hotkey","f.3d":"A global hotkey mutes your microphone from any game or app.",
    "f.4t":"Sound modes","f.4d":"Streaming, gaming, music, calls — a whole set of settings in one click, with fallback if a device disconnects.",
    "f.5t":"Auto-ducking","f.5d":"Selected apps get quieter while you speak into the mic.",
    "f.6t":"Sound fixes","f.6d":"Fixes common Windows audio problems in a couple of clicks.",
    "f.7t":"Widget & live icon","f.7d":"An animated tray icon and desktop widget react to sound.",
    "f.8t":"Private & local","f.8d":"Nothing is sent over the network. Settings stay on your PC, with export and import.",
    "s.kicker":"Screenshots","s.title":"Take a look inside","s.t1":"Mixer","s.t2":"Settings","s.t3":"Hotkeys","s.t4":"Themes",
    "s.p1t":"Main window","s.p1d":"Master volume, quick modes, output device and microphone — on one screen. Opens with a click on the tray icon or ALT + SHIFT + S.",
    "s.p2t":"Make it yours","s.p2d":"Theme, interface language, animations and tray icon behaviour. Everything applies instantly, no restart.",
    "s.p3t":"Hotkeys","s.p3d":"Custom shortcuts for the mixer and mic, silent autostart with Windows, reset and restart.",
    "i.kicker":"Install","i.title":"Ready in a minute",
    "i.1t":"Download","i.1d":"Click “Download” — the installer downloads automatically.",
    "i.2t":"Install","i.2d":"Run the file. If Windows shows SmartScreen — “More info” → “Run anyway”.",
    "i.3t":"Enjoy","i.3d":"The icon appears in the tray. Click it or press ALT + SHIFT + S.",
    "q.title":"FAQ",
    "q.1q":"Is it really free?","q.1a":"Yes. No ads, no subscriptions, no sign-up.",
    "q.2q":"Why does Windows show a warning?","q.2a":"SmartScreen warns about new apps that don't have many downloads yet. Click “More info” → “Run anyway”. You can verify the file checksum in the About section.",
    "q.3q":"Which systems are supported?","q.3a":"Windows 10 and Windows 11, 64-bit. Nothing else needs to be installed.",
    "q.4q":"Does the app collect data?","q.4a":"No. The app sends nothing over the network. All settings are stored locally in %LOCALAPPDATA%\\QuickSoundTray.",
    "q.5q":"What's the difference between the two installers?","q.5a":"The main one installs for your user only and needs no admin rights. The second installs for all users of the PC.",
    "q.6q":"Found a bug or have an idea?","q.6a":"Message me on Telegram @Zhukkk_kkk or email zhukskyline@gmail.com. I reply personally.",
    "c.title":"Try it right now","c.sub":"Free. No sign-up. Uninstalls in one click.","c.copy":"Click to copy",
    "ft.privacy":"Privacy",
    "a.tag":"Compact sound mixer for Windows","a.desc":"QuickSoundTray replaces the stock Windows volume mixer with a compact tray window. Control master volume, switch playback and recording devices, adjust individual apps and mute your mic with a global hotkey.",
    "a.ver":"Version","a.os":"System","a.size":"Size","a.sizev":"46 MB","a.lic":"License","a.licv":"Free","a.langs":"Languages","a.hot":"Hotkeys",
    "pr.1":"QuickSoundTray does not collect, store on servers or transmit any personal data. The app contains no analytics or ads.",
    "pr.2":"All settings are stored locally in %LOCALAPPDATA%\\QuickSoundTray and are removed together with the app.",
    "pr.3":"This website uses no cookies or trackers.",
    "t.title":"Download started!","t.sub":"Open the downloaded QuickSoundTray-Setup.exe and follow the installer steps.","t.retry":"Download didn't start?","t.link":"Download manually",
    "toast.copied":"Email copied","cta.store":"Or get it from Microsoft Store","g.kicker":"Guides","g.1t":"How to set volume for each app separately","g.1d":"The built-in Windows way and a one-click alternative (article in Russian).","g.2t":"How to switch between headphones and speakers fast","g.2d":"Where to pick the output device without digging into Settings (in Russian).","g.3t":"How to mute your microphone with a hotkey","g.3d":"What Windows can do and how to mute in any game (in Russian).","g.read":"Read →","g.title":"Useful tips about Windows sound","toast.soon":"Download link is not configured yet",
  },
  ru: { "toast.copied":"Почта скопирована","toast.soon":"Ссылка на скачивание ещё не настроена" }
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- i18n ---------- */
const nodes = $$("[data-i18n]");
nodes.forEach(n => { const k = n.dataset.i18n; if (!(k in I18N.ru)) I18N.ru[k] = n.textContent; });
let lang = "ru";
function t(k){ return (I18N[lang] && I18N[lang][k]) || I18N.ru[k] || k; }
function setLang(l){
  lang = I18N[l] ? l : "ru";
  document.documentElement.lang = lang;
  nodes.forEach(n => { n.textContent = t(n.dataset.i18n); });
  $$("#lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  try { localStorage.setItem("qst-lang", lang); } catch(e) {}
  document.querySelectorAll(".guide[data-uk]").forEach(a => { if (!a.dataset.ru) a.dataset.ru = a.getAttribute("href"); a.setAttribute("href", lang === "uk" ? a.dataset.uk : a.dataset.ru); });
  requestAnimationFrame(moveInd);
}
$$("#lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
let saved = null;
try { saved = localStorage.getItem("qst-lang"); } catch(e) {}
if (!saved) { const nl = (navigator.language || "").toLowerCase(); saved = nl.startsWith("uk") ? "uk" : (nl.startsWith("ru") || nl.startsWith("be") || nl.startsWith("kk")) ? "ru" : "en"; }
setLang(saved);

/* ---------- toast ---------- */
let toastT;
function toast(msg){ const el = $("#toast"); el.textContent = msg; el.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove("show"), 2400); }

/* ---------- download ---------- */
function startDownload(url){
  if (!url || url.includes("OWNER/REPO")) { toast(t("toast.soon")); return false; }
  const a = document.createElement("a");
  a.href = url; a.download = ""; a.rel = "noopener";
  document.body.appendChild(a); a.click(); a.remove();
  return true;
}
$$(".js-download").forEach(b => { b.href = CONFIG.downloadUser; b.addEventListener("click", e => {
  e.preventDefault(); closeModals();
  if (startDownload(CONFIG.downloadUser)) setTimeout(() => openModal("thanks"), 350);
});});
$$(".js-download-machine").forEach(b => { b.href = CONFIG.downloadMachine; b.addEventListener("click", e => {
  e.preventDefault();
  if (startDownload(CONFIG.downloadMachine)) setTimeout(() => openModal("thanks"), 350);
});});
$$(".js-download-raw").forEach(b => { b.href = CONFIG.downloadUser; });
if (CONFIG.storeUrl) $$(".js-store").forEach(b => { b.href = CONFIG.storeUrl; b.hidden = false; });

/* ---------- modals ---------- */
function openModal(id){ const m = $("#m-" + id); if (!m) return; m.classList.add("open"); document.body.style.overflow = "hidden"; setTimeout(() => $(".x", m).focus(), 50); }
function closeModals(){ $$(".modal.open").forEach(m => m.classList.remove("open")); document.body.style.overflow = ""; }
$$("[data-open]").forEach(b => b.addEventListener("click", () => { nav.classList.remove("menu"); openModal(b.dataset.open); }));
$$(".modal").forEach(m => m.addEventListener("click", e => { if (e.target === m || e.target.closest("[data-close]")) closeModals(); }));
addEventListener("keydown", e => { if (e.key === "Escape") { closeModals(); $$(".dd.open").forEach(d => d.classList.remove("open")); } });

/* ---------- nav ---------- */
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
addEventListener("scroll", onScroll, { passive: true }); onScroll();
$("#burger").addEventListener("click", () => nav.classList.toggle("menu"));
$$(".links > a").forEach(a => a.addEventListener("click", () => nav.classList.remove("menu")));
$$(".dd-btn").forEach(b => b.addEventListener("click", e => {
  e.stopPropagation(); const d = b.parentElement; d.classList.toggle("open"); b.setAttribute("aria-expanded", d.classList.contains("open"));
}));
document.addEventListener("click", e => { if (!e.target.closest(".dd")) $$(".dd.open").forEach(d => d.classList.remove("open")); });

/* ---------- copy email ---------- */
$("#copyMail").addEventListener("click", async () => {
  const mail = "zhukskyline@gmail.com";
  try { await navigator.clipboard.writeText(mail); toast(t("toast.copied")); }
  catch(e) { location.href = "mailto:" + mail; }
});

/* ---------- hero slideshow + tilt ---------- */
const hw = $$("#heroWin .hw"), hd = $$("#heroDots button");
let hi = 0, hTimer;
function showHero(i){ hi = (i + hw.length) % hw.length; hw.forEach((im, k) => im.classList.toggle("on", k === hi)); hd.forEach((d, k) => d.classList.toggle("on", k === hi)); }
function autoHero(){ clearInterval(hTimer); hTimer = setInterval(() => showHero(hi + 1), 4200); }
hd.forEach((d, k) => d.addEventListener("click", () => { showHero(k); autoHero(); }));
autoHero();

const stage = $("#stage"), tilt = $("#tilt");
if (!reduce && matchMedia("(pointer:fine)").matches) {
  stage.addEventListener("mousemove", e => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    tilt.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 12}deg)`;
  });
  stage.addEventListener("mouseleave", () => { tilt.style.transform = ""; });
}

/* ---------- equalizer bars ---------- */
function bars(el, n, maxH){
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    const c = Math.sin((i / n) * Math.PI);
    s.style.height = (20 + c * maxH * (.5 + Math.random() * .5)) + "%";
    s.style.animationDuration = (.9 + Math.random() * 1.4) + "s";
    s.style.animationDelay = (-Math.random() * 2) + "s";
    el.appendChild(s);
  }
}
bars($(".eq"), 46, 80);
bars($(".cta-bars"), 90, 70);

/* ---------- tabs ---------- */
const tabs = $$("#tabs button"), ind = $("#tabInd"), panes = $$(".pane");
function moveInd(){ const a = $("#tabs button.on"); if (!a) return; ind.style.left = a.offsetLeft + "px"; ind.style.width = a.offsetWidth + "px"; }
tabs.forEach(b => b.addEventListener("click", () => {
  tabs.forEach(x => x.classList.toggle("on", x === b));
  panes.forEach(p => p.classList.toggle("on", p.dataset.pane === b.dataset.tab));
  moveInd();
}));
addEventListener("resize", moveInd);
document.fonts && document.fonts.ready.then(moveInd);

/* ---------- card spotlight ---------- */
$$(".card").forEach(c => c.addEventListener("pointermove", e => {
  const r = c.getBoundingClientRect();
  c.style.setProperty("--x", (e.clientX - r.left) + "px");
  c.style.setProperty("--y", (e.clientY - r.top) + "px");
}));
addEventListener("pointermove", e => {
  document.documentElement.style.setProperty("--mx", e.clientX + "px");
  document.documentElement.style.setProperty("--my", e.clientY + "px");
}, { passive: true });

/* ---------- reveal + counters ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in"); io.unobserve(e.target);
  const b = e.target.querySelector("[data-count]"); if (b) countUp(b);
}), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
$$(".rv").forEach(el => io.observe(el));
function countUp(el){
  const end = +el.dataset.count, suf = el.dataset.suffix || "", dur = 1400, t0 = performance.now();
  if (end === 0) { el.textContent = "0" + suf; return; }
  const step = now => { const p = Math.min(1, (now - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3))); el.textContent = v + suf; if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
$("#yr").textContent = new Date().getFullYear();
addEventListener("load", () => document.body.classList.add("loaded"));
setTimeout(() => document.body.classList.add("loaded"), 600);

/* ---------- background: sound waves + particles ---------- */
(() => {
  const cv = $("#bg"), cx = cv.getContext("2d");
  let W, H, dpr, pts = [], run = true, tm = 0;
  function size(){
    dpr = Math.min(devicePixelRatio || 1, 1.5);
    W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
    const n = Math.round(innerWidth * innerHeight / 14000);
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + .3, v: Math.random() * .25 + .05, a: Math.random() }));
  }
  size(); addEventListener("resize", size);
  document.addEventListener("visibilitychange", () => { run = !document.hidden; if (run) requestAnimationFrame(draw); });
  const waves = [
    { amp: .05, len: .0016, sp: .6, col: "rgba(59,130,255,.30)", y: .62 },
    { amp: .035, len: .0024, sp: -.9, col: "rgba(34,211,238,.22)", y: .64 },
    { amp: .06, len: .0011, sp: .4, col: "rgba(124,92,255,.18)", y: .66 },
  ];
  function draw(){
    if (!run) return;
    tm += reduce ? 0 : .012;
    cx.clearRect(0, 0, W, H);
    // particles
    for (const p of pts) {
      p.y -= p.v * dpr; if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      const tw = .35 + .65 * Math.abs(Math.sin(tm * 1.5 + p.a * 10));
      cx.fillStyle = `rgba(150,200,255,${.55 * tw})`;
      cx.beginPath(); cx.arc(p.x, p.y, p.r * dpr, 0, 6.283); cx.fill();
    }
    // waves (fade with scroll)
    const fade = Math.max(0, 1 - scrollY / (innerHeight * 1.2));
    if (fade > 0) {
      cx.lineWidth = 1.5 * dpr;
      for (const w of waves) {
        cx.strokeStyle = w.col; cx.globalAlpha = fade;
        cx.beginPath();
        for (let x = 0; x <= W; x += 6 * dpr) {
          const env = Math.sin((x / W) * Math.PI);
          const y = H * w.y + Math.sin(x * w.len / dpr + tm * w.sp * 3) * H * w.amp * env * (1 + .4 * Math.sin(tm + x * .002 / dpr));
          x ? cx.lineTo(x, y) : cx.moveTo(x, y);
        }
        cx.stroke();
      }
      cx.globalAlpha = 1;
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
