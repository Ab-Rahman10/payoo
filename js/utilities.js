function getInputValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function showSectionById(id) {
  // Hide all the sections
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-form").classList.add("hidden");

  // show the section as provided the parameter
  document.getElementById(id).classList.remove("hidden");
}
