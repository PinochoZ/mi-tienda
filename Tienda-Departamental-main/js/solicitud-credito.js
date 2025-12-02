(() => {
    'use strict';

    // Autofocus al cargar
    document.addEventListener("DOMContentLoaded", () => {
        const first = document.getElementById("nombre");
        if (first) first.focus();
    });

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            const submitBtn = form.querySelector("button[type='submit']");
            submitBtn.disabled = true;

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                submitBtn.disabled = false;

                // Enfocar el primer campo con error
                const firstInvalid = form.querySelector(":invalid");
                if (firstInvalid) firstInvalid.focus();
            } 
            else {
                event.preventDefault();
                alert("¡Solicitud enviada correctamente!");
                window.location.href = 'mi-cuenta.html';
            }

            form.classList.add('was-validated');
        }, false);
    });
})();
