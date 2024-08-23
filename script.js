// let products = {
//   data: [
//     {
//       name: "Quần Kaki Túi Chéo Kiểu Form Slimfit QK024 Màu Đen",
//       price: "499.000đ",
//       image2:
//         "ảnh/quan-tay-xep-li-theu-form-slimfit-crop-qt055_2_small-18346.jpg",
//     },

//     {
//       name: "Quần Kaki Túi Chéo Kiểu Form Slimfit QK024 Màu Nâu",
//       price: "372.000đ",
//       image2:
//         "ảnh/quan-kaki-tui-cheo-kieu-form-slimfit-qk024-mau-nau_2_small-18372.jpg",
//     },

//     {
//       name: "Quần Tây Trơn Form Slimfit QT058",
//       price: "961.000đ",
//       image2:
//         "ảnh/quan-kaki-tui-cheo-kieu-form-slimfit-qk024_2_small-18371.jpg",
//     },

//     {
//       name: "Áo Sơ Mi In Họa Tiết Form Regular SM144 Màu Đen",
//       price: "254.000đ",
//       image2:
//         "ảnh/ao-so-mi-soc-tay-dai-ra-phoi-form-regular-sm144-mau-do_2_small-18352.jpg",
//     },

//     {
//       name: "Áo Sơ Mi In Họa Tiết Form Regular SM144 Màu Đỏ",
//       price: "399.000đ",
//       image2:
//         "ảnh/ao-so-mi-soc-tay-dai-ra-phoi-form-regular-sm144_2_small-18351.jpg",
//     },

//     {
//       name: "Áo Sơ Mi Sọc Tay Dài Rã Phối Form Regular SM143 Sọc Xanh",
//       price: "159.000đ",
//       image2:
//         "ảnh/ao-so-mi-soc-tay-dai-ra-phoi-form-regular-sm143-soc-trang_2_small-18349.jpg",
//     },
//   ],
// };
// for (items of products.data) {
//   let card = document.createElement("div");
//   card.classList.add("card");

//   let imgContainer = document.createElement("div");
//   imgContainer.classList.add("image-container");

//   let image = document.createElement("img");
//   image.setAttribute("src", items.image2);
//   image.classList.add("image");
//   imgContainer.appendChild(image);
//   card.appendChild(imgContainer);

//   let container = document.createElement("div");
//   container.classList.add("container");

//   // let  title = document.createElement("h4")
//   // title.innerHTML = ""
//   let ten = document.createElement("h6");
//   ten.classList.add("product-name");
//   ten.innerText = items.name.toUpperCase();
//   container.appendChild(ten);

//   // let ten2 = document.createElement("br");
//   // ten2.classList.add("price");
//   // ten2.innerText = items.name.toUpperCase();
//   // ten2.appendChild(ten);

//   card.appendChild(container);
//   document.getElementById("products").appendChild(card);

//   let price = document.createElement("h5");
//   price.innerHTML = items.price;
//   container.appendChild(price);

//   // let hover = document.createElement("a");
//   // image.setAttribute("href", items.image2)
//   // hover.classList.add("hover");
//   // function addToCart() {};
//   // card.appendChild(hover);

//   let btn = document.createElement("a");
//   btn.classList.add("btn", "btn-primary");
//   btn.setAttribute("role", "button");
//   btn.setAttribute("onclick", "addToCart()");
//   btn.innerHTML = "Thêm vào giỏ hàng";
//   container.appendChild(btn);
// }
// function addToCart() {
//   alert("Đã thêm sản phẩm vào giỏ hàng");
// }

// // function Redirect() {
// //     window.location="https://viblo.asia.vn";
// //  }

const divElement = document.querySelectorAll(".card"); // Replace 'div' with the ID or class of your actual div element

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 50,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// document.getElementById("search").addEventListener("submit", (event) => {
//   let searchInput = document.getElementById("search-input").value.toUpperCase();
//   console.log(searchInput);
//   let card = document.querySelectorAll(".card");
//   let productsName = document.querySelectorAll(".product-name");
//   let prices = document.querySelectorAll("h6");
//   event.preventDefault();

//   productsName.forEach((items, index) => {
//     if (items.innerText.includes(searchInput)) {
//       card[index].classList.remove("hide");
//     } else {
//       cards[index].classList.add("hide");
//     }
//   });
// });
// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "products"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
// for (items of products.data) {
//   let card = document.createElement("div");
//   card.classList.add("card");
//   let imgContainer = document.createElement("div");
//   imgContainer.classList.add("image-container");

//   let image = document.createElement("img");
//   image.setAttribute("src", items.image2);
//   image.classList.add("image");
//   imgContainer.appendChild(image);
//   card.appendChild(imgContainer);

//   let container = document.createElement("div");
//   container.classList.add("container");

//   // let  title = document.createElement("h4")
//   // title.innerHTML = ""
//   let ten = document.createElement("h6");
//   ten.classList.add("product-name");
//   ten.innerText = items.name.toUpperCase();
//   container.appendChild(ten);

//   // let ten2 = document.createElement("br");
//   // ten2.classList.add("price");
//   // ten2.innerText = items.name.toUpperCase();
//   // ten2.appendChild(ten);

//   card.appendChild(container);
//   document.getElementById("products").appendChild(card);

//   let price = document.createElement("h5");
//   price.innerHTML = items.price;
//   container.appendChild(price);

//   // let hover = document.createElement("a");
//   // image.setAttribute("href", items.image2)
//   // hover.classList.add("hover");
//   // function addToCart() {};
//   // card.appendChild(hover);

//   let btn = document.createElement("a");
//   btn.classList.add("btn", "btn-primary");
//   btn.setAttribute("role", "button");
//   btn.setAttribute("onclick", "addToCart()");
//   btn.innerHTML = "Thêm vào giỏ hàng";
//   container.appendChild(btn);
// }
// function addToCart() {
//   alert("Đã thêm sản phẩm vào giỏ hàng");
// }

// document.getElementById("search").addEventListener("submit", (event) => {
//   let searchInput = document.getElementById("search-input").value.toUpperCase();
//   console.log(searchInput);
//   let card = document.querySelectorAll(".card");
//   let productsName = document.querySelectorAll(".product-name");
//   let prices = document.querySelectorAll("h6");
//   event.preventDefault();

//   productsName.forEach((items, index) => {
//     if (items.innerText.includes(searchInput)) {
//       card[index].classList.remove("hide");
//     } else {
//       card[index].classList.add("hide");
//     }
//   });
// });

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

// const btnLogin = document.getElementById("btnLogin");
// if (btnLogin) {
//   btnLogin.addEventListener("click", function () {
//     signInWithEmailAndPassword(auth, email.value, password.value)
//       .then(async (userCredential) => {
//         const user = userCredential.user;
//         if (!user.emailVerified) {
//           signOut(auth);
//           throw { code: "Email not verified", message: "" };
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         alert(errorCode);
//       });
//   });
// }
const querySnapshot = await getDocs(collection(db, "product"));
querySnapshot.forEach((doc) => {
  let product = doc.data();
  console.log(product);

  document.getElementById("products").innerHTML += `
   <li class="product-item">
      <div class="product-name">${product.item}</div>
      <div class="product-price">${product.price}</div>
      <img class="product-image" src="${product.image}" alt="${product.name}">
    </li>
  `;
});
let product = document.getElementById("product");
