import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCd9BxM1r4CYhU5cbkf6DtZECghdKR1RI8",
  authDomain: "tarefasplus-dad94.firebaseapp.com",
  projectId: "tarefasplus-dad94",
  storageBucket: "tarefasplus-dad94.appspot.com",
  messagingSenderId: "976974740429",
  appId: "1:976974740429:web:2d44cc6c05a7697b582284"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export {db};