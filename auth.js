// js/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA7HCpcNlKaGkVv4rjbYP5XYkbfTH8KXJY",
    authDomain: "sutoer-5cab5.firebaseapp.com",
    projectId: "sutoer-5cab5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ログイン用
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// アカウント作成用
export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
