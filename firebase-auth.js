// ================= Firebase Configuration =================
const firebaseConfig = {
    apiKey: "AIzaSyBEMu27vf32QL6MfOAUzqWMxvO6ulCr37M",
    authDomain: "umall247.firebaseapp.com",
    projectId: "umall247",
    storageBucket: "umall247.firebasestorage.app",
    messagingSenderId: "342982332516",
    appId: "1:342982332516:web:f014384cd622a5ca734f71",
    measurementId: "G-89F7W2FMKY"
};

// ================= Initialize Firebase =================
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

// ✅ Persistence সেট করুন (রিফ্রেশ করলেও লগইন থাকবে)
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(function(err) {
    console.log('Persistence error:', err);
});

// ================= Safe localStorage =================
function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
}
function safeRemove(key) {
    try { localStorage.removeItem(key); } catch (e) {}
}

// ================= Refer Code Generate =================
function generateReferCode(name) {
    const prefix = (name || "USER").replace(/\s+/g, "").substring(0, 3).toUpperCase();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return prefix + randomNum;
}

// ================= URL থেকে refer code =================
function getReferCodeFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('ref');
}

// ================= Signup =================
async function signupUser(fullName, email, password, referCodeInput) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        const myReferCode = generateReferCode(fullName);
        const urlReferCode = getReferCodeFromURL();
        const referrerCode = urlReferCode || referCodeInput || "";

        let referrerUID = "";

        if (referrerCode) {
            try {
                const referrerQuery = await db.collection('users')
                    .where('myReferCode', '==', referrerCode)
                    .limit(1)
                    .get();

                if (!referrerQuery.empty) {
                    const referrerDoc = referrerQuery.docs[0];
                    referrerUID = referrerDoc.id;
                    const referrerData = referrerDoc.data();

                    const newBalance = (referrerData.balance || 0) + 5;
                    await db.collection('users').doc(referrerUID).update({
                        balance: newBalance,
                        referralCount: (referrerData.referralCount || 0) + 1
                    });

                    await db.collection('transactions').add({
                        uid: referrerUID,
                        type: 'referral_bonus',
                        amount: 5,
                        status: 'completed',
                        note: `Referral bonus from ${fullName}`,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                }
            } catch (err) {
                console.log('Referrer check failed:', err);
            }
        }

        await db.collection('users').doc(user.uid).set({
            uid: user.uid,
            fullName: fullName,
            email: email,
            myReferCode: myReferCode,
            referredBy: referrerCode || "",
            referrerUID: referrerUID || "",
            balance: 0,
            referralCount: 0,
            vip: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        safeSet('uid', user.uid);
        safeSet('email', email);
        safeSet('fullName', fullName);
        safeSet('myReferCode', myReferCode);

        return { success: true, user: user, referCode: myReferCode };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// ================= Login =================
async function loginUser(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // ✅ Firestore থেকে data আনুন (optional)
        try {
            const userDoc = await db.collection('users').doc(user.uid).get();
            if (userDoc.exists) {
                const data = userDoc.data();
                safeSet('uid', user.uid);
                safeSet('email', data.email || '');
                safeSet('fullName', data.fullName || '');
                safeSet('myReferCode', data.myReferCode || '');
                safeSet('balance', data.balance || 0);
            }
        } catch (err) {
            console.log('Firestore fetch skipped:', err);
        }

        return { success: true, user: user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// ================= Logout =================
async function logoutUser() {
    try {
        await auth.signOut();
        safeRemove('uid');
        safeRemove('email');
        safeRemove('fullName');
        safeRemove('myReferCode');
        safeRemove('balance');
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// ================= ✅ Auth Ready Check (সবচেয়ে গুরুত্বপূর্ণ) =================
function waitForAuthReady(callback) {
    let resolved = false;

    const unsubscribe = auth.onAuthStateChanged(function(user) {
        if (resolved) return;
        resolved = true;
        unsubscribe();

        if (user) {
            callback(true, user);
        } else {
            // Firebase একবার null দেয় initial state এ
            // ৫০০ms অপেক্ষা করে আবার check করুন
            setTimeout(function() {
                const currentUser = auth.currentUser;
                if (currentUser) {
                    callback(true, currentUser);
                } else {
                    callback(false, null);
                }
            }, 500);
        }
    });

    // ৩ সেকেন্ড পর জোর করে check (fallback)
    setTimeout(function() {
        if (!resolved) {
            resolved = true;
            unsubscribe();
            const currentUser = auth.currentUser;
            callback(currentUser ? true : false, currentUser);
        }
    }, 3000);
}

// ================= onAuthChange (backward compatibility) =================
function onAuthChange(callback) {
    return auth.onAuthStateChanged(function(user) {
        callback(user ? true : false, user);
    });
}

// ================= Error Translator =================
function translateFirebaseError(errorMsg) {
    if (!errorMsg) return 'Something went wrong. Please try again.';
    if (errorMsg.includes('email-already-in-use')) return 'This email is already registered.';
    if (errorMsg.includes('weak-password')) return 'Password is too weak (min 6 characters).';
    if (errorMsg.includes('invalid-email')) return 'Invalid email address.';
    if (errorMsg.includes('user-not-found')) return 'No account found with this email.';
    if (errorMsg.includes('wrong-password')) return 'Incorrect password.';
    if (errorMsg.includes('invalid-credential')) return 'Invalid email or password.';
    if (errorMsg.includes('too-many-requests')) return 'Too many attempts. Try again later.';
    if (errorMsg.includes('network-request-failed')) return 'Network error. Check your connection.';
    if (errorMsg.includes('permission-denied')) return 'Permission denied. Check Firestore rules.';
    return 'Something went wrong. Please try again.';
}

// ================= Get User Data =================
async function getUserData(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            return { success: true, data: doc.data() };
        }
        return { success: false, error: 'User not found' };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// ================= Referral Link =================
function getReferralLink(referCode) {
    const baseUrl = window.location.origin + window.location.pathname;
    const signupPath = baseUrl.replace(/[^/]*$/, 'signup.html');
    return `${signupPath}?ref=${referCode}`;
}
