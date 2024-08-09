// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKwB892MCbskiRjuPf1Hbp4G9cAOUjuco",
  authDomain: "banrauxanh-9f4a2.firebaseapp.com",
  projectId: "banrauxanh-9f4a2",
  storageBucket: "banrauxanh-9f4a2.appspot.com",
  messagingSenderId: "257784397255",
  appId: "1:257784397255:web:9e5d8dc0f9bf514fef2de2",
  measurementId: "G-PBDFBNSS3Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const products = collection(db, "products");
const querySnapshot = await getDocs(products);

querySnapshot.forEach((doc) => {
  let product = doc.data();
  console.log(product);

  document.getElementById("products").innerHTML += `
<li>
<div>gia: ${product.gia}</div>
<div>When: ${product.When}</div>
</li>
`;
});
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  // const title2= document.getElementById("title").value;
  const description = document.querySelector("#description").value;

  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title,
      description,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
