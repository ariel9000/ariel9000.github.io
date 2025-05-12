document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
      const confirmSend = confirm("¿Estás seguro de que querés enviar este mensaje?");
      if (!confirmSend) {
        event.preventDefault(); // Cancela el envío
      }
    });
});