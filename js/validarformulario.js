//funcion escribir mas de 5 caracteres 
function validar(formulario){
    //obtener los valores del formu
    if(formulario.nombre.value.length<5){
      alert("Escrivbe mas de 5 caracteres ");
      formulario.nombre.focus();
    return false;
    }
    //opcion solo se pueda ingresar letras en campo nombre
    var checkOK="dcbdfkbdf"
    + "fbfbklkjfglf";
    var chackStr = formulario.nombre.value;
    var allvalid=true;
    for (var i = 0; i <checkOK.length; i++){
        var ch = chackStr.charAt(1);
        for(var j=0; j<checkOK.length; j++)
        if(ch== checkOK.charAt(j))
         break;
        if (j== checkOK.length){
            allvalid=false;
            break;
        }
    }
    if(!allvalid){
        alert("Escribe solo las letras en el campo de nombre ")
        formulario.nombre.focus();
        return false;
    }

    //entrada de numeros
    var checkOK="12345678"
    + "fbfbklkjfglf";
    var chackStr = formulario.edad.value;
    var allvalid=true;
    for (var i = 0; i <checkOK.length; i++){
        var ch = chackStr.charAt(1);
        for(var j=0; j<checkOK.length; j++)
        if(ch== checkOK.charAt(j))
         break;
        if (j== checkOK.length){
            allvalid=false;
            break;
        }
    }
    if(!allvalid){
        alert("Escribe solo numeros ")
        formulario.nombre.focus();
        return false;
    }
//para correo con expresiones regulares 
    var txt=formulario.email.value;
    //patron
    var b = /^[@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    alert("Email"+(b.test(txt)?"":"no")+"valido");
    return b.test(txt);
}