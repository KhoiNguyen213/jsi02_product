const email = document.addEventListener("email");
console.log("email:", email);
const password = document.addEventListener("password");
console.log("password:", password);
const username = document.addEventListener("username");
console.log("username:", username);

const button = document.getElementById("button");
console.log("button:", button);
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
const auth = getAuth(app);

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
        console.log(errorCode, errorMessage);
        alert(errorCode);
      });
  });
}
