import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-TSzxZ623jHHQLCHOlRfhId2t-pKV9Jo",
  authDomain: "sekolah-tunas-teladan.firebaseapp.com",
  projectId: "sekolah-tunas-teladan",
  storageBucket: "sekolah-tunas-teladan.firebasestorage.app",
  messagingSenderId: "984808623035",
  appId: "1:984808623035:web:a24b958090e58f1108929e",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);