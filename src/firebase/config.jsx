import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

//const firebaseConfig = {
  //  apiKey: "AIzaSyBVRDWrn3WRXjSroi3ZonghfMrTl03Z2sw",
    //authDomain: "alumniportal-8b00e.firebaseapp.com",
    //projectId: "alumniportal-8b00e",
    //storageBucket: "alumniportal-8b00e.firebasestorage.app",
    //messagingSenderId: "490224508719",
    //appId: "1:490224508719:web:d97fdd4c7b249a84e10bda",  
//};

const firebaseConfig = {
  apiKey: "AIzaSyAGLfYqVNhmNebMmo-foecja0elZbawarE",
  authDomain: "trial-a3a67.firebaseapp.com",
  projectId: "trial-a3a67",
  storageBucket: "trial-a3a67.appspot.com",
  messagingSenderId: "820580972008",
  appId: "1:820580972008:web:6ad4765eb90dd1093ca05d",
  measurementId: "G-RDNY43WQ5M"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);



export { auth, db };