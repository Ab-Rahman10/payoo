document
  .getElementById("button-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutAmount = document.getElementById(
      "input-cash-out-amount"
    ).value;
    const cashOutPin = document.getElementById("cash-out-pin").value;

    if (cashOutPin === "123") {
      const currentBalance =
        document.getElementById("current-balance").innerText;
      const cashOut = parseFloat(cashOutAmount);

      const newBalance = currentBalance - cashOut;

      document.getElementById("current-balance").innerText = newBalance;
    } else {
      alert("Failed to Cash out! Please try again ");
    }
  });
