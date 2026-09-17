// ================= ভাষার অনুবাদ =================
const translations = {
    en: {
        signIn: "Sign In",
        subtitle: "Welcome back! Enter your credentials to access your account",
        emailPlaceholder: "Email Address",
        passwordPlaceholder: "Password",
        verifyPlaceholder: "Verification",
        remember: "Remember password",
        forgot: "Forgot Password?",
        loginBtn: "Login",
        noAccount: "Don't have an account?",
        signUp: "Sign Up"
    },
    es: {
        signIn: "Iniciar sesión",
        subtitle: "¡Bienvenido de nuevo! Ingrese sus credenciales para acceder a su cuenta",
        emailPlaceholder: "Correo electrónico",
        passwordPlaceholder: "Contraseña",
        verifyPlaceholder: "Verificación",
        remember: "Recordar contraseña",
        forgot: "¿Olvidaste tu contraseña?",
        loginBtn: "Iniciar sesión",
        noAccount: "¿No tienes una cuenta?",
        signUp: "Regístrate"
    },
    fr: {
        signIn: "Se connecter",
        subtitle: "Bon retour ! Entrez vos identifiants pour accéder à votre compte",
        emailPlaceholder: "Adresse e-mail",
        passwordPlaceholder: "Mot de passe",
        verifyPlaceholder: "Vérification",
        remember: "Se souvenir du mot de passe",
        forgot: "Mot de passe oublié ?",
        loginBtn: "Connexion",
        noAccount: "Vous n'avez pas de compte ?",
        signUp: "S'inscrire"
    },
    de: {
        signIn: "Anmelden",
        subtitle: "Willkommen zurück! Geben Sie Ihre Anmeldedaten ein, um auf Ihr Konto zuzugreifen",
        emailPlaceholder: "E-Mail-Adresse",
        passwordPlaceholder: "Passwort",
        verifyPlaceholder: "Verifizierung",
        remember: "Passwort merken",
        forgot: "Passwort vergessen?",
        loginBtn: "Anmelden",
        noAccount: "Sie haben kein Konto?",
        signUp: "Registrieren"
    },
    it: {
        signIn: "Accedi",
        subtitle: "Bentornato! Inserisci le tue credenziali per accedere al tuo account",
        emailPlaceholder: "Indirizzo email",
        passwordPlaceholder: "Password",
        verifyPlaceholder: "Verifica",
        remember: "Ricorda password",
        forgot: "Password dimenticata?",
        loginBtn: "Accedi",
        noAccount: "Non hai un account?",
        signUp: "Registrati"
    },
    pt: {
        signIn: "Entrar",
        subtitle: "Bem-vindo de volta! Insira suas credenciais para acessar sua conta",
        emailPlaceholder: "Endereço de e-mail",
        passwordPlaceholder: "Senha",
        verifyPlaceholder: "Verificação",
        remember: "Lembrar senha",
        forgot: "Esqueceu a senha?",
        loginBtn: "Entrar",
        noAccount: "Não tem uma conta?",
        signUp: "Inscrever-se"
    },
    nl: {
        signIn: "Inloggen",
        subtitle: "Welkom terug! Voer uw inloggegevens in om toegang te krijgen tot uw account",
        emailPlaceholder: "E-mailadres",
        passwordPlaceholder: "Wachtwoord",
        verifyPlaceholder: "Verificatie",
        remember: "Wachtwoord onthouden",
        forgot: "Wachtwoord vergeten?",
        loginBtn: "Inloggen",
        noAccount: "Heb je geen account?",
        signUp: "Aanmelden"
    },
    ru: {
        signIn: "Войти",
        subtitle: "С возвращением! Введите свои учетные данные для доступа к аккаунту",
        emailPlaceholder: "Адрес электронной почты",
        passwordPlaceholder: "Пароль",
        verifyPlaceholder: "Проверка",
        remember: "Запомнить пароль",
        forgot: "Забыли пароль?",
        loginBtn: "Войти",
        noAccount: "Нет аккаунта?",
        signUp: "Зарегистрироваться"
    },
    tr: {
        signIn: "Giriş Yap",
        subtitle: "Tekrar hoş geldiniz! Hesabınıza erişmek için bilgilerinizi girin",
        emailPlaceholder: "E-posta Adresi",
        passwordPlaceholder: "Şifre",
        verifyPlaceholder: "Doğrulama",
        remember: "Şifreyi hatırla",
        forgot: "Şifremi unuttum?",
        loginBtn: "Giriş Yap",
        noAccount: "Hesabınız yok mu?",
        signUp: "Kayıt Ol"
    },
    ar: {
        signIn: "تسجيل الدخول",
        subtitle: "مرحبًا بعودتك! أدخل بياناتك للوصول إلى حسابك",
        emailPlaceholder: "البريد الإلكتروني",
        passwordPlaceholder: "كلمة المرور",
        verifyPlaceholder: "التحقق",
        remember: "تذكر كلمة المرور",
        forgot: "هل نسيت كلمة المرور؟",
        loginBtn: "تسجيل الدخول",
        noAccount: "ليس لديك حساب؟",
        signUp: "إنشاء حساب"
    },
    fa: {
        signIn: "ورود",
        subtitle: "خوش آمدید! برای دسترسی به حساب خود اطلاعات خود را وارد کنید",
        emailPlaceholder: "آدرس ایمیل",
        passwordPlaceholder: "رمز عبور",
        verifyPlaceholder: "تأیید",
        remember: "به خاطر سپردن رمز عبور",
        forgot: "رمز عبور را فراموش کرده اید؟",
        loginBtn: "ورود",
        noAccount: "حساب کاربری ندارید؟",
        signUp: "ثبت نام"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

const langSelect = document.getElementById('languageSelect');
if (langSelect) {
    langSelect.addEventListener('change', function() {
        changeLanguage(this.value);
    });
    changeLanguage(langSelect.value);
}

// ================= থিম টগল =================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// ================= পাসওয়ার্ড দেখা/লুকানো =================
const eyeIcon = document.querySelector('.eye-icon');
const passwordInput = document.querySelector('input[type="password"]');

if (eyeIcon && passwordInput) {
    eyeIcon.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    });
}

// ================= র‍্যান্ডম ভেরিফিকেশন কোড =================
const verifyCodeDiv = document.getElementById('verifyCode');
if (verifyCodeDiv) {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    verifyCodeDiv.textContent = randomCode.toString().split('').join(' ');
}

// ================= RTL (ডান থেকে বাম) অটো ডিটেকশন =================
const rtlLanguages = ['ar', 'fa'];

function applyDirection(lang) {
    if (rtlLanguages.includes(lang)) {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

if (langSelect) {
    langSelect.addEventListener('change', function() {
        applyDirection(this.value);
    });
    applyDirection(langSelect.value);
}

// ================= লোগো অ্যানিমেশন =================
const brandItems = document.querySelectorAll('.brand-item');
const brandStates = [];

brandItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const x = Math.random() * (window.innerWidth - rect.width - 40) + 20;
    const y = Math.random() * (window.innerHeight - rect.height - 40) + 20;
    const speed = 0.5 + Math.random() * 0.8;
    const angle = Math.random() * Math.PI * 2;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;

    brandStates.push({
        element: item,
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        width: rect.width,
        height: rect.height
    });

    item.style.left = x + 'px';
    item.style.top = y + 'px';
});

const loginCard = document.querySelector('.login-container');
let cardRect = loginCard.getBoundingClientRect();

function animateBrands() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    brandStates.forEach(state => {
        state.x += state.vx;
        state.y += state.vy;

        if (state.x <= 0) {
            state.x = 0;
            state.vx = Math.abs(state.vx);
        }
        if (state.x + state.width >= screenWidth) {
            state.x = screenWidth - state.width;
            state.vx = -Math.abs(state.vx);
        }
        if (state.y <= 0) {
            state.y = 0;
            state.vy = Math.abs(state.vy);
        }
        if (state.y + state.height >= screenHeight) {
            state.y = screenHeight - state.height;
            state.vy = -Math.abs(state.vy);
        }

        if (state.x + state.width > cardRect.left && state.x < cardRect.right &&
            state.y + state.height > cardRect.top && state.y < cardRect.bottom) {

            const overlapLeft = (state.x + state.width) - cardRect.left;
            const overlapRight = cardRect.right - state.x;
            const overlapTop = (state.y + state.height) - cardRect.top;
            const overlapBottom = cardRect.bottom - state.y;

            const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

            if (minOverlap === overlapLeft) {
                state.x = cardRect.left - state.width;
                state.vx = -Math.abs(state.vx);
            } else if (minOverlap === overlapRight) {
                state.x = cardRect.right;
                state.vx = Math.abs(state.vx);
            } else if (minOverlap === overlapTop) {
                state.y = cardRect.top - state.height;
                state.vy = -Math.abs(state.vy);
            } else {
                state.y = cardRect.bottom;
                state.vy = Math.abs(state.vy);
            }
        }

        state.element.style.left = state.x + 'px';
        state.element.style.top = state.y + 'px';
    });

    requestAnimationFrame(animateBrands);
}

if (brandStates.length > 0) {
    animateBrands();
}

window.addEventListener('resize', () => {
    cardRect = loginCard.getBoundingClientRect();
});
