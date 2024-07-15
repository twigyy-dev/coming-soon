
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyBQqQT1DWdvWPFXjEEY6n630lpBNoB6FuM",
    authDomain: "coming-soon-f7012.firebaseapp.com",
    projectId: "coming-soon-f7012",
    storageBucket: "coming-soon-f7012.appspot.com",
    messagingSenderId: "334349493332",
    appId: "1:334349493332:web:d175140c3f06b034e8b9c1"
});

const db = getFirestore(app);

const userStore = collection(db, 'emails')

export {userStore}