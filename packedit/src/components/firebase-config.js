import { initializeApp } from "firebase/app";
//initializeApp is the func we call that creates the connection
//it takes a firebaseConfig obj
import { getFirestore } from "@firebase/firestore";

//make apiKey a .env variable
const firebaseConfig = {
  apiKey: "AIzaSyBJcTlA2jIc3WWEzKBy1KgF8hB2EpExBxc",
  authDomain: "cfg-packedit.firebaseapp.com",
  projectId: "cfg-packedit",
  storageBucket: "cfg-packedit.appspot.com",
  messagingSenderId: "432460860440",
  appId: "1:432460860440:web:52a72ebf4984a4c2e7476d",
  measurementId: "G-ZZ16JMWPLM",
};

//initialize firebase connection
const app = initializeApp(firebaseConfig);
//populate db with info from firestore from app
export const db = getFirestore(app);
