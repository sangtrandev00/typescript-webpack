// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

// Your web app's Firebase configuration

interface firebaseInterface {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

const firebaseConfig: firebaseInterface = {
  apiKey: "AIzaSyAQu1QX1YcKnSAzQLWBP3NG7COhDRYk4xc",
  authDomain: "fullstack-es6.firebaseapp.com",
  projectId: "fullstack-es6",
  storageBucket: "fullstack-es6.appspot.com",
  messagingSenderId: "76434327595",
  appId: "1:76434327595:web:38b16adcf169baa860026e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
export const db = getFirestore(app);
export const auth = getAuth(app);
