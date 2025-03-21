// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getFirestore, collection } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import AsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyAgGSGRw8hkerwDME2tISxTSPdN8EJ8gAc",
  authDomain: "mentalhealth-49738.firebaseapp.com",
  projectId: "mentalhealth-49738",
  storageBucket: "mentalhealth-49738.firebasestorage.app",
  messagingSenderId: "625291434697",
  appId: "1:625291434697:web:cad9b3727df5514bbd4b18",
  measurementId: "G-SSVXSTX54G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");

export { auth };

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
