// getting the query from search link
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "q" in eg "./pages/page.html?page-number=1&img=im1.jpg"
let pageNumber = params.page_number; // "value of page-number"
let imgName = params.img; // "value of img"

document.querySelector("title").textContent=`This is page ${pageNumber}`;

document.querySelector(".heading").textContent = `This is page ${pageNumber}`;

const img = document.querySelector(".page-img");

// creating new src
const lst = img.src.split("/");
lst[lst.length-1] = imgName;

img.src = lst.join("/")
