document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    if (phoneNumber === "56" && pinNumber === "123") {
      window.location.href = "../home.html";
    } else {
      alert("Wrong phone number or pin");
    }
  });
