let jsonData = [{
        "page_number": 1,
        "file_name": "im1.jpg"
    },
    {
        "page_number": 2,
        "file_name": "im2.png"
    },
    {
        "page_number": 3,
        "file_name": "im3.png"
    },
    {
        "page_number": 4,
        "file_name": "im4.jpg"
    },
    {
        "page_number": 5,
        "file_name": "im5.jpg"
    },
    {
        "page_number": 6,
        "file_name": "im6.jpg"
    },
    {
        "page_number": 7,
        "file_name": "im7.jpg"
    }
]

// selecting a tags inside page numbers and append href to them
document.querySelectorAll(".page-numbers a").forEach((anchor, index) => {
    let page_number = jsonData[index].page_number;
    let file_name = jsonData[index].file_name;
    let query = `?page_number=${page_number}&file_name=${file_name}`;
    anchor.href = window.location.pathname + 'pages/page.html' + query;
});