// exporting products.json file
let products;
const xhr = new XMLHttpRequest();
xhr.open("GET","./products.json");
xhr.onload = ()=>{
    if(xhr.status == 200){
        products = JSON.parse(xhr.response).products;
        putData();
    }
}
xhr.send();


//===========================logic===========================//

/***first checking for input(search box) value change document.querySelector(`.product__form input[type="text"]`)
storing its value into a variable
getting all products name document.querySelectorAll(".product__product-details h3")
if product name textcontent has user's input value then will we style its great parent element to flex
otherwise style none***/


document.querySelector(`.product__form input[type="text"]`).addEventListener("input", function() {
    let query = this.value.toUpperCase();

    // if there is any product is aviable in dom
    if (document.querySelector(".product__product-details h3")) {
        document.querySelectorAll(".product__product-details h3").forEach(productName => {
            if (productName.textContent.toUpperCase().indexOf(query) != -1) {
                productName.parentElement.parentElement.style.display = "flex";
            } else {
                productName.parentElement.parentElement.style.display = "none";
            }
        });
    }
});


function putData() {
    // populating data into DOM
    let productHTML = '';

    products.forEach(product => {
        productHTML += `
                <li class="product__product">
                             <img src="${product.img}" alt="product" class="product__product-img">
                             <div class="product__product-details">
                                 <h3>${product.name}</h3>
                                 <small>${product.price}</small>
                             </div>
                         </li>`;
    });

    document.querySelector(".product__list").insertAdjacentHTML("afterbegin", productHTML);

}