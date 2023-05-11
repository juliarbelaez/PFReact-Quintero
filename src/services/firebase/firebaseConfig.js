import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyADLMnrjYtrXO1cPc2iXaW1UQdfkNObNbM",
  authDomain: "ceramicascarmesi.firebaseapp.com",
  projectId: "ceramicascarmesi",
  storageBucket: "ceramicascarmesi.appspot.com",
  messagingSenderId: "336385621689",
  appId: "1:336385621689:web:b8e46b5ccee4164ef7a568",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
