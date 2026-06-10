document.addEventListener("DOMContentLoaded", function () {
  const contenedorQR = document.getElementById("qr-code");
  const qrOuterContainer = document.getElementById("qr-container");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let urlActual = tabs[0].url;

    contenedorQR.innerHTML = "";

    new QRCode(contenedorQR, {
      text: urlActual,
      width: 150,
      height: 150,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.L,
    });

    qrOuterContainer.style.display = "flex";
  });
});
