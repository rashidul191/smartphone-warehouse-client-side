// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeAkdJ6ke4Cw7mC_N_8YmP7P5fZKST5Pg",
  authDomain: "smartphone-warehouse-91a9a.firebaseapp.com",
  projectId: "smartphone-warehouse-91a9a",
  storageBucket: "smartphone-warehouse-91a9a.appspot.com",
  messagingSenderId: "485707141628",
  appId: "1:485707141628:web:0668531bc4e4f6ba06e279",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
