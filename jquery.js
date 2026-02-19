$(document).ready(function () {
  let total = 0;
  let cantidadItems = 0;

  // 1. configurar el carrito para que sea ordenable 
  $("#carrito-container").sortable({
    placeholder: "ui-state-highlight", 
    axis: "y", 
    cursor: "grabbing", 
    update: function (event, ui) {
      console.log("Prioridad de productos actualizada");
    },
  });

  // 2. Evento al hacer clic en añadir
  $(".btn-add").on("click", function () {
    const nombreJuego = $(this).data("nombre");
    const precio = parseInt($(this).data("precio")) || 50;

    const nuevoItem = $(`
      <li class="list-group-item bg-black text-white border-secondary d-flex justify-content-between align-items-center mb-2 rounded shadow-sm" style="cursor: grab;">
        <span>
          <i class="bi bi-grip-vertical me-2 text-info"></i>
          ${nombreJuego}
        </span>
        <span class="badge bg-info text-dark fw-bold">${precio}€</span>
      </li>
    `);

    // Añadir el juego al contenedor del panel lateral
    $("#carrito-container").append(nuevoItem);

    // Actualizar los calculos del total y el contador del header
    total += precio;
    cantidadItems++;

    $("#total-precio").text(total);
    $("#carrito-contador").text(cantidadItems);

    // 3.  abrir el panel lateral automatico al añadir
    const sidebarElement = document.getElementById("carritoSidebar");
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(sidebarElement);
    bsOffcanvas.show();

    // 4. feedback visual en el boton de la tienda
    const btn = $(this);
    const textoOriginal = btn.html();

    btn
      .html('<i class="bi bi-check-circle-fill"></i> ¡Añadido!')
      .removeClass("btn-outline-primary")
      .addClass("btn-success");

    setTimeout(() => {
      btn
        .html(textoOriginal)
        .removeClass("btn-success")
        .addClass("btn-outline-primary");
    }, 1500);
  });
});
