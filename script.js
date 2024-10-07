function showMessage(message, type) {
  const outputMessage = document.getElementById("output-message");
  outputMessage.textContent = message;
  outputMessage.className =
    "output-message " + (type === "success" ? "success" : "error");
  outputMessage.style.display = "block";
}
(function () {
  emailjs.init("bK5nVJ3nP11ftMzh4");
  console.log("EmailJS initialized");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    emailjs.sendForm("service_391karm", "template_1oerx7s", this).then(
      function () {
        console.log("Email sent successfully");
        alert("thank-you message to the user upon successful form submission");
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });
