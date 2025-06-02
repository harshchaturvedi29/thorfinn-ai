import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7wdRqs6iMF1P80WOiBn670YVS83MFBAo",
  authDomain: "thorfin-ai.firebaseapp.com",
  projectId: "thorfin-ai",
  storageBucket: "thorfin-ai.firebasestorage.app",
  messagingSenderId: "938500481552",
  appId: "1:938500481552:web:cd0af4ec622704e207a095",
  measurementId: "G-R48YG4QV5E"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

// Only initialize analytics in the browser
let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
export { analytics };