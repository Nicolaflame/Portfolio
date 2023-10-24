"use strict";
function sendForm() {
  var form = document.getElementById("form");
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/send-email");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(formData);
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("The email was sent successfully!");
    } else {
      alert("The email was not sent successfully!");
    }
  };
}
