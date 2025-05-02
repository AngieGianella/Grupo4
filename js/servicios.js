import { servicios } from "./data.js";
let card = "";
servicios.forEach((servicio) => {
  card += `
    <div class="servicio-card">
      <div class="servicio-img">
        <img src="${servicio.imagen}" alt="${servicio.titulo}">
      </div>
      <div class="servicio-contenido">
        <h5>${servicio.titulo}</h5>
        <p>${servicio.descripcion}</p>
        <h3>S/.${servicio.precio}</h3>
        <a href="reservas.html" class="btn btn-primary mt-3">Reservar</a>
      </div>
    </div>
  `;
});

let contenedor = document.getElementById("servicios");
contenedor.innerHTML = card;
