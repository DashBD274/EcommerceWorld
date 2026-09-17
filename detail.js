// ================= Safe localStorage =================
function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
}

// ================= RTL =================
const rtlLanguages = ['ar', 'fa'];
const savedLang = safeGet('language') || 'en';

if (rtlLanguages.includes(savedLang)) {
    document.body.classList.add('rtl');
    document.documentElement.setAttribute('dir', 'rtl');
} else {
    document.body.classList.remove('rtl');
    document.documentElement.setAttribute('dir', 'ltr');
}

// ================= থিম =================
const dashThemeToggle = document.getElementById('dashThemeToggle');
const dashThemeIcon = dashThemeToggle ? dashThemeToggle.querySelector('i') : null;

function applyDashTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (dashThemeIcon) {
            dashThemeIcon.classList.remove('fa-moon');
            dashThemeIcon.classList.add('fa-sun');
        }
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', '#0f172a');
    } else {
        document.body.classList.remove('dark-mode');
        if (dashThemeIcon) {
            dashThemeIcon.classList.remove('fa-sun');
            dashThemeIcon.classList.add('fa-moon');
        }
        const
