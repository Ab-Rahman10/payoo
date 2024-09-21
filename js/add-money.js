// document
//   .getElementById("button-add-money")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     const addMoneyInput = document.getElementById("input-add-money").value;
//     const pinNumberInput = document.getElementById("input-pin-number").value;

//     if (pinNumberInput === "123") {
//       const currentBalance = parseFloat(
//         document.getElementById("current-balance").innerText
//       );
//       const addMoney = parseFloat(addMoneyInput);
//       const newBalance = currentBalance + addMoney;
//       document.getElementById("current-balance").innerText = newBalance;
//     } else {
//       alert("Failed to add money! Please try again ");
//     }
//   });

document
  .getElementById("button-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputValueById("input-add-money");
    const inputPin = getInputValueById("input-pin-number");

    // validation
    if (isNaN(addMoney)) {
      alert("Failed to add money. please try again later");
      return;
    }

    if (inputPin === 123) {
      const currentBalance = parseFloat(
        document.getElementById("current-balance").innerText
      );

      if (addMoney < 1) {
        alert("Failed to add money. please try again later");
        return;
      }

      const newBalance = currentBalance + addMoney;
      document.getElementById("current-balance").innerText = newBalance;

      // show the transaction history
      const newP = document.createElement("p");
      newP.innerText = `Added tk: ${addMoney} New Balance: ${newBalance}`;

      document.getElementById("transaction-container").appendChild(newP);
    } else {
      alert("Failed to add money! please try again.");
    }
  });
