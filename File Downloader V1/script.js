const URL_FIELD = document.querySelector("input[type='url']")
const DOWNLOAD_BTN = document.querySelector("input#submit");
document.querySelector(".container form").addEventListener("submit", (e) => {
    e.preventDefault();
    DOWNLOAD_BTN.value = "DOWNLOADING FILE...";
    fetchFile(URL_FIELD.value);
});

function fetchFile(url) {
    // fecthing file & returning response as blob
    fetch(url).then(response => response.blob()).then(file => {
        // converting blob file to url
        const tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.split("/").pop(); // file name
        document.body.insertAdjacentElement("beforeend", aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        DOWNLOAD_BTN.value = "SUBMIT";

    }).catch(e => {
        alert("Failed To Download Please Try Again!!!");
        DOWNLOAD_BTN.value = "SUBMIT";
    });
}