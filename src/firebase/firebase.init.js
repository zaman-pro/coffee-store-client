// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCopyOFsxu9g_YMS5uZNLMH0AQgTQhOXCY",
  authDomain: "coffee-store-app-964a6.firebaseapp.com",
  projectId: "coffee-store-app-964a6",
  storageBucket: "coffee-store-app-964a6.firebasestorage.app",
  messagingSenderId: "823807703393",
  appId: "1:823807703393:web:5751ef3d8c3c85d058ed20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
