$(document).ready(function () {
    $("#dTable").hide();

    tablaTab.click(function (){
        $("#dForm").hide(500);
        $("#dTable").show(500);
        $(this).addClass("active");
        tabForm.removeClass("active");
    });

    tabForm.on("click", function () {
        $("#dForm").show(500);
        $("#dTable").hide(500);
        $(this).addClass("active");
        tablaTab.removeClass("active");
    });

    $("#btnCln").click(function () {
        limpiaCampos();
    });

    $("#btnSnd").click(function (e) {
        e.preventDefault();
        let datos = $("#formu").serializeArray();
        let errores = validaDatosForm(datos);
        let titulo = "Éxito en el registro";
        let mensaje = "Registrado exitosamente";
        console.log(datos);
        if (errores.length === 0) {
            mostrarMensaje(titulo, mensaje);
            $("#tablaDat").append('<tr><td>'+datos[0].value+" "+datos[1].value+" "+datos[2].value+'</td>'+
                                        '<td>'+datos[3].value+'</td>'+
                                        '<td>'+datos[4].value+'</td>'+
                                        '<td>'+datos[5].value+'</td></tr>');

        } else {
            mensaje = "Estimado usuario, el registro no pudo concluirse debido a lo siguiente: <br><br>"+
	  			"<ul>";
	  		$.each(errores, function(idx, ele) {
	  			mensaje += "<li>"+MSJ_ERROR[ele]+"</li>";
	  		});
	  		mensaje+="</ul>";
            mostrarMensaje(titulo, mensaje);
        }
    });


});