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

    const inputValue = getInputValueById("input-add-money");
    const inputPin = getInputValueById("input-pin-number");

    if (inputPin === 123) {
      const currentBalance = parseFloat(
        document.getElementById("current-balance").innerText
      );

      const newBalance = currentBalance + inputValue;
      document.getElementById("current-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! please try again.");
    }
  });
