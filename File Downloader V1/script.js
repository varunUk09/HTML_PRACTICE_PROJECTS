const URL_FIELD = document.querySelector("input[type='url']")
const DOWNLOAD_BTN = document.querySelector("input#submit");
document.querySelector(".container form").addEventListener("submit", (e) => {
    e.preventDefault();
    DOWNLOAD_BTN.value = "DOWNLOADING FILE...";
    fetchFile(URL_FIELD.value);
});

function fetchFile(url) {
  // validate the URL input
  if (!/^https?:\/\//i.test(url)) {
    alert("Invalid URL. Please enter a valid URL.");
    DOWNLOAD_BTN.value = "SUBMIT";
    return;
  }

  // create an AbortController and AbortSignal to support cancelling the download
  const controller = new AbortController();
  const signal = controller.signal;

  // create a progress bar element and append it to the document
  const progressBar = document.createElement("progress");
  progressBar.value = 0;
  progressBar.max = 100;
  document.body.insertAdjacentElement("beforeend", progressBar);

  // fetching file & returning response as blob
  fetch(url, { signal })
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

      // check the response status
      if (response.ok) {
        // update the progress bar as the download progresses
        response.body.getReader().read().then(function processResult(result) {
          if (result.done) {
            progressBar.remove();
            return;
          }
          const value = result.value.length;
          const total = parseInt(response.headers.get("Content-Length"), 10);
          progressBar.value += value;
          return response.body
            .getReader()
            .read()
            .then(processResult);
        });

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
      } else {
        // handle non-200 status responses
        throw new Error(response.statusText);
      }
    })
    .catch((e) => {
      // handle any errors that occurred during the download
      alert("Failed To Download Please Try Again!!!");
      DOWNLOAD_BTN.value = "SUBMIT";
      progressBar.remove();
      controller.abort();
    });
}
