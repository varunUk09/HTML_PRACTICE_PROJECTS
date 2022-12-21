function fetchFile(url) {
  // validate the URL input
  if (!/^https?:\/\//i.test(url)) {
    alert("Invalid URL. Please enter a valid URL.");
    DOWNLOAD_BTN.value = "SUBMIT";
    return;
  }

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
    .catch((e) => {
      alert("Failed To Download Please Try Again!!!");
      DOWNLOAD_BTN.value = "SUBMIT";
    });
}
