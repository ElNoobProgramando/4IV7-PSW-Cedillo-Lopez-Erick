

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function interes(){

    var valor = document.formulario.cantidad.value;
    var resultado = parseInt(valor);
    var interes = resultado*0.02;
    komo=interes;
    var total = resultado + komo;
    document.formulario.sueldoti.value=total;
}

function borrar(){

    document.formulario.cantidad.value="";
    document.formulario.sueldoti.value="";
}   