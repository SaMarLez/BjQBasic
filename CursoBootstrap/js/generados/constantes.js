const EXP_REG_NOMBRE = /^[A-ZÁÉÍÓÚÑ]{2,}(\s[A-ZÁÉÍÓÚÑ]{1,})*$/;
const EXP_REG_EMAIL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const MSJ_ERROR = [
    "El <b>nombre</b> ingresado no es válido",
    "El<b>apellido paterno</b> ingresado no es válido",
    "El<b>apellido materno</b> ingresado no es válido",
    "No ha seleccionado una <b>fecha de nacimiento</b>",
    "El <b>correo</b> ingresado no es válido",
    "No ha seleccionado su <b>sexo</b>"
];


var tablaTab = $("#tabTabl");
var tabForm = $("#tabForm");