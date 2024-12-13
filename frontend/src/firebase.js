import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG0jWij-aqSSe1tGFoODkQfVicBLksbTQ",
  authDomain: "pareeksha-d3a71.firebaseapp.com",
  projectId: "pareeksha-d3a71",
  storageBucket: "pareeksha-d3a71.firebasestorage.app",
  messagingSenderId: "964464119176",
  appId: "1:964464119176:web:c96367936c74340bf3fe3d",
  measurementId: "G-FXJWFBTKX1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };