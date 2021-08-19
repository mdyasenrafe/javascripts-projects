//increase and decrease and amount total function
function updateProduct(id, price, isDecrease) {
  const inputField = document.getElementById(id + "-input");
  const inputFieldText = inputField.value;
  const inputFieldNumber = parseInt(inputFieldText); //intial value of input tag
  //increase condition
  if (isDecrease == false) {
    const inputFieldTotal = inputFieldNumber + 1;
    inputField.value = inputFieldTotal;
  } else if (inputFieldNumber > 0) {
    const inputFieldTotal = inputFieldNumber - 1;
    inputField.value = inputFieldTotal;
  }
  //total phone and case calcucate
  const ProductTotal = document.getElementById(id + "-price");
  ProductTotal.innerText = inputField.value * price;
  //calculate  all function call
  calculateTotal();
}

//calculate total and subtota and tax function
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 58;
  const subTotal = phoneTotal + caseTotal;
  const taxTotal = Math.round((subTotal * 15) / 100);
  const total = subTotal + taxTotal;

  document.getElementById("subtotal-amount").innerText = subTotal;
  document.getElementById("tax-amount").innerText = taxTotal;
  document.getElementById("total-amount").innerText = total;
}
//get input function
function getInputValue(id) {
  const inputField = document.getElementById(id + "-input");
  const inputFieldNumber = parseInt(inputField.value);
  return inputFieldNumber;
}
//handle submit function
function handleSubmit() {
  alert("congratulion");
  console.log("done");
}
