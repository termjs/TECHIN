const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const amount = document.getElementById("amount");
const total = document.getElementById("total");

function calculate() {
  const billValue = parseFloat(bill.value) || 0;
  const tipPercent = parseFloat(tip.value) || 0;

  const tipAmount = billValue * (tipPercent / 100);
  const totalAmount = billValue + tipAmount;

  amount.innerText = tipAmount.toFixed(2);
  total.innerText = totalAmount.toFixed(2);
}
