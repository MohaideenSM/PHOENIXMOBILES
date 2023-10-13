// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore } from "firebase/firestore";
import { ref, set, getDatabase } from "firebase/database";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBcEvLiiN7yjr0QS2_i0lv_IzTrb6wJZc",
  authDomain: "phoenix-224ad.firebaseapp.com",
  projectId: "phoenix-224ad",
  storageBucket: "phoenix-224ad.appspot.com",
  messagingSenderId: "782529923051",
  appId: "1:782529923051:web:f05ceae05b4f06ae8b7bae",
  measurementId: "G-G4WRF5F4B1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "users");
const userDoc = doc(usersCollection);

export const addDatatoDB = async () => {
  console.log("addDatatoDB");
  await setDoc(userDoc, { name: "Sathish" });
};
// export const getDataFromDB = async () => {
//   console.log("getDataFromDB");
//   const querySnapshot = await getDocs(usersCollection);
//   const data = [];
//   querySnapshot.forEach((docSnapshot) => {
//     data?.push(docSnapshot.data());
//     console.log("Document data:", data);
//     return data;
//   });
// };
export const getDataFromDB = async () => {
  console.log("getDataFromDB");
  try {
    const querySnapshot = await getDocs(usersCollection);
    console.log("QuerySnapshot:", querySnapshot.docs); // Log the querySnapshot for debugging
    const data = [];
    querySnapshot.forEach((docSnapshot) => {
      data.push(docSnapshot.data());
    });
    console.log("Document data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    throw error; // Propagate the error further if needed
  }
};
