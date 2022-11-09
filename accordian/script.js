const radioBtns = document.querySelectorAll("input[name='accordian-radio']");

let checkedBtn = null;

radioBtns.forEach(radio=>{
	radio.addEventListener("click",(e)=>{
		if(checkedBtn === radio){
			radio.checked = false;
			checkedBtn = null;
		} else {
			checkedBtn = radio;
		}
	});
});