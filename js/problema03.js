var totali;
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;
     
    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function descuento(){
    var valor = document.problema3.cantidad.value;
    var resultado = parseInt(valor);
    var interes = resultado*0.15;
    var total = resultado - interes;
    totali=total
    document.problema3.sueldoti.value="$"+total;
}
function borrar(){
    document.problema3.cantidad.value="";
    document.problema3.sueldoti.value="";
}    