    // JavaScript code
    document.getElementById("productForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      var productName = document.getElementById("productName").value;
      var productType = document.getElementById("productType").value;

      // Process the data or perform any other actions
      console.log("Product Name:", productName);
      console.log("Product Type:", productType);

      // Clear the form
      document.getElementById("productForm").reset();
    });
  