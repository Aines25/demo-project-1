const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}));

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,
    allowSlideNext: true,
    slidesPerView: 1,
    spaceBetween: 10,
    watchOverflow: true,
    autoplay: {
        delay: 3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const message = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, ipsa?"] 
const speed = 100
let textPosition = 0;

function typewriter() {
    document.querySelector("#message").innerHTML = message[0].substring(0, textPosition)
   
}

function typewriter() {
    document.querySelector("#message").innerHTML = message[0].substring(0, textPosition)
    if(textPosition++ != message[0].length)
      setTimeout(typewriter, speed)
}
  
window.addEventListener("load", typewriter)
