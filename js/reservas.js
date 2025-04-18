import { servicios } from "./servicios.js";

const selectServicios = document.getElementById("servicios");

servicios.forEach((servicio) => {
  const option = document.createElement("option");
  option.value = servicio.id;
  option.textContent = servicio.titulo;
  selectServicios.appendChild(option);
});

document.getElementById("reservaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const servicio = document.getElementById("servicio").value;
  const dni = document.getElementById("dni").value;
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  alert(
    `¡Reserva generada con éxito!\n\n` +
      `Servicio: ${servicio}\n` +
      `Nombre: ${nombre}\n` +
      `DNI: ${dni}\n` +
      `Teléfono: ${telefono}\n` +
      `Correo: ${correo}\n` +
      `Fecha: ${fecha}\n` +
      `Hora: ${hora}`
  );

  // Resetear formulario
  this.reset();
});
