document.querySelector("#rating-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let rated = "none";

    document.querySelectorAll("input[name='rating-radio']").forEach((radioBtn) => {
        if (radioBtn.checked) { rated = radioBtn.value }
    });

    document.querySelector(".feedback-state").style.display = "none";
    document.querySelector(".feedback-msg").textContent = document.querySelector(".feedback-msg").textContent.replace("rated", rated);
    document.querySelector(".thanku-state").style.display = "block";
});


// logic for deselecting radio button
let clickedTimes = 0;
document.querySelectorAll("form input[name='rating-radio']").forEach((ratingRadioBtn) => {
    ratingRadioBtn.addEventListener('click', function() {
    	if(this.checked == true && clickedTimes == 1){
    		this.checked = false;
    		clickedTimes = 0;
    	} else {
    		clickedTimes = 1;
    	}
    });
});