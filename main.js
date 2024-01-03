const navBar = document.querySelector(".nav-bar")
const menuBtn = document.querySelector(".menu-btn")
const gridImgbox = document.querySelectorAll(".section-2-img")
const gridImgText = document.querySelectorAll(".section-2-text")

menuBtn.addEventListener("click", ()=>{
    navBar.classList.toggle("active")
    if(navBar.classList.contains("active")){
     menuBtn.src = "./images/icon-close.svg"

    }else{
     menuBtn.src = "./images/icon-hamburger.svg"

    }
})

