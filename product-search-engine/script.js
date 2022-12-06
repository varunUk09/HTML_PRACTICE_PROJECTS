// Inserting products dynamically

let products = [
	{
		"name":`Apple iPhone 13 Pro (1TB) - Sierra Blue`,
		"price":`₹1,54,900.00`,
		"img":`https://m.media-amazon.com/images/I/31TCJmM4+mL._SX342_SY445_.jpg`,
	},
	{
		"name":`Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 256GB Storage) Galaxy Watch4`,
		"price":`₹1,12,998.00`,
		"img":`https://m.media-amazon.com/images/I/71JT7AirReL._SX679_.jpg`,
	},
	{
		"name":`Apple Watch Series 8 GPS + Cellular 41mm Midnight Aluminium Case with Midnight Sport Band - Regular`,
		"price":`₹54,780`,
		"img":`https://m.media-amazon.com/images/I/71FeKU41G1L._AC_UY218_.jpg`,
	},
	{
		"name":`2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD`,
		"price":`₹88,990`,
		"img":`https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg`,
	},
	{
		"name":`Samsung Galaxy Tab S8 Ultra 37.08 cm (14.6 inch) sAMOLED Display, RAM 12 GB, ROM 256 GB Expandable`,
		"price":`₹1,01,999 `,
		"img":`https://m.media-amazon.com/images/I/91bMDtxybOL._AC_UY218_.jpg`,
	},
	{
		"name":`London Hills Men's Regular Fit T-Shirt`,
		"price":`₹1,299`,
		"img":`https://m.media-amazon.com/images/I/71tJWaahoDL._AC_UL320_.jpg`,
	},
	{
		"name":`Sony Alpha ILCE 6100L 24.2 MP Mirrorless Digital SLR Camera with 16-50 mm Power Zoom Lens`,
		"price":`₹66,990`,
		"img":`https://m.media-amazon.com/images/I/81+9LRBzz6L._AC_UY218_.jpg`,
	}
]

let productHTML = '';

products.forEach(product=>{
	productHTML += `
	<li class="product__product">
            		<img src="${product.img}" alt="product" class="product__product-img">
            		<div class="product__product-details">
            			<h3>${product.name}</h3>
            			<small>${product.price}</small>
            		</div>
            	</li>`
});

document.querySelector(".product__list").insertAdjacentHTML("afterbegin",productHTML);



//===========================logic===========================//

/***first checking for input(search box) value change document.querySelector(`.product__form input[type="text"]`)
storing its value into a variable
getting all products name document.querySelectorAll(".product__product-details h3")
if product name textcontent has user's input value then will we style its great parent element to flex
otherwise style none***/


document.querySelector(`.product__form input[type="text"]`).addEventListener("input",function(){
    let value = this.value.toUpperCase();
    document.querySelectorAll(".product__product-details h3").forEach(productName=>{
        if(productName.textContent.toUpperCase().indexOf(value) != -1){
            productName.parentElement.parentElement.style.display = "flex";
        } else {
            productName.parentElement.parentElement.style.display = "none";
        }
    });
});