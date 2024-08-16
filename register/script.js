// document
//     .getElementById("register-form")
//     .addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent default form submission
//         // Get form data
//         const formData = new FormData(event.target);
//         const registrationData = {};
//         formData.forEach((value, key) => {
//             registrationData[key] = value;
//         });
//         // Retrieve existing users from localStorage or initialize an empty array
//         let users = JSON.parse(localStorage.getItem("users")) || [];
//         // Add new user to the list of users
//         users.push(registrationData);
//         // Save updated list of users to localStorage
//         localStorage.setItem("users", JSON.stringify(users));
//         // Optionally, you can redirect the user to another page after registration
//         // window.location.href = "registration-success.html";
//         // Display success message
//         alert("Registration successful! Form data saved.");
//     });
//  const signInBtnLink = document.querySelector('.SignInBtn-link')
//  const signUpBtnLink = document.querySelector('.SignUpBtn-link')
//  const wrapper = document.querySelector('.wrapper')

//  signUpBtnLink.addEventListener('click',()=>{
//     wrapper.classList.toggle('active');
//  })
//  signInBtnLink.addEventListener('click',()=>{
//     wrapper.classList.toggle('active');
//  })
function kiemtra() {
  var u = document.login.u.value;
  if ((u = false)) {
    document.getElementById("remember").innerHTML =
      "you need to sacrified your self";
    return false;
  } else {
    document.getElementById("remember").innerHTML = "you are a good person";
  }
}

// const email = document.addEventListener('email')
// console.log("email:",email)
// const password = document.addEventListener('password')
// console.log("password:",password)
// const username = document.addEventListener('username')
// console.log("username:",username)

const button = document.getElementById("button");
console.log("button:", button);

button.addEventListener("click", function () {
  createUserWith;
});
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
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
