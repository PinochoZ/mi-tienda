// Animación de aparición para la tabla de sucursales
document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table");
    if (table) {
        table.style.opacity = 0;
        setTimeout(() => {
            table.style.transition = "opacity 0.8s ease";
            table.style.opacity = 1;
        }, 100);
    }
});

// Función para mostrar número al hacer clic en "Llamar"
const botonesLlamar = document.querySelectorAll(".btn-outline-primary");

botonesLlamar.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        
        const numeros = [
            "55-1111-2222",
            "55-3333-4444",
            "55-5555-6666"
        ];

        alert(`Llamando a la sucursal: ${numeros[index]}`);
    });
});

// Resaltar fila al hacer clic
const filas = document.querySelectorAll("tbody tr");

filas.forEach(fila => {
    fila.style.cursor = "pointer";

    fila.addEventListener("click", () => {
        filas.forEach(f => f.classList.remove("table-warning"));
        fila.classList.add("table-warning");
    });
});
