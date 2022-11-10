const navigations = document.querySelector(".navigations");
const tabs = document.querySelectorAll(".tab");

function showTab(index) {
    tabs.forEach((tab, tabIndex) => {
        if (tabIndex === index) {
            tab.style.cssText = `height:auto;opacity:1;z-index: 999;`;
        } else {
            tab.style.cssText = ` height:0;opacity:0;z-index:0;`;
        }
    })
}

navigations.addEventListener("click", (e) => {
    if (e.target.classList.contains("navigation-1")) {
        showTab(0)
    } else if (e.target.classList.contains("navigation-2")) {
        showTab(1)
    } else if (e.target.classList.contains("navigation-3")) {
        showTab(2)
    }
})