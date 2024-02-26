// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDWDzmhGu5svN_7tFV8K94u7KmiynSm40",
  authDomain: "bands-3a311.firebaseapp.com",
  projectId: "bands-3a311",
  storageBucket: "bands-3a311.appspot.com",
  messagingSenderId: "667167741539",
  appId: "1:667167741539:web:b9e928e5f95f83ed118a56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;