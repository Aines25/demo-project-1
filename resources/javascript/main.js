const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];
const navMenu = document.getElementsByClassName('nav-menu')[0]
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navBarLinks.classList.toggle('active');
  navMenu.classList.toggle('active');
})


const swiper = new Swiper('.swiper', {
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
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
