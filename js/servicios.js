export let servicios = [
  {
    id: 1,
    titulo: "Lisoplastia Antifrizz",
    descripcion:
      "Bioplastía Antifrizz es un tratamiento de liso intenso e innovador que devuelve la elasticidad, maleabilidad, brillo y suavidad a tu cabello. Te ayuda a domar el volumen y el frizz.",
    precio: 100,
    imagen: "img/001.jpg",
  },
  {
    id: 2,
    titulo: "Ritual Fusión de Wella",
    descripcion:
      "Ritual Fusión de Wella, genera 95% de resistencia a las roturas del cabello, restaura al instante la fibra capilar. Aporta elasticidad, revitaliza y da suavidad extrema.",
    precio: 200,
    imagen: "img/002.jpg",
  },
  {
    id: 3,
    titulo: "Tratamiento Facial Punta de Diamante",
    descripcion:
      "Bioplastía Antifrizz es un tratamiento de liso intenso e innovador que devuelve la elasticidad, maleabilidad, brillo y suavidad a tu cabello. Te ayuda a domar el volumen y el frizz.",
    precio: 150,
    imagen: "img/003.jpg",
  },
  {
    id: 4,
    titulo: "Laceado Marroquí Premium todo largo de cabello",
    descripcion:
      "Disfruta de un cabello sin frizz Recupera la vitalidad y elasticidad obteniendo una suavidad extrema Brillo perfecto Le adicionamos sellador de cabello. Dura entre 3 y 4 meses siguiendo las recomendaciones del estilista Válido para cualquier tipo y largo de cabello.",
    precio: 180,
    imagen: "img/004.jpg",
  },
  {
    id: 5,
    titulo: "Botox de oro Premium todo largo de cabello",
    descripcion:
      "Aumenta el diámetro de la fibra capilar envejecida y repara los daños internos existentes causados por estrés físico, químico, térmico y ambiental. Revierte los daños causados por el envejecimiento del cabello. Es recomendable realizarse cada mes o mes y medio en promedio..",
    precio: 100,
    imagen: "img/005.jpg",
  },
];

let card = "";
servicios.forEach((servicio) => {
  card += `
    <div class="d-flex mb-4" style="margin: 50px; background-color: #fff; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="flex: 1; max-width: 300px;">
        <img src="${servicio.imagen}" alt="${servicio.titulo}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="p-4" style="flex: 2;">
        <h5>${servicio.titulo}</h5>
        <p>${servicio.descripcion}</p>
        <h3>S/.${servicio.precio}</h3>
        <a href="reservas.html" class="btn btn-primary mt-4">Reservar</a>
      </div>
    </div>
  `;
});

let contenedor = document.getElementById("servicios");
contenedor.innerHTML = card;
