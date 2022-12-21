const URL_FIELD = document.querySelector("input[type='url']")
const DOWNLOAD_BTN = document.querySelector("input#submit");
document.querySelector(".container form").addEventListener("submit", (e) => {
    e.preventDefault();
    DOWNLOAD_BTN.value = "DOWNLOADING FILE...";
    fetchFile(URL_FIELD.value);
});

function fetchFile(url) {
  try {
    // fetching file & returning response as blob
    fetch(url)
      .then((response) => {
        // get the file name and extension from the Content-Disposition header, or use a default file name
        const contentDisposition = response.headers.get("Content-Disposition");
        let fileName = "";
        if (contentDisposition) {
          const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
          if (fileNameMatch) {
            fileName = fileNameMatch[1];
          }
        }
        if (!fileName) {
          fileName = "download.bin";
        }

        return response.blob().then((file) => {
          // converting blob file to url
          const tempUrl = URL.createObjectURL(file);
          const aTag = document.createElement("a");
          aTag.href = tempUrl;
          aTag.download = fileName; // file name
          document.body.insertAdjacentElement("beforeend", aTag);
          aTag.click();
          aTag.remove();
          URL.revokeObjectURL(tempUrl);
          DOWNLOAD_BTN.value = "SUBMIT";
        });
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    // handle specific errors here
    if (error instanceof TypeError) {
      // handle type errors here
      alert("Invalid URL. Please enter a valid URL.");
    } else if (error instanceof SyntaxError) {
      // handle syntax errors here
      alert("Invalid URL. Please enter a valid URL.");
    } else {
      // handle other errors here
      alert("An error occurred. Please try again.");
    }
    DOWNLOAD_BTN.value = "SUBMIT";
  }
}
