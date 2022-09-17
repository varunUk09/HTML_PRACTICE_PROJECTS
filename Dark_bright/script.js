const btn = document.querySelector(".toggle__btn");
//const themeName = ['Go Bright','Go Dark']
let darkMode = false;
function toggleDark(){
	if(!darkMode){
		document.querySelector("body").classList.add("dark__theme");
		btn.classList.add("toggle__btn--dark");
		btn.textContent = "Go Bright";
		darkMode = true;
	} else {
		document.querySelector("body").classList.remove("dark__theme");
		btn.classList.remove("toggle__btn--dark");
		darkMode = false;
		btn.textContent = "Go Dark";
	}
}

btn.addEventListener("click",toggleDark);