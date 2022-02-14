burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
leftNav = document.querySelector(".leftNav")
rightNav = document.querySelector(".rightNav")

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    leftNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})