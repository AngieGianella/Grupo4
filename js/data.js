export let servicios = [];

// Datos de ejemplo iniciales
const dataInicial = [
  {
    id: 1747352511221,
    titulo: "Lisoplastia Antifrizz",
    descripcion:
      "Bioplastía Antifrizz es un tratamiento de liso intenso e innovador que devuelve la elasticidad, maleabilidad, brillo y suavidad a tu cabello. Te ayuda a domar el volumen y el frizz.",
    precio: 100,
    imagen: "img/001.jpg",
  },
  {
    id: 1747352511223,
    titulo: "Ritual Fusión de Wella",
    descripcion:
      "Ritual Fusión de Wella, genera 95% de resistencia a las roturas del cabello, restaura al instante la fibra capilar. Aporta elasticidad, revitaliza y da suavidad extrema.",
    precio: 200,
    imagen: "img/002.jpg",
  },
  {
    id: 174735251125,
    titulo: "Tratamiento Facial Punta de Diamante",
    descripcion:
      "Bioplastía Antifrizz es un tratamiento de liso intenso e innovador que devuelve la elasticidad, maleabilidad, brillo y suavidad a tu cabello. Te ayuda a domar el volumen y el frizz.",
    precio: 150,
    imagen: "img/003.jpg",
  },
  {
    id: 1747352511273,
    titulo: "Laceado Marroquí Premium todo largo de cabello",
    descripcion:
      "Disfruta de un cabello sin frizz Recupera la vitalidad y elasticidad obteniendo una suavidad extrema Brillo perfecto Le adicionamos sellador de cabello. Dura entre 3 y 4 meses siguiendo las recomendaciones del estilista Válido para cualquier tipo y largo de cabello.",
    precio: 180,
    imagen: "img/004.jpg",
  },
  {
    id: 1747352516666,
    titulo: "Botox de oro Premium todo largo de cabello",
    descripcion:
      "Aumenta el diámetro de la fibra capilar envejecida y repara los daños internos existentes causados por estrés físico, químico, térmico y ambiental. Revierte los daños causados por el envejecimiento del cabello. Es recomendable realizarse cada mes o mes y medio en promedio..",
    precio: 100,
    imagen: "img/005.jpg",
  },
];

// Verificar si ya hay servicios guardados en el storage
if (!localStorage.getItem("servicios")) {
  localStorage.setItem("servicios", JSON.stringify(dataInicial));
}

// Cargar los servicios desde localStorage
servicios = JSON.parse(localStorage.getItem("servicios"));

export let reservas = [];
export let usuarios = [];
