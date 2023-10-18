import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAngItLvgYOost7GDgAgZUF2ti0L08d1QQ",
  authDomain: "assingment-10-5f4a3.firebaseapp.com",
  projectId: "assingment-10-5f4a3",
  storageBucket: "assingment-10-5f4a3.appspot.com",
  messagingSenderId: "603070254350",
  appId: "1:603070254350:web:6e2265e75f25df0c381b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth