// Simulación de una lista de usuarios válidos
const usuarios = [
  { usuario: "admin", contraseña: "1234" },
  { usuario: "spauser", contraseña: "glow123" },
  { usuario: "cliente", contraseña: "beauty2025" },
];

// Evento de envío del formulario
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("username").value.trim();
  const contraseña = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Verifica si el usuario existe
  const usuarioEncontrado = usuarios.find(
    (u) => u.usuario === usuario && u.contraseña === contraseña
  );

  if (usuarioEncontrado) {
    // Guardar en localStorage
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));

    // Redireccionar a un panel o mostrar mensaje
    alert(`¡Bienvenido, ${usuario}!`);
    location.href = "panel.html"; // si tuvieses un panel de administración
  } else {
    errorMsg.classList.remove("d-none");
  }
});



 // Evento para botón de cerrar sesión
 const btnLogout = document.getElementById("btnLogout");
 if (btnLogout) {
   btnLogout.addEventListener("click", () => {
     localStorage.removeItem("usuarioLogueado");
     location.href = "login.html";
   });
 }