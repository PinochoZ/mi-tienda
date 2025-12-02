// catalogo.js
document.addEventListener("DOMContentLoaded", function () {
  const filter = document.getElementById("filterDept");
  const productosGrid = document.getElementById("productosGrid");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  // Filtrar por departamento
  function aplicarFiltro(dept) {
    const items = productosGrid.querySelectorAll("[data-dept]");
    items.forEach(item => {
      if (dept === "all" || item.dataset.dept === dept) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }

  if (filter) {
    filter.addEventListener("change", function () {
      aplicarFiltro(this.value);
    });
  }

  // Buscador simple por nombre (insensible a mayúsculas)
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const q = (searchInput.value || "").trim().toLowerCase();
      const items = productosGrid.querySelectorAll("[data-dept]");
      items.forEach(item => {
        const title = item.querySelector(".card-title").innerText.toLowerCase();
        const desc = item.querySelector(".card-text").innerText.toLowerCase();
        if (!q || title.includes(q) || desc.includes(q)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  // Detalles en modal
  const modalEl = document.getElementById("productModal");
  let modal;
  if (modalEl) modal = new bootstrap.Modal(modalEl);

  productosGrid.addEventListener("click", function (e) {
    const btn = e.target.closest(".btn-detalles");
    if (!btn) return;

    const name = btn.dataset.name || "Producto";
    const price = btn.dataset.price || "";
    const stock = btn.dataset.stock || "0";
    const desc = btn.dataset.desc || "";

    const titleEl = modalEl.querySelector("#productModalLabel");
    const descEl = modalEl.querySelector("#modalDesc");
    const priceEl = modalEl.querySelector("#modalPrice");
    const stockEl = modalEl.querySelector("#modalStock");
    const comprarEl = modalEl.querySelector("#modalComprar");

    titleEl.innerText = name;
    descEl.innerText = desc;
    priceEl.innerText = price;
    stockEl.innerText = stock;
    comprarEl.href = `catalogo.html?add=${encodeURIComponent(name)}`; // demo

    modal.show();
  });

});
