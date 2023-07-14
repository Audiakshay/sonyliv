// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUui4e6bzVjKXc9UuhwO_anvtprhmwJ9Y",
  authDomain: "sonyliv-c2608.firebaseapp.com",
  projectId: "sonyliv-c2608",
  storageBucket: "sonyliv-c2608.appspot.com",
  messagingSenderId: "612209035187",
  appId: "1:612209035187:web:d7b325061d833ce18b6dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);