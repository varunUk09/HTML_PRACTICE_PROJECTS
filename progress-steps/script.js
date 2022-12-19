const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const circles = document.querySelectorAll(".circles");
const progressContainer = document.querySelector(".progress-container");
let activeStep = 1;
nextBtn.addEventListener("click",function(){
  activeStep++;
  if(activeStep <= circles.length){
    circles[activeStep - 1].classList.add("active");
  } 
  if(activeStep === circles.length){
    this.setAttribute("disabled",true);
    prevBtn.removeAttribute("disabled");
  }
  updateLine();
});

prevBtn.addEventListener("click",function(){
  
  activeStep--;
  if(activeStep > 0){
    circles[activeStep].classList.remove("active");
  } 
  if(activeStep === 1){
    this.setAttribute("disabled",true);
    nextBtn.removeAttribute("disabled");
  }
  updateLine();
});

function updateLine(){
  let perCentage = (activeStep-1)/(circles.length - 1);
  progressContainer.style.setProperty("--progress-width",perCentage);
}