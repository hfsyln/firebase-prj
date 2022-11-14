// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD79uIxvO81y7xfktuBXTGh5RA-HeoIugc",
  authDomain: "fir-prj-8cbe3.firebaseapp.com",
  databaseURL: "https://fir-prj-8cbe3-default-rtdb.firebaseio.com",
  projectId: "fir-prj-8cbe3",
  storageBucket: "fir-prj-8cbe3.appspot.com",
  messagingSenderId: "804023367238",
  appId: "1:804023367238:web:02a54127fd2eaf642efc47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase;
