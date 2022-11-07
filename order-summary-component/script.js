const planType = document.querySelector(".billing-info .billing .plan-type");

const price = document.querySelector(".billing-info .billing .pricing");

document.querySelector(".billing-info .plan-change-cta").addEventListener("click",(e)=>{
    e.preventDefault();



    if(planType.textContent == "Monthly Plan"){
        planType.textContent = "Annual Plan";
        price.innerHTML = "&dollar;59.99/year";
    } else if (planType.textContent == "Annual Plan"){
        planType.textContent = "Monthly Plan";
        price.innerHTML = "&dollar;4.99/month";
    }
    
});