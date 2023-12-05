document.getElementById("form-registro").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario-registro").value;
    const clave = document.getElementById("clave-registro").value;

    const nuevoUsuario = { nombre, usuario, clave };

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente = usuarios.find(u => u.usuario === usuario);

    if (usuarioExistente) {
        alert("El usuario ya existe. Por favor, elige otro nombre de usuario.");
    } else {
        usuarios.push(nuevoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
    }
});
fetch("data.json")
    .then(response => response.json())
    .then(data => {
    console.log(data);
    })
    .catch(error => console.error('Error al cargar datos de usuarios:', error));
document.getElementById("form-inicio-sesion").addEventListener("submit", function (event) {
    event.preventDefault();

    const usuarioInicioSesion = document.getElementById("usuario").value;
    const claveInicioSesion = document.getElementById('clave').value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(u => u.usuario === usuarioInicioSesion && u.clave === claveInicioSesion);

    if (usuarioEncontrado) {
        window.location.href = "paginas/peliculas.html"; 
} else {
alert("Usuario o contraseña incorrectos");
}
});