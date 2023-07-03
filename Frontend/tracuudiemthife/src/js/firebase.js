// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyDQTaJ2FoGGOESJ0K48l_opuNe_AKaUzZ8",
  authDomain: "tracuudiemthi-f7f9b.firebaseapp.com",
  databaseURL:
    "https://tracuudiemthi-f7f9b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tracuudiemthi-f7f9b",
  storageBucket: "tracuudiemthi-f7f9b.appspot.com",
  messagingSenderId: "355322038575",
  appId: "1:355322038575:web:28da4f097d01914fcdf9da",
  measurementId: "G-RTE2TSLNZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
