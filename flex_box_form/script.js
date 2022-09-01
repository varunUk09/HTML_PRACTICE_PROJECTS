const form = document.getElementById("login-form");
const msgBox = document.getElementById("msg-box");
let homePage = window.location.href;
const emailValidtionRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const errCss = "display:flex;border-color:#8b0000;color:#8b0000;background-color:#ff9494;"
const successCss = "display:flex;border-color:green;color:green;background-color:lightgreen;"


form.addEventListener('submit',function(e){
	e.preventDefault();
	const uName = document.getElementById("username");
	const email = document.getElementById("email");
	const pass = document.getElementById("password");

	

	//  validation
	if(uName.value == ""){
		uName.focus();
		msgBox.style.cssText = errCss;
		msgBox.innerHTML = "Enter Your Username";   
	} else if(email.value == ""){
		email.focus();
		msgBox.style.cssText =errCss;
		msgBox.innerHTML = "Enter Your Email";
	} else if(pass.value == ""){
		pass.focus();
		msgBox.style.cssText = errCss;
		msgBox.innerHTML = "Enter Your Password";
	} else if (!email.value.match(emailValidtionRegex)){
		msgBox.style.cssText = errCss;
		msgBox.innerHTML = "Email Format Incorrect";
	} else{ // if validated
		msgBox.style.cssText = successCss;
		msgBox.innerHTML = "Logged In Redirecting in 3s...";
		// form.reset.click();
		form.style.display = "none";
		setTimeout(() =>{
			window.location.href = homePage;
		},3000);
	}
})