import { data }  from './data.js';
let id = 0;
for (const key in data) {
    if (data.hasOwnProperty(key)) {
        let heading = data[key].tag;
        let code = data[key].code;
        let desc = data[key].desc;
        document.querySelector(".codes-list").insertAdjacentHTML("beforeend", `<li class="codes-list-item" id="code-snippet-${id}"><h2 class="tagline"></h2><code class="code"></code><pre class="desc"></pre></li>`);
        document.querySelector(`#code-snippet-${id} .tagline`).innerText = heading;
        document.querySelector(`#code-snippet-${id} .code`).innerText = code;
        document.querySelector(`#code-snippet-${id} .desc`).innerText = desc;
        document.querySelector(`#code-snippet-${id} .desc`).setAttribute("data-tag", key);
        id += 1;
    }
}

addCopyToClick();

document.querySelector(".search-group").addEventListener("submit", (e) => {
    e.preventDefault();
});

document.querySelector(".search-box").addEventListener("input", function () {
    let query = this.value;
    filter(query)
});

function filter(query) {
    document.querySelectorAll(".desc").forEach(desc => {
        if (desc.getAttribute("data-tag").toUpperCase().indexOf(query.toUpperCase()) == -1) {
            desc.parentElement.classList.add("hide-it");
        } else {
            desc.parentElement.classList.remove("hide-it");
            if (query.trim() !== "") {
                desc.parentElement.classList.add("filter-match");
            } else {
                desc.parentElement.classList.remove("filter-match");
            }
        }
    });
}

function addCopyToClick() {
    document.querySelectorAll(".code").forEach(code => {
        code.addEventListener("click", function () {
            const el = document.createElement('textarea');
            el.value = this.innerText;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            this.style.cssText = `--code-text:"copied"`;
            setTimeout(() => {
                this.style.cssText = `--code-text:"copy"`;
            }, 3000);
            document.body.removeChild(el);
        });
    });
}

document.querySelector("span#goToTop").addEventListener("click",goToTop);

function goToTop() {
    document.querySelector(".codes-list-item:nth-child(1)").scrollIntoView({
        behavior: "smooth",
    });
}