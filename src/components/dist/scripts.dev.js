"use strict";

var btn = document.querySelector('button');
var inputs = document.querySelector('form');
btn.addEventListener('click', function () {
  Email.send({
    Host: "smtp://smtp.mailtrap.io:2525",
    Username: "484044d7df7d6a:b12e09de634d88",
    To: "to@example.com",
    From: inputs.elements[""].value,
    Subject: "Contact me",
    Body: inputs.elements["message"].value + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value
  }).then(function (msg) {
    return alert("The email was sent");
  });
});