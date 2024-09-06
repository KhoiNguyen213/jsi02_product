import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore
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


const btnLogin = document.getElementById("btnLogin");
if (btnLogin) {
  btnLogin.addEventListener("click", function () {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          signOut(auth);
          throw { code: "Email not verified", message: "" };
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  });
}
divElement.forEach((items, index) => {
  items.addEventListener("click", function () {
    window.location.href = "trang.html";
    localStorage.setItem("items", JSON.stringify(products.data[index]));
  });
});