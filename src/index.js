import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAiT-FS6eXz3-v4vTISv4A7fBvpAy68XcA",
    authDomain: "cart-aa83e.firebaseapp.com",
    projectId: "cart-aa83e",
    storageBucket: "cart-aa83e.appspot.com",
    messagingSenderId: "262543966832",
    appId: "1:262543966832:web:ca5cfb31a6fd33a0a7aab5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

