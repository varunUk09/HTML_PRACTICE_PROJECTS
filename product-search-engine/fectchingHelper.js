// storing data here as an object
let products = [];

// getting data from amazon.in search result page
function getData(query) {
    let targets = document.querySelectorAll("span[data-component-type=s-search-results] div.s-result-item:not(.s-widget):has(.a-price:nth-of-type(1) .a-offscreen)");

    if (targets.length > 0) {
        targets.forEach((searchItem) => {
            let imgSrc = searchItem.querySelector(".s-image").src;
            let productName = searchItem.querySelector("div:has(>h2) h2").textContent;

            let productPrice = searchItem.querySelector(".a-price:nth-of-type(1) .a-offscreen").textContent;

            products.unshift({
                "name": productName,
                "price": productPrice,
                "img": imgSrc,
            });

        });
    } else {
        console.log("no products found!!")
    }
}

// downloading data as a file
function downloadData(products) {
    let tempEle = document.createElement("div");
    tempEle.textContent = JSON.stringify(products);
    let downloadBtn = document.createElement("a");

    downloadBtn.href = 'data:attachment/json,' + encodeURI(tempEle.textContent);
    downloadBtn.target = '_blank';
    downloadBtn.download = 'products.json'; //file name
    downloadBtn.click();
}

// you don't need to search and refresh the page with this function

function getDataDynamically(query) {
    // fecthing data from amazon.in

    const URL = `https://www.amazon.in/s?k=${query}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL);

    xhr.onload = () => {
        if (xhr.status == 200) {
            let html = xhr.responseText;
            let ele = document.createElement("div");
            ele.innerHTML = html;
            let targets = ele.querySelectorAll("span[data-component-type=s-search-results] div.s-result-item:not(.s-widget):has(.a-price:nth-of-type(1) .a-offscreen)");

            if (targets.length > 0) {
                targets.forEach((searchItem) => {
                    let imgSrc = searchItem.querySelector(".s-image").src;
                    let productName = searchItem.querySelector("div:has(>h2) h2").textContent;

                    let productPrice = searchItem.querySelector(".a-price:nth-of-type(1) .a-offscreen").textContent;

                    products.unshift({
                        "name": productName,
                        "price": productPrice,
                        "img": imgSrc,
                    });

                });
            } else {
                console.log("no products found!!")
            }

        } else {
            console.log("Something went wrong!!!");
        }
    }

    xhr.send();
}