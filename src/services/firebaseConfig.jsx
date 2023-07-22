import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC7RuLJ6_c9hNtfAb3O5LOxUzjt0UEgTMQ",
  authDomain: "entregafinalestefan.firebaseapp.com",
  projectId: "entregafinalestefan",
  storageBucket: "entregafinalestefan.appspot.com",
  messagingSenderId: "178225286221",
  appId: "1:178225286221:web:e33c1aa53c4087d8d0e004"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)