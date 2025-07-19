import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJPyLRkGXd6Bw1vZTIcAqMtVOGS6dvIMw",
  authDomain: "roadmate-abihack-225-v1.firebaseapp.com",
  projectId: "roadmate-abihack-225-v1",
  storageBucket: "roadmate-abihack-225-v1.firebasestorage.app",
  messagingSenderId: "62865372490",
  appId: "1:62865372490:web:be93c42be1a2d08395fdb3",
  measurementId: "G-7YVJ6YPK29",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
