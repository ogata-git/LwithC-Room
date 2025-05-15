import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyByWMCpOC60Jhp3_bmusfs7ELbm5hYhnEI",
  authDomain: "news-system-lwithc.firebaseapp.com",
  projectId: "news-system-lwithc",
  storageBucket: "news-system-lwithc.firebasestorage.app",
  messagingSenderId: "91135497386",
  appId: "1:91135497386:web:f1f8812dd11cbb05a22cd3"
};

// 初期化
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
