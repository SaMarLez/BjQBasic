function limpiaCampos() {
    $("input").val('');
}

function mostrarMensaje(titulo, mensaje) {
    bootbox.alert({
       title: titulo,
       message: mensaje,
       buttons: {
          ok: {
             label: "Cerrar",
             className: "btn-primary"
          }
       }
    });
 }
