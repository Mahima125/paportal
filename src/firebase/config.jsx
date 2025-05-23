import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVRDWrn3WRXjSroi3ZonghfMrTl03Z2sw",
    authDomain: "alumniportal-8b00e.firebaseapp.com",
    projectId: "alumniportal-8b00e",
    storageBucket: "alumniportal-8b00e.firebasestorage.app",
    messagingSenderId: "490224508719",
    appId: "1:490224508719:web:d97fdd4c7b249a84e10bda",  
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
