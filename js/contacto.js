document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario
    alert(
      "¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto pronto."
    );
    form.reset(); // Limpia el formulario
  });
});
