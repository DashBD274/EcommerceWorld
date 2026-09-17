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
        signUp: "Sign Up",
        createAccount: "Create Account",
        registerSubtitle: "Register a new account to get started",
        fullNamePlaceholder: "Enter your full name",
        confirmPasswordPlaceholder: "Confirm Password",
        referCodePlaceholder: "Refer Code (Optional)",
        registerBtn: "Register",
        haveAccount: "Already have an account?"
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
        signUp: "Regístrate",
        createAccount: "Crear cuenta",
        registerSubtitle: "Registre una nueva cuenta para comenzar",
        fullNamePlaceholder: "Ingrese su nombre completo",
        confirmPasswordPlaceholder: "Confirmar contraseña",
        referCodePlaceholder: "Código de referencia (opcional)",
        registerBtn: "Registrarse",
        haveAccount: "¿Ya tienes una cuenta?"
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
        signUp: "S'inscrire",
        createAccount: "Créer un compte",
        registerSubtitle: "Inscrivez un nouveau compte pour commencer",
        fullNamePlaceholder: "Entrez votre nom complet",
        confirmPasswordPlaceholder: "Confirmer le mot de passe",
        referCodePlaceholder: "Code de parrainage (facultatif)",
        registerBtn: "S'inscrire",
        haveAccount: "Vous avez déjà un compte ?"
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
        signUp: "Registrieren",
        createAccount: "Konto erstellen",
        registerSubtitle: "Registrieren Sie ein neues Konto, um zu beginnen",
        fullNamePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
        confirmPasswordPlaceholder: "Passwort bestätigen",
        referCodePlaceholder: "Empfehlungscode (optional)",
        registerBtn: "Registrieren",
        haveAccount: "Sie haben bereits ein Konto?"
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
        signUp: "Registrati",
        createAccount: "Crea account",
        registerSubtitle: "Registra un nuovo account per iniziare",
        fullNamePlaceholder: "Inserisci il tuo nome completo",
        confirmPasswordPlaceholder: "Conferma password",
        referCodePlaceholder: "Codice referral (opzionale)",
        registerBtn: "Registrati",
        haveAccount: "Hai già un account?"
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
        signUp: "Inscrever-se",
        createAccount: "Criar conta",
        registerSubtitle: "Registre uma nova conta para começar",
        fullNamePlaceholder: "Digite seu nome completo",
        confirmPasswordPlaceholder: "Confirmar senha",
        referCodePlaceholder: "Código de indicação (opcional)",
        registerBtn: "Registrar",
        haveAccount: "Já tem uma conta?"
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
        signUp: "Aanmelden",
        createAccount: "Account aanmaken",
        registerSubtitle: "Registreer een nieuw account om te beginnen",
        fullNamePlaceholder: "Voer uw volledige naam in",
        confirmPasswordPlaceholder: "Wachtwoord bevestigen",
        referCodePlaceholder: "Verwijzingscode (optioneel)",
        registerBtn: "Registreren",
        haveAccount: "Heb je al een account?"
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
        signUp: "Зарегистрироваться",
        createAccount: "Создать аккаунт",
        registerSubtitle: "Зарегистрируйте новый аккаунт, чтобы начать",
        fullNamePlaceholder: "Введите ваше полное имя",
        confirmPasswordPlaceholder: "Подтвердите пароль",
        referCodePlaceholder: "Реферальный код (необязательно)",
        registerBtn: "Зарегистрироваться",
        haveAccount: "Уже есть аккаунт?"
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
        signUp: "Kayıt Ol",
        createAccount: "Hesap Oluştur",
        registerSubtitle: "Başlamak için yeni bir hesap kaydedin",
        fullNamePlaceholder: "Tam adınızı girin",
        confirmPasswordPlaceholder: "Şifreyi Onayla",
        referCodePlaceholder: "Referans Kodu (İsteğe bağlı)",
        registerBtn: "Kayıt Ol",
        haveAccount: "Zaten hesabınız var mı?"
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
        signUp: "إنشاء حساب",
        createAccount: "إنشاء حساب",
        registerSubtitle: "سجّل حسابًا جديدًا للبدء",
        fullNamePlaceholder: "أدخل اسمك الكامل",
        confirmPasswordPlaceholder: "تأكيد كلمة المرور",
        referCodePlaceholder: "رمز الإحالة (اختياري)",
        registerBtn: "تسجيل",
        haveAccount: "هل لديك حساب بالفعل؟"
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
        signUp: "ثبت نام",
        createAccount: "ایجاد حساب",
        registerSubtitle: "برای شروع یک حساب جدید ثبت کنید",
        fullNamePlaceholder: "نام کامل خود را وارد کنید",
        confirmPasswordPlaceholder: "تأیید رمز عبور",
        referCodePlaceholder: "کد معرف (اختیاری)",
        registerBtn: "ثبت نام",
        haveAccount: "قبلاً حساب دارید؟"
    }
};

// ================= ভাষা পরিবর্তন =================
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
        applyDirection(this.value);
    });
    changeLanguage(langSelect.value);
}

// ================= থিম টগল (iOS/Android Safe) =================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// Safe localStorage wrapper (iOS private mode এ crash করে না)
function safeGet(key) {
    try { return localStorage.getItem(key); } catch(e) { return null; }
}
function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch(e) {}
}

// পেজ লোডের সময় থিম চেক
const savedTheme = safeGet('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// থিম টগল ক্লিক (touch + click দুটোই কাজ করবে)
if (themeToggle) {
    const toggleHandler = function(e) {
        e.preventDefault();
        e.stopPropagation();

        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            safeSet('theme', 'dark');
        } else {
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            safeSet('theme', 'light');
        }
    };

    themeToggle.addEventListener('click', toggleHandler);
    // iOS এর জন্য touch event
    themeToggle.addEventListener('touchend', function(e) {
        e.preventDefault();
        toggleHandler(e);
    }, { passive: false });
}

// ================= পাসওয়ার্ড দেখা/লুকানো =================
const eyeIcons = document.querySelectorAll('.eye-icon');

eyeIcons.forEach(icon => {
    const eyeHandler = function(e) {
        e.preventDefault();
        const input = this.previousElementSibling;
        if (!input) return;

        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    };

    icon.addEventListener('click', eyeHandler);
    icon.addEventListener('touchend', function(e) {
        e.preventDefault();
        eyeHandler.call(this, e);
    }, { passive: false });
});

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
    applyDirection(langSelect.value);
}

// ================= লোগো অ্যানিমেশন (iOS/Android Fix) =================
const brandItems = document.querySelectorAll('.brand-item');
const brandStates = [];
let animationStarted = false;

// কার্ডের সাইজ (বারবার আপডেট হবে)
const loginCard = document.querySelector('.login-container');
let cardRect = null;

function updateCardRect() {
    if (loginCard) {
        cardRect = loginCard.getBoundingClientRect();
    }
}

// বাউন্স অ্যানিমেশন শুরু করার ফাংশন
function initBrandAnimation() {
    if (animationStarted) return;
    if (brandItems.length === 0) return;

    updateCardRect();

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    brandItems.forEach((item) => {
        // ⚠️ মূল সমাধান: getBoundingClientRect এর বদলে offsetWidth/offsetHeight
        const itemWidth = item.offsetWidth || 80;
        const itemHeight = item.offsetHeight || 50;

        const x = Math.random() * Math.max(20, screenWidth - itemWidth - 40) + 20;
        const y = Math.random() * Math.max(20, screenHeight - itemHeight - 40) + 20;
        const speed = 0.6 + Math.random() * 0.9;
        const angle = Math.random() * Math.PI * 2;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        // প্রাথমিক পজিশন সেট
        item.style.left = x + 'px';
        item.style.top = y + 'px';

        brandStates.push({
            element: item,
            x: x,
            y: y,
            vx: vx,
            vy: vy,
            width: itemWidth,
            height: itemHeight
        });
    });

    animationStarted = true;
    requestAnimationFrame(animateBrands);
}

// বাউন্স অ্যানিমেশন লুপ
function animateBrands() {
    if (!animationStarted) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // কার্ড রেক্ট ক্যাশ আপডেট (প্রতি ৬০ ফ্রেমে একবার)
    if (!cardRect || Math.random() < 0.02) {
        updateCardRect();
    }

    brandStates.forEach(state => {
        state.x += state.vx;
        state.y += state.vy;

        // স্ক্রিনের সীমানা চেক
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

        // কার্ডের সাথে সংঘর্ষ চেক
        if (cardRect &&
            state.x + state.width > cardRect.left && state.x < cardRect.right &&
            state.y + state.height > cardRect.top && state.y < cardRect.bottom) {

            const overlapLeft   = (state.x + state.width) - cardRect.left;
            const overlapRight  = cardRect.right - state.x;
            const overlapTop    = (state.y + state.height) - cardRect.top;
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

// ✅ গুরুত্বপূর্ণ: সব ইমেজ লোড হওয়ার পরে অ্যানিমেশন শুরু
function startWhenReady() {
    const images = document.querySelectorAll('.brand-logo');
    if (images.length === 0) {
        initBrandAnimation();
        return;
    }

    let loadedCount = 0;
    const totalImages = images.length;

    const checkDone = () => {
        loadedCount++;
        if (loadedCount >= totalImages) {
            // সব লোগো লোড হলে সামান্য দেরি দিয়ে অ্যানিমেশন শুরু
            setTimeout(initBrandAnimation, 100);
        }
    };

    images.forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
            checkDone();
        } else {
            img.addEventListener('load', checkDone, { once: true });
            img.addEventListener('error', checkDone, { once: true });
        }
    });

    // Safe fallback — ৩ সেকেন্ড পর জোর করে শুরু
    setTimeout(() => {
        if (!animationStarted) initBrandAnimation();
    }, 3000);
}

// DOM ready হলে শুরু
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startWhenReady);
} else {
    startWhenReady();
}

// উইন্ডো রিসাইজ / ওরিয়েন্টেশন চেঞ্জে কার্ড রেক্ট আপডেট
window.addEventListener('resize', updateCardRect);
window.addEventListener('orientationchange', () => {
    setTimeout(updateCardRect, 300);
});
