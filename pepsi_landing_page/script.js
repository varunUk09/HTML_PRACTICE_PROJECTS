const navMenuBtn = document.querySelector(".nav_open");
const nav = document.querySelector(".navigation_top");

const navCloseBtn = document.querySelector(".close_nav");

navMenuBtn.addEventListener('click',()=>{
	nav.classList.add("show_nav");
	navMenuBtn.style.display = "none";
});


function hideNav(){
	nav.classList.remove("show_nav");
	navMenuBtn.style.display = "block";
}
navCloseBtn.addEventListener('click',hideNav);

// window.addEventListener('scroll',hideNav);
