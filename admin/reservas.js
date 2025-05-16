// /js/reservas.js

// Ya no importa directamente el array 'reservas', pues será reemplazado por los datos en localStorage
// import { reservas } from "./../js/data.js";

document.addEventListener("DOMContentLoaded", () => {
  const tablaReservas = document.getElementById("tabla-reservas");

  // Leer reservas desde localStorage
  const reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || [];

  if (reservasGuardadas.length === 0) {
    tablaReservas.innerHTML =
      '<tr><td colspan="7" class="text-center">No hay reservas registradas.</td></tr>';
    return;
  }

  reservasGuardadas.forEach((reserva) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${reserva.nombre}</td>
      <td>${reserva.dni}</td>
      <td>${reserva.telefono}</td>
      <td>${reserva.correo}</td>
      <td>${reserva.servicio}</td>
      <td>${reserva.fecha}</td>
      <td>${reserva.hora}</td>
    `;

    tablaReservas.appendChild(fila);
  });
});
