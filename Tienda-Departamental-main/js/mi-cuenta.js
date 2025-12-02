// 1. Función de Alto Contraste
function toggleContraste() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('bg-secondary');
        card.classList.toggle('text-white');
    });
}

// 2. Función de Tamaño de Texto
function cambiarTexto(accion) {
    const cuerpo = document.body;
    let estiloActual = window.getComputedStyle(cuerpo, null).getPropertyValue('font-size');
    let tamañoActual = parseFloat(estiloActual);

    if (accion === 'aumentar') {
        cuerpo.style.fontSize = (tamañoActual + 2) + 'px';
    } else if (accion === 'disminuir') {
        cuerpo.style.fontSize = (tamañoActual - 2) + 'px';
    } else {
        cuerpo.style.fontSize = '16px';
    }
}
