import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVWdLJVQWXIa2KwRthDlIsOJGdtGX7f98",
  authDomain: "alertasegura-98538.firebaseapp.com",
  projectId: "alertasegura-98538",
  storageBucket: "alertasegura-98538.appspot.com",
  messagingSenderId: "683102518470",
  appId: "1:683102518470:web:1d93d2f3228558e0adebc7",
  measurementId: "G-Z7G0LQPRSS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
