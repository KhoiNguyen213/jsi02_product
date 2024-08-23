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
