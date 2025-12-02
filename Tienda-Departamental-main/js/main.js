console.log("JS funcionando ✔");

// =======================
// EFECTOS Y ACCIONES VARIAS
// =======================

// Resaltar columna recomendada al pasar el mouse
document.querySelectorAll("td:nth-child(3), th:nth-child(3)").forEach(cell => {
    cell.addEventListener("mouseover", () => {
        document.querySelectorAll("td:nth-child(3), th:nth-child(3)")
            .forEach(c => c.classList.add("columna-activa"));
    });

    cell.addEventListener("mouseout", () => {
        document.querySelectorAll("td:nth-child(3), th:nth-child(3)")
            .forEach(c => c.classList.remove("columna-activa"));
    });
});

// Abrir modal al presionar "Ver más"
document.querySelectorAll("button.btn-outline-dark").forEach(btn => {
    btn.addEventListener("click", () => {
        let modal = new bootstrap.Modal(document.getElementById("modalInfo"));
        modal.show();
    });
});

// Reproducir el audio cuando el usuario hace clic en su fila
document.querySelectorAll("audio").forEach(audio => {
    const fila = audio.closest("tr");
    if (fila) {
        fila.addEventListener("click", () => {
            audio.play();
        });
    }
});

// FILTRAR PREGUNTAS DEL FAQ
const buscadorFAQ = document.getElementById("buscarFAQ");
const preguntasFAQ = document.querySelectorAll(".accordion-item");

if (buscadorFAQ) {
    buscadorFAQ.addEventListener("input", function () {
        const texto = this.value.toLowerCase();

        preguntasFAQ.forEach(item => {
            const pregunta = item.querySelector(".accordion-button").innerText.toLowerCase();

            item.style.display = pregunta.includes(texto) ? "" : "none";
        });
    });
}

// =======================
// SISTEMA DE SESIÓN (NAVBAR)
// =======================

document.addEventListener("DOMContentLoaded", function () {

    const userArea = document.getElementById("userArea");

    // Si la página no tiene navbar, salir
    if (!userArea) return;

    const usuario = localStorage.getItem("usuario");

    if (usuario) {
        // Usuario logueado → reemplazar botón "Ingresar"
        userArea.innerHTML = `
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white fw-bold" href="#" role="button" data-bs-toggle="dropdown">
                    👤 ${usuario}
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="perfil.html">Mi Perfil</a></li>
                    <li><a class="dropdown-item" href="#" id="logoutBtn">Cerrar sesión</a></li>
                </ul>
            </li>
        `;

        // Cerrar sesión
        const logoutBtn = document.getElementById("logoutBtn");
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("usuario");
            window.location.reload();
        });
    }
});


        // Crear contraseña si no existe
        if (!localStorage.getItem("password")) {
            localStorage.setItem("password", "1234"); 
        }

        const changeForm = document.getElementById("changePassForm");
        const passMsg = document.getElementById("passMsg");

        changeForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const oldPass = document.getElementById("oldPass").value;
            const newPass = document.getElementById("newPass").value;
            const confirmPass = document.getElementById("confirmPass").value;

            const savedPass = localStorage.getItem("password");

            // validar contraseña actual
            if (oldPass !== savedPass) {
                passMsg.style.display = "block";
                passMsg.classList.replace("alert-success", "alert-danger");
                passMsg.textContent = "❌ La contraseña actual no es correcta";
                return;
            }

            // validar confirmación
            if (newPass !== confirmPass) {
                passMsg.style.display = "block";
                passMsg.classList.replace("alert-success", "alert-danger");
                passMsg.textContent = "❌ Las contraseñas nuevas no coinciden";
                return;
            }

            // guardar nueva contraseña
            localStorage.setItem("password", newPass);

            passMsg.style.display = "block";
            passMsg.classList.replace("alert-danger", "alert-success");
            passMsg.textContent = "✔ Contraseña actualizada correctamente";

            changeForm.reset();
        });
