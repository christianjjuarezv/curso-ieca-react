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
  apiKey: "AIzaSyBUNpmnl6523Hh7NPJjyL-bar2UisFJPyc",
  authDomain: "fakestore-cjjv.firebaseapp.com",
  projectId: "fakestore-cjjv",
  storageBucket: "fakestore-cjjv.appspot.com",
  messagingSenderId: "423907170620",
  appId: "1:423907170620:web:b0c380a1edb00732be2639",
  measurementId: "G-K2N7VZYS1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db = getFirestore(app);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
