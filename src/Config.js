// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-2c1O2ViOY5oV5Mc1em1wcG0cgRQ1GSk",
  authDomain: "auth-routing-dcfae.firebaseapp.com",
  projectId: "auth-routing-dcfae",
  storageBucket: "auth-routing-dcfae.appspot.com",
  messagingSenderId: "396286216075",
  appId: "1:396286216075:web:e485b250673fbfcc3d118e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;