// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr_i20jucUreV0GOerJUUUIxFcYiqL5go",
  authDomain: "abet-bef58.firebaseapp.com",
  projectId: "abet-bef58",
  storageBucket: "abet-bef58.appspot.com",
  messagingSenderId: "414867589115",
  appId: "1:414867589115:web:71bdcd231b47cde9ffed5e",
  measurementId: "G-6B1SL9CCFE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

console.log(app);
