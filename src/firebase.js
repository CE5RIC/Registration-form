// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVmSupCXFLOAl26XvI4m6APH9hT16yXmk",
    authDomain: "registration-form-15890.firebaseapp.com",
    databaseURL: "https://registration-form-15890-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "registration-form-15890",
    storageBucket: "registration-form-15890.appspot.com",
    messagingSenderId: "457187623537",
    appId: "1:457187623537:web:b4549a92fe73bc257fd1d0",
    measurementId: "G-ZP5XVCXYFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);