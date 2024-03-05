document.addEventListener("DOMContentLoaded", function() {
  let input = document.getElementById("input");
  let btn = document.getElementById("btn-barcode-generator");
  let barcodeDiv = document.getElementById("barcode");

  btn.addEventListener("click", generateBarcode);

  function generateBarcode() {
    const inputValue = input.value.trim();

    // Check if the input is not empty
    if (inputValue) {
      // Clear any existing barcode
      barcodeDiv.innerHTML = "";

      JsBarcode("#barcode", inputValue, {
        format: "CODE128",
        displayValue: true,
        fontSize: 24,
        lineColor: "#000",
      });

      // Clear the barcode after 3 seconds (adjust the time as needed)
      setTimeout(clearBarcode, 3000);

      // Optional: Add a callback function after generating the barcode
      console.log("Barcode generated successfully!");
    } else {
      // Show an error if the input is empty
      alert("Please enter text for the barcode.");
    }
  }

  function clearBarcode() {
    barcodeDiv.innerHTML = "";
    // Optional: Add a callback function after clearing the barcode
    console.log("Barcode cleared successfully!");
  }

  // Clear input on page load
  window.onload = function() {
    input.value = "";
  };
});
