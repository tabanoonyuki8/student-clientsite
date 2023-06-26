// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.REACT_APP_apiKey,
//     authDomain: import.meta.env.REACT_APP_authDomain,
//     projectId: import.meta.env.REACT_APP_projectId,
//     storageBucket: import.meta.env.REACT_APP_storageBucket,
//     messagingSenderId: import.meta.env.REACT_APP_messagingSenderId,
//     appId: import.meta.env.REACT_APP_appId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyDcLVaHAzGwKTIBfveoZbe6FXOcTnjR7-c",
  authDomain: "student-8e0b8.firebaseapp.com",
  projectId: "student-8e0b8",
  storageBucket: "student-8e0b8.appspot.com",
  messagingSenderId: "1002733331799",
  appId: "1:1002733331799:web:1e86c64fa4afbd5dbdca12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;