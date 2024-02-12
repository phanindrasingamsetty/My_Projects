// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxA9BvHLdvGLvZR4SJ_SI732Wi2f_AoJ4",
  authDomain: "movierecommendationhub.firebaseapp.com",
  projectId: "movierecommendationhub",
  storageBucket: "movierecommendationhub.appspot.com",
  messagingSenderId: "739293607931",
  appId: "1:739293607931:web:a87a5dbaf528887258fd5e",
  measurementId: "G-5HQN2XRRHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;