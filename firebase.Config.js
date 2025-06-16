// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBpt5pf8Oj-txZY_uG6140Iz9V12oqubNo",
  authDomain: "my-project-71d9f.firebaseapp.com",
  projectId: "my-project-71d9f",
  storageBucket: "my-project-71d9f.firebasestorage.app",
  messagingSenderId: "521698344317",
  appId: "1:521698344317:web:7913cdacc1433d36d2a014",
  measurementId: "G-05XT9TB0JC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
 

export { auth }; 
