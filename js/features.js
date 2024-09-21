document
  .getElementById("cash-out-btn-show")
  .addEventListener("click", function () {
    //  show the cash out form and hide the add money form
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });

document
  .getElementById("add-money-btn-show")
  .addEventListener("click", function () {
    // show the add money form and hide the cash out form
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
  });
