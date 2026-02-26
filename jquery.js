
$(document).ready(function () {
  let total = 0;
  let cantidadItems = 0;

  $("small").css("color", "#1896df");
  $("#footer-titulo").css("letter-spacing", "2px");
  $("#footer-lista li:even").css("border-left", "2px solid #1896df").css("padding-left", "5px");

  $("#carrito-container").sortable({
    placeholder: "ui-state-highlight",
    axis: "y",
    cursor: "grabbing"
  });

  //  carrito
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

    $("#carrito-container").append(nuevoItem.hide().fadeIn(400));
    total += precio;
    cantidadItems++;
    actualizarInterfaz();

    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(document.getElementById("carritoSidebar"));
    bsOffcanvas.show();
  });

  // eliminar un juego
  $("#carrito-container").on("click", ".btn-eliminar", function () {
    const precioRestar = parseInt($(this).data("precio"));
    total -= precioRestar;
    cantidadItems--;
    actualizarInterfaz();
    $(this).closest('li').fadeOut(300, function () { $(this).remove(); });
  });

  // Añadi que la tecla M sea para ver o quitar el carrito
  $(document).on("keydown", function (e) {
    if (e.key === "m" || e.key === "M") {
      const el = document.getElementById("carritoSidebar");
      const instance = bootstrap.Offcanvas.getOrCreateInstance(el);
      
      if (el.classList.contains('show')) {
        instance.hide();
      } else {
        instance.show();
      }
    }
  });

  // validador para contactos 
  $(".form-contacto").on("submit", function (e) {
    e.preventDefault();
    const nombre = $("input[placeholder='Name']").val();
    if (nombre === "") {
      alert("Por favor, escribe tu nombre.");
    } else {
      alert("¡Gracias " + nombre + "! Mensaje enviado.");
      this.reset();
    }
  });

  // funcion para que el carrito se vacia al pagar 
  $("#btn-pagar").on("click", function () {
    if (cantidadItems === 0) return alert("El carrito esta vacio");
    
    $(this).animate({ opacity: 0.5 }, 100).animate({ opacity: 1 }, 100, function() {
      alert("Compra realizada con éxito");
      $("#carrito-container").empty();
      total = 0;
      cantidadItems = 0;
      actualizarInterfaz();
      bootstrap.Offcanvas.getInstance(document.getElementById("carritoSidebar")).hide();
    });
  });

  function actualizarInterfaz() {
    $("#total-precio").text(total);
    $("#carrito-contador").text(cantidadItems);
  }
});