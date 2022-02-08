// Import the functions you need from the SDKs you need
import *  as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmRuA5JACtOClySzhBu9ssAfb_zPEXv0c",
  authDomain: "ms-pudding-auth.firebaseapp.com",
  projectId: "ms-pudding-auth",
  storageBucket: "ms-pudding-auth.appspot.com",
  messagingSenderId: "267224446925",
  appId: "1:267224446925:web:076c37686b219dda0db684",
  measurementId: "G-RXBJNVJZKP"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth();
export { auth }