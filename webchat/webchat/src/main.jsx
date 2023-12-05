import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDad-YG8ivCMobWWTrO6ACX1GlixDQ06aY",
  authDomain: "webchat-cjjv.firebaseapp.com",
  projectId: "webchat-cjjv",
  storageBucket: "webchat-cjjv.appspot.com",
  messagingSenderId: "478019800568",
  appId: "1:478019800568:web:df7770f7163afd51095a0d",
  measurementId: "G-J5KG7LG6M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
