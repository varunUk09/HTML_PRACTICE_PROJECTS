const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const circles = document.querySelectorAll(".circles");
const progressContainer = document.querySelector(".progress-container");
let activeStep = 1;
let direction;
let crrEle;
nextBtn.addEventListener("click",function(){
  crrEle = crrEle || document.querySelector(".current-step.active");
  direction = direction || "FRONT";
  move();
});

prevBtn.addEventListener("click",function(){
  crrEle = crrEle || document.querySelector(".current-step.active");
  direction = direction || "BACK";
  move();
});

function move(){
  moveStep(crrEle,direction);
  disableBtn();
  updateLine();
  crrEle = null;
  direction = null;
}

function moveStep(crrele,direction){
  if(direction == "BACK"){
      let prevStep = crrEle.previousElementSibling ||              document.querySelector(".current-step.active:first-child");
      prevStep.classList.add("current-step");
      prevStep.nextElementSibling.classList.remove("active");
      activeStep = Math.floor(prevStep.getAttribute("data-step")); 
  } else {
    let nextStep = crrEle.nextElementSibling ||              document.querySelector(".current-step.active:last-child");
        // transfer current step to the next element (nextStep)
        nextStep.previousElementSibling.classList.remove("current-step");
          nextStep.classList.add("active","current-step");
        activeStep = Math.floor(nextStep.getAttribute("data-step"));
  }
}

// function for disabling a button
function disableBtn(){
  if(activeStep === circles.length){
    nextBtn.setAttribute("disabled",true);
    prevBtn.removeAttribute("disabled");
  } else if (activeStep === 1){
    prevBtn.setAttribute("disabled",true);
    nextBtn.removeAttribute("disabled");
  } else {
    prevBtn.removeAttribute("disabled");
    nextBtn.removeAttribute("disabled");
  }
}

function updateLine(){
  let perCentage = (activeStep-1)/(circles.length - 1);
  progressContainer.style.setProperty("--progress-width",perCentage);
}

// adding step click feature
circles.forEach(circle=>{
  circle.addEventListener("click",function(){
    activeStep = Math.floor(this.getAttribute("data-step"));
    document.querySelector(".current-step").classList.remove("current-step");
    circles.forEach((circle,i)=>{
      if(i < activeStep){
        circle.classList.add("active");
        if(circle === this) circle.classList.add("current-step");
      } else if (i >= activeStep){
        if(circle.classList.contains("active")) circle.classList.remove("active");
      }
      
    });
    updateLine();
    disableBtn();
  });
});