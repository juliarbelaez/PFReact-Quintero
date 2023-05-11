// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADLMnrjYtrXO1cPc2iXaW1UQdfkNObNbM",
  authDomain: "ceramicascarmesi.firebaseapp.com",
  projectId: "ceramicascarmesi",
  storageBucket: "ceramicascarmesi.appspot.com",
  messagingSenderId: "336385621689",
  appId: "1:336385621689:web:b8e46b5ccee4164ef7a568",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
