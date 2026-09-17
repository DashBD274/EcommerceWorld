// ================= ভাষার অনুবাদ =================
const translations = {
    en: {
        signIn: "Sign In", subtitle: "Welcome back! Enter your credentials to access your account",
        emailPlaceholder: "Email Address", passwordPlaceholder: "Password",
        verifyPlaceholder: "Verification", remember: "Remember password",
        forgot: "Forgot Password?", loginBtn: "Login",
        noAccount: "Don't have an account?", signUp: "Sign Up",
        createAccount: "Create Account", registerSubtitle: "Register a new account to get started",
        fullNamePlaceholder: "Enter your full name", confirmPasswordPlaceholder: "Confirm Password",
        referCodePlaceholder: "Refer Code (Optional)", registerBtn: "Register",
        haveAccount: "Already have an account?",
        verifying: "Verifying your email...", verified: "Email verification completed!"
    },
    es: {
        signIn: "Iniciar sesión", subtitle: "¡Bienvenido de nuevo! Ingrese sus credenciales para acceder a su cuenta",
        emailPlaceholder: "Correo electrónico", passwordPlaceholder: "Contraseña",
        verifyPlaceholder: "Verificación", remember: "Recordar contraseña",
        forgot: "¿Olvidaste tu contraseña?", loginBtn: "Iniciar sesión",
        noAccount: "¿No tienes una cuenta?", signUp: "Regístrate",
        createAccount: "Crear cuenta", registerSubtitle: "Registre una nueva cuenta para comenzar",
        fullNamePlaceholder: "Ingrese su nombre completo", confirmPasswordPlaceholder: "Confirmar contraseña",
        referCodePlaceholder: "Código de referencia (opcional)", registerBtn: "Registrarse",
        haveAccount: "¿Ya tienes una cuenta?",
        verifying: "Verificando tu correo electrónico...", verified: "¡Verificación de correo completada!"
    },
    fr: {
        signIn: "Se connecter", subtitle: "Bon retour ! Entrez vos identifiants pour accéder à votre compte",
        emailPlaceholder: "Adresse e-mail", passwordPlaceholder: "Mot de passe",
        verifyPlaceholder: "Vérification", remember: "Se souvenir du mot de passe",
        forgot: "Mot de passe oublié ?", loginBtn: "Connexion",
        noAccount: "Vous n'avez pas de compte ?", signUp: "S'inscrire",
        createAccount: "Créer un compte", registerSubtitle: "Inscrivez un nouveau compte pour commencer",
        fullNamePlaceholder: "Entrez votre nom complet", confirmPasswordPlaceholder: "Confirmer le mot de passe",
        referCodePlaceholder: "Code de parrainage (facultatif)", registerBtn: "S'inscrire",
        haveAccount: "Vous avez déjà un compte ?",
        verifying: "Vérification de votre e-mail...", verified: "Vérification de l'e-mail terminée !"
    },
    de: {
        signIn: "Anmelden", subtitle: "Willkommen zurück! Geben Sie Ihre Anmeldedaten ein",
        emailPlaceholder: "E-Mail-Adresse", passwordPlaceholder: "Passwort",
        verifyPlaceholder: "Verifizierung", remember: "Passwort merken",
        forgot: "Passwort vergessen?", loginBtn: "Anmelden",
        noAccount: "Sie haben kein Konto?", signUp: "Registrieren",
        createAccount: "Konto erstellen", registerSubtitle: "Registrieren Sie ein neues Konto",
        fullNamePlaceholder: "Geben Sie Ihren vollständigen Namen ein", confirmPasswordPlaceholder: "Passwort bestätigen",
        referCodePlaceholder: "Empfehlungscode (optional)", registerBtn: "Registrieren",
        haveAccount: "Sie haben bereits ein Konto?",
        verifying: "E-Mail wird überprüft...", verified: "E-Mail-Verifizierung abgeschlossen!"
    },
    it: {
        signIn: "Accedi", subtitle: "Bentornato! Inserisci le tue credenziali",
        emailPlaceholder: "Indirizzo email", passwordPlaceholder: "Password",
        verifyPlaceholder: "Verifica", remember: "Ricorda password",
        forgot: "Password dimenticata?", loginBtn: "Accedi",
        noAccount: "Non hai un account?", signUp: "Registrati",
        createAccount: "Crea account", registerSubtitle: "Registra un nuovo account per iniziare",
        fullNamePlaceholder: "Inserisci il tuo nome completo", confirmPasswordPlaceholder: "Conferma password",
        referCodePlaceholder: "Codice referral (opzionale)", registerBtn: "Registrati",
        haveAccount: "Hai già un account?",
        verifying: "Verifica della tua email...", verified: "Verifica email completata!"
    },
    pt: {
        signIn: "Entrar", subtitle: "Bem-vindo de volta! Insira suas credenciais",
        emailPlaceholder: "Endereço de e-mail", passwordPlaceholder: "Senha",
        verifyPlaceholder: "Verificação", remember: "Lembrar senha",
        forgot: "Esqueceu a senha?", loginBtn: "Entrar",
        noAccount: "Não tem uma conta?", signUp: "Inscrever-se",
        createAccount: "Criar conta", registerSubtitle: "Registre uma nova conta para começar",
        fullNamePlaceholder: "Digite seu nome completo", confirmPasswordPlaceholder: "Confirmar senha",
        referCodePlaceholder: "Código de indicação (opcional)", registerBtn: "Registrar",
        haveAccount: "Já tem uma conta?",
        verifying: "Verificando seu e-mail...", verified: "Verificação de e-mail concluída!"
    },
    nl: {
        signIn: "Inloggen", subtitle: "Welkom terug! Voer uw inloggegevens in",
        emailPlaceholder: "E-mailadres", passwordPlaceholder: "Wachtwoord",
        verifyPlaceholder: "Verificatie", remember: "Wachtwoord onthouden",
        forgot: "Wachtwoord vergeten?", loginBtn: "Inloggen",
        noAccount: "Heb je geen account?", signUp: "Aanmelden",
        createAccount: "Account aanmaken", registerSubtitle: "Registreer een nieuw account",
        fullNamePlaceholder: "Voer uw volledige naam in", confirmPasswordPlaceholder: "Wachtwoord bevestigen",
        referCodePlaceholder: "Verwijzingscode (optioneel)", registerBtn: "Registreren",
        haveAccount: "Heb je al een account?",
        verifying: "E-mail verifiëren...", verified: "E-mailverificatie voltooid!"
    },
    ru: {
        signIn: "Войти", subtitle: "С возвращением! Введите свои учетные данные",
        emailPlaceholder: "Адрес электронной почты", passwordPlaceholder: "Пароль",
        verifyPlaceholder: "Проверка", remember: "Запомнить пароль",
        forgot: "Забыли пароль?", loginBtn: "Войти",
        noAccount: "Нет аккаунта?", signUp: "Зарегистрироваться",
        createAccount: "Создать аккаунт", registerSubtitle: "Зарегистрируйте новый аккаунт",
        fullNamePlaceholder: "Введите ваше полное имя", confirmPasswordPlaceholder: "Подтвердите пароль",
        referCodePlaceholder: "Реферальный код (необязательно)", registerBtn: "Зарегистрироваться",
        haveAccount: "Уже есть аккаунт?",
        verifying: "Проверка вашей почты...", verified: "Проверка почты завершена!"
    },
    tr: {
        signIn: "Giriş Yap", subtitle: "Tekrar hoş geldiniz! Bilgilerinizi girin",
        emailPlaceholder: "E-posta Adresi", passwordPlaceholder: "Şifre",
        verifyPlaceholder: "Doğrulama", remember: "Şifreyi hatırla",
        forgot: "Şifremi unuttum?", loginBtn: "Giriş Yap",
        noAccount: "Hesabınız yok mu?", signUp: "Kayıt Ol",
        createAccount: "Hesap Oluştur", registerSubtitle: "Başlamak için yeni bir hesap kaydedin",
        fullNamePlaceholder: "Tam adınızı girin", confirmPasswordPlaceholder: "Şifreyi Onayla",
        referCodePlaceholder: "Referans Kodu (İsteğe bağlı)", registerBtn: "Kayıt Ol",
        haveAccount: "Zaten hesabınız var mı?",
        verifying: "E-postanız doğrulanıyor...", verified: "E-posta doğrulama tamamlandı!"
    },
    ar: {
        signIn: "تسجيل الدخول", subtitle: "مرحبًا بعودتك! أدخل بياناتك",
        emailPlaceholder: "البريد الإلكتروني", passwordPlaceholder: "كلمة المرور",
        verifyPlaceholder: "التحقق", remember: "تذكر كلمة المرور",
        forgot: "هل نسيت كلمة المرور؟", loginBtn: "تسجيل الدخول",
        noAccount: "ليس لديك حساب؟", signUp: "إنشاء حساب",
        createAccount: "إنشاء حساب", registerSubtitle: "سجّل حسابًا جديدًا للبدء",
        fullNamePlaceholder: "أدخل اسمك الكامل", confirmPasswordPlaceholder: "تأكيد كلمة المرور",
        referCodePlaceholder: "رمز الإحالة (اختياري)", registerBtn: "تسجيل",
        haveAccount: "هل لديك حساب بالفعل؟",
        verifying: "جارٍ التحقق من بريدك الإلكتروني...", verified: "اكتمل التحقق من البريد!"
    },
    fa: {
        signIn: "ورود", subtitle: "خوش آمدید! اطلاعات خود را وارد کنید",
        emailPlaceholder: "آدرس ایمیل", passwordPlaceholder: "رمز عبور",
        verifyPlaceholder: "تأیید", remember: "به خاطر سپردن رمز عبور",
        forgot: "رمز عبور را فراموش کرده اید؟", loginBtn: "ورود",
        noAccount: "حساب کاربری ندارید؟", signUp: "ثبت نام",
        createAccount: "ایجاد حساب", registerSubtitle: "برای شروع یک حساب جدید ثبت کنید",
        fullNamePlaceholder: "نام کامل خود را وارد کنید", confirmPasswordPlaceholder: "تأیید رمز عبور",
        referCodePlaceholder: "کد معرف (اختیاری)", registerBtn: "ثبت نام",
        haveAccount: "قبلاً حساب دارید؟",
        verifying: "در حال تأیید ایمیل شما...", verified: "تأیید ایمیل کامل شد!"
    }
};

// ================= Safe localStorage =================
function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
}

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

// ================= RTL =================
const rtlLanguages = ['ar', 'fa'];
function applyDirection(lang) {
    if (rtlLanguages.includes(lang)) {
        document.body.classList.add('rtl');
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

// ================= ভাষা Select Handler =================
const langSelect = document.getElementById('languageSelect');
if (langSelect) {
    const savedLang = safeGet('language') || 'en';
    langSelect.value = savedLang;
    changeLanguage(savedLang);
    applyDirection(savedLang);

    langSelect.addEventListener('change', function() {
        const newLang = this.value;
        changeLanguage(newLang);
        applyDirection(newLang);
        safeSet('language', newLang);
    });
}

// ================= থিম টগল =================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', '#121212');
    } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', '#b0bec5');
    }
}

const savedTheme = safeGet('theme');
applyTheme(savedTheme === 'dark');

if (themeToggle) {
    let lastTap = 0;
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const now = Date.now();
        if (now - lastTap < 300) return;
        lastTap = now;
        const isDark = !document.body.classList.contains('dark-mode');
        applyTheme(isDark);
        safeSet('theme', isDark ? 'dark' : 'light');
    });
}

// ================= পাসওয়ার্ড দেখা/লুকানো =================
const eyeIcons = document.querySelectorAll('.eye-icon');
eyeIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
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
    });
});

// ⚠️⚠️⚠️ গুরুত্বপূর্ণ: এখানে আর Login/Loading/Redirect logic নেই ⚠️⚠️⚠️
// কারণ সেই logic এখন index.html এবং signup.html এ Firebase দিয়ে করা হচ্ছে
// এই script.js শুধু ভাষা, থিম, eye-icon এর জন্য দায়ী
