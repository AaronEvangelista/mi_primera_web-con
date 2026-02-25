$(document).ready(function () {
  let total = 0;
  let cantidadItems = 0;

  // 1. Configurar el carrito para que sea ordenable con jQuery UI
  $("#carrito-container").sortable({
    placeholder: "ui-state-highlight",
    axis: "y",
    cursor: "grabbing",
    update: function (event, ui) {
      console.log("Prioridad de productos actualizada");
    }
  });

  // 2. Evento para añadir juegos al carrito
  $(".btn-add").on("click", function () {
    const nombreJuego = $(this).data("nombre");
    const precio = parseInt($(this).data("precio")) || 50;

    const nuevoItem = $(`
      <li class="list-group-item bg-black text-white border-secondary d-flex justify-content-between align-items-center mb-2 rounded shadow-sm">
        <div class="d-flex align-items-center">
          <i class="bi bi-grip-vertical me-2 text-info" style="cursor: grab;"></i>
          <span>${nombreJuego}</span>
        </div>
        <div>
          <span class="badge bg-info text-dark me-2">${precio}€</span>
          <button class="btn btn-sm btn-outline-danger border-0 btn-eliminar" data-precio="${precio}">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </li>
    `);

    $("#carrito-container").append(nuevoItem);

    total += precio;
    cantidadItems++;

    actualizarInterfaz();

    // Abrir el panel lateral 
    const sidebarElement = document.getElementById("carritoSidebar");
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(sidebarElement);
    bsOffcanvas.show();

    const btn = $(this);
    const textoOriginal = btn.html();
    btn.html('<i class="bi bi-check-circle-fill"></i> Añadido')
       .removeClass("btn-outline-primary")
       .addClass("btn-success");

    setTimeout(() => {
      btn.html(textoOriginal)
         .removeClass("btn-success")
         .addClass("btn-outline-primary");
    }, 1500);
  });

  //  Funcion para eliminar un solo item
  $("#carrito-container").on("click", ".btn-eliminar", function () {
    const precioRestar = parseInt($(this).data("precio"));
    
    total -= precioRestar;
    cantidadItems--;

    actualizarInterfaz();

    $(this).closest('li').fadeOut(300, function () {
      $(this).remove();
    });
  });

  //  Funcion para finalizar compra 
  $("#btn-pagar").on("click", function () {
    if (cantidadItems === 0) {
      alert("El carrito esta vacio");
      return;
    }

    alert("Compra realizada con exito");

    $("#carrito-container").empty();
    total = 0;
    cantidadItems = 0;
    actualizarInterfaz();

    const sidebarElement = document.getElementById("carritoSidebar");
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(sidebarElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  });

  function actualizarInterfaz() {
    $("#total-precio").text(total);
    $("#carrito-contador").text(cantidadItems);
  }
});