// Initialize variables
var productTable = document.getElementById("product-table").getElementsByTagName("tbody")[0];
var totalCost = 0;

function addProduct() {
  // Get the selected product and amount
  var productSelect = document.getElementById("product-select");
  var productAmount = parseInt(document.getElementById("product-amount").value);
  var selectedProduct = productSelect.options[productSelect.selectedIndex];
  
  // Add the product to the table if it hasn't already been added
  if (selectedProduct.value && productAmount > 0) {
    // Check if the product is already in the table
    var existingRow = productTable.querySelector("tr[data-value='" + selectedProduct.value + "']");
    
    if (existingRow) {
      // Update the existing row with the new amount and total cost
      var existingAmountCell = existingRow.querySelector(".amount-cell");
      var existingTotalCostCell = existingRow.querySelector(".total-cost-cell");
      
      var newAmount = parseInt(existingAmountCell.innerHTML) + productAmount;
      var newTotalCost = parseFloat(selectedProduct.value) * newAmount;
      
      existingAmountCell.innerHTML = newAmount;
      existingTotalCostCell.innerHTML = "₴" + newTotalCost.toFixed(2);
      existingRow.setAttribute("data-amount", newAmount);
      existingRow.setAttribute("data-total-cost", newTotalCost);
    } else {
      // Add a new row to the table with the product information
      var newRow = productTable.insertRow(-1);
      newRow.setAttribute("data-value", selectedProduct.value);
      newRow.setAttribute("data-amount", productAmount);
      newRow.setAttribute("data-total-cost", parseFloat(selectedProduct.value) * productAmount);
      
      var nameCell = newRow.insertCell(0);
      var priceCell = newRow.insertCell(1);
      var amountCell = newRow.insertCell(2);
      var totalCostCell = newRow.insertCell(3);
      var deleteCell = newRow.insertCell(4);
      
      nameCell.innerHTML = selectedProduct.text;
      priceCell.innerHTML = "₴" + parseFloat(selectedProduct.value).toFixed(2);
      amountCell.innerHTML = productAmount;
      amountCell.classList.add("amount-cell");
      totalCostCell.innerHTML = "₴" + (parseFloat(selectedProduct.value) * productAmount).toFixed(2);
      totalCostCell.classList.add("total-cost-cell");
      deleteCell.innerHTML = "<button onclick='deleteRow(this.parentNode.parentNode)'>Delete</button>";
    }
    
    // Add the product's total cost to the total cost
    totalCost += parseFloat(selectedProduct.value) * productAmount;
    document.getElementById("total-cost").innerHTML = "₴" + totalCost.toFixed(2);
  }
}

function deleteRow(row) {
  // Remove the row from the table
  var rowTotalCost = parseFloat(row.getAttribute("data-total-cost"));
  totalCost -= rowTotalCost;
  document.getElementById("total-cost").innerHTML = "₴" + totalCost.toFixed(2);
  productTable.removeChild(row);
}
