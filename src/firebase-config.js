import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-dww-MRqo-7pV0aC59ecU2foCu9h7oZw",
  authDomain: "chatapp-dd6c8.firebaseapp.com",
  projectId: "chatapp-dd6c8",
  storageBucket: "chatapp-dd6c8.appspot.com",
  messagingSenderId: "177044481210",
  appId: "1:177044481210:web:5f20b0cb245168dddf4e83",
  measurementId: "G-RP9Y0VE83M",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
