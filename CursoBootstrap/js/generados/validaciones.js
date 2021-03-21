function validaDatosForm(datos){
	let indInputError = [];
	colorInput(EXP_REG_NOMBRE.test(datos[0].value), $("#nombre"), indInputError, 0);
    colorInput(EXP_REG_NOMBRE.test(datos[1].value), $("#apePat"), indInputError, 1);
    colorInput(EXP_REG_NOMBRE.test(datos[2].value), $("#apeMat"), indInputError, 2);
    if (datos[3].value !== '') {
        $("#fechNac").parent("div").removeClass('has-error');
        $("#fechNac").parent("div").addClass('has-success');
    } else {
        $("#fechNac").parent("div").addClass('has-error');
        $("#fechNac").parent("div").removeClass('has-success');
        indInputError.push(3)
    }
    colorInput(EXP_REG_EMAIL.test(datos[4].value), $("#correo"), indInputError, 4);
    colorInput(datos[5].value !== "-1", $("#sexo"), indInputError, 5);

    return indInputError;
}

function colorInput(valido, elem, arr, n){
	if (valido) {
		elem.parent("div").removeClass('has-error');
		elem.parent("div").addClass('has-success');
	} else {
		elem.parent("div").removeClass('has-success');
		elem.parent("div").addClass('has-error');
		arr.push(n);
	}	
}
