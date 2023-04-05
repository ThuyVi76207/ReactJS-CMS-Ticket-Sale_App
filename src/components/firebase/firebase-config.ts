// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLaj8zvaacPp2fI2nHdCSvgKPz_lVk_JM",
  authDomain: "cms-ticket-sale-app-7e61f.firebaseapp.com",
  databaseURL: "https://cms-ticket-sale-app-7e61f-default-rtdb.firebaseio.com",
  projectId: "cms-ticket-sale-app-7e61f",
  storageBucket: "cms-ticket-sale-app-7e61f.appspot.com",
  messagingSenderId: "662953000978",
  appId: "1:662953000978:web:304c1cafb6794e054318cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
