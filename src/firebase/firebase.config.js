// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ6n_Z0WEiVV4POdmYrdqSToGr_M75J0M",
  authDomain: "abdul-aziz-booking.firebaseapp.com",
  projectId: "abdul-aziz-booking",
  storageBucket: "abdul-aziz-booking.appspot.com",
  messagingSenderId: "946236317024",
  appId: "1:946236317024:web:d542baadc9d6836332d205",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
