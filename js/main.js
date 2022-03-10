let searchForm = document.querySelector(".search-form");
let shoppingCart = document.querySelector(".shopping-cart");
let login = document.querySelector(".login");
let menu = document.querySelector(".navbar");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  login.classList.remove("active");
  menu.classList.remove("active");
};

document.querySelector("#cart-shopping-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  login.classList.remove("active");
  menu.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  login.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  menu.classList.remove("active");
};

document.querySelector("#bars-btn").onclick = () => {
  menu.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  login.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  login.classList.remove("active");
  menu.classList.remove("active");
};

var swiper = new Swiper(".products-Swiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
