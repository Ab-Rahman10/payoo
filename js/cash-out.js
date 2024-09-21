// document
//   .getElementById("button-cash-out")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     const cashOutAmount = document.getElementById(
//       "input-cash-out-amount"
//     ).value;
//     const cashOutPin = document.getElementById("cash-out-pin").value;

//     if (cashOutPin === "123") {
//       const currentBalance =
//         document.getElementById("current-balance").innerText;
//       const cashOut = parseFloat(cashOutAmount);

//       const newBalance = currentBalance - cashOut;

//       document.getElementById("current-balance").innerText = newBalance;
//     } else {
//       alert("Failed to Cash out! Please try again ");
//     }
//   });

document
  .getElementById("button-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutMoney = getInputValueById("input-cash-out-amount");
    const inputPin = getInputValueById("cash-out-pin");

    // validation
    if (isNaN(cashOutMoney)) {
      alert("Failed to cash out. please try again later");
      return;
    }

    if (inputPin === 123) {
      const currentBalance = parseFloat(
        document.getElementById("current-balance").innerText
      );

      if (cashOutMoney > currentBalance) {
        alert("You don not have enough money to cash Out");
        return;
      }

      const newBalance = currentBalance - cashOutMoney;
      document.getElementById("current-balance").innerText = newBalance;

      // show the transaction history
      const div = document.createElement("div");
      div.classList.add("bg-green-300");
      div.innerHTML = `
        <h4 class="font-bold text-xl">Cash Out</h4>
        <p>Withdraw tk: ${cashOutMoney}. New Balance: ${newBalance}</p>
      `;

      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Failed to add money! please try again.");
    }
  });
