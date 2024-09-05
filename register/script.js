import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const db = getFirestore(app);

const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");

const btnRegister = document.getElementById("btnRegister");

if (btnRegister) {
  btnRegister.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        await sendEmailVerification(user);
        await updateProfile(auth.currentUser, {
          displayName: username.value,
        });
        await signOut(auth);
        alert("Please verify your email");
        location.href = "./login.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode);
      });
  });
}
