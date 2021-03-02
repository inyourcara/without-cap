
const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
Email.send({
    Host:"smtp://smtp.mailtrap.io:2525",
    Username: "484044d7df7d6a:b12e09de634d88",
    To:"to@example.com",
    From:inputs.elements[""].value,
    Subject:"Contact me",
    Body:inputs.elements["message"].value + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value,


}).then(msg=>alert("The email was sent"))
})