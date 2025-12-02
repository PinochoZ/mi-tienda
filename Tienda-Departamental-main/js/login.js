document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("floatingInput");
    const passInput = document.getElementById("passwordInput");
    const errorBox = document.getElementById("errorBox");

    // usuario fijo
    const USER = "admin@migrantienda.com";

    // si no existe password en el localStorage, crearla por primera vez
    if (!localStorage.getItem("password")) {
        localStorage.setItem("password", "1234");
    }

    const PASS = localStorage.getItem("password");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const pass = passInput.value.trim();

        if (email === USER && pass === PASS) {
            localStorage.setItem("usuario", USER);
            window.location.href = "mi-cuenta.html";
        } else {
            errorBox.style.display = "block";
            errorBox.textContent = "❌ Usuario o contraseña incorrectos";
        }
    });
});
