const form = document.getElementById("login-form");
const msgBox = document.getElementById("msg-box");
let homePage = window.location.href;
const emailValidtionRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const errCss = "display:flex;border-color:white;color:white;background-color:red;"
const wrnCss = "display:flex;border-color:white;color:black;background-color:yellow;"
const successCss = "display:flex;border-color:white;color:white;background-color:green;"


form.addEventListener('submit',function(e){
	e.preventDefault();
	const uName = document.getElementById("username");
	const email = document.getElementById("email");
	const pass = document.getElementById("password");

	function validate(e){
		if(e.field){
			e.field.focus();			
		}
		msgBox.style.cssText = e.msgBoxCss;
		msgBox.innerHTML = e.msg;
	}

//  validation
	if(uName.value == ""){
		validate({field:uName,msg:'Enter Your Username',msgBoxCss:errCss})
	} else if(email.value == ""){
		validate({field:email,msg:'Enter Your Email',msgBoxCss:errCss})
	} else if(pass.value == ""){
		validate({field:pass,msg:'Enter Your Password',msgBoxCss:errCss})
	} else if (!email.value.match(emailValidtionRegex)){
		validate({field:email,msg:'Enter Format Incorrect',msgBoxCss:wrnCss})
	}
	else{ // if validated
		validate({msg:'Logged In Redirecting in 3s...',msgBoxCss:successCss})
		form.style.display = "none";
		setTimeout(() =>{
			window.location.href = homePage;
		},3000);
	}
});