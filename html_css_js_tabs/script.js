const navigations = document.querySelector(".navigations");
const tabs = document.querySelectorAll(".tab");

function showTab(index) {
    tabs.forEach((tab, tabIndex) => {
        if (tabIndex === index) {
            tab.style.cssText = `display:block;border: 0.3rem solid var(--secondary-clr);`;
        } else {
            tab.style.cssText = `display:none;border:none;`;
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