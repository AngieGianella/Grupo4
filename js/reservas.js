import { servicios, reservas, usuarios } from "./data.js";

const selectServicios = document.getElementById("servicios");

// Llenar el select con los servicios
servicios.forEach((servicio) => {
  const option = document.createElement("option");
  option.value = servicio.id;
  option.textContent = servicio.titulo;
  selectServicios.appendChild(option);
});

// ⬇️ Cargar reservas guardadas en localStorage (si existen)
const reservasGuardadas = JSON.parse(localStorage.getItem("reservas"));
if (reservasGuardadas) {
  reservas.push(...reservasGuardadas);
}

// Escuchar envío del formulario
document.getElementById("reservaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const servicio = document.getElementById("servicios").value;
  const dni = document.getElementById("dni").value;
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  // Validar si ya existe una reserva con mismo servicio, fecha y hora
  const yaExiste = reservas.some(
    (reserva) =>
      reserva.servicio === servicio &&
      reserva.fecha === fecha &&
      reserva.hora === hora
  );

  if (yaExiste) {
    alert(
      "Ya existe una reserva con este servicio, fecha y hora. Por favor, elige otro horario."
    );
    return;
  }

  const nuevaReserva = {
    servicio,
    dni,
    nombre,
    telefono,
    correo,
    fecha,
    hora,
  };

  reservas.push(nuevaReserva);

  // 🔐 Guardar en localStorage
  localStorage.setItem("reservas", JSON.stringify(reservas));

  console.log("Lista de reservas:", reservas);

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

  this.reset();
});
