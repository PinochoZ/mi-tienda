function togglePassword() {
    var passwordField = document.getElementById("floatingPassword");
    var toggleIcon = document.getElementById("toggleIcon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("bi-eye");
        toggleIcon.classList.add("bi-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("bi-eye-slash");
        toggleIcon.classList.add("bi-eye");
    }
}
function loginSimulado(event) {
    event.preventDefault();

    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("passwordInput").value;

    // credenciales de ejemplo
    const usuarioValido = "admin@tienda.com";
    const passValido = "12345";

    if (email === usuarioValido && password === passValido) {

        // Guardar usuario en localStorage
        localStorage.setItem("usuario", "Admin");

        // Ir al inicio
        window.location.href = "index.html";
    } else {
        alert("Credenciales incorrectas");
    }
}
