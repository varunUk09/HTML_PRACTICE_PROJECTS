let progressEle = document.querySelector(".progress");
let indicators = document.querySelectorAll(".indicator > span");
setInterval(() => {
    let randomWidth = parseFloat(Math.random() * 100).toFixed(1);
    indicators.forEach(indicator => {
        indicator.innerText = randomWidth + "%";
    });
    progressEle.style.cssText = `--progress:${randomWidth}`;
}, 1000);