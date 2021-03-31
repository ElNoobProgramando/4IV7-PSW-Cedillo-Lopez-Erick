var totali;
 function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;
     
    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function comision(){
    var valor = document.problema2.cantidad.value;
    var resultado = parseInt(valor);
    var interes = resultado*0.10;
    var total = resultado + interes;
    totali=total
    document.problema2.sueldoti.value="$"+total;
}
function mensu(){
    
    var resultado = parseInt(totali);
    var intereses = totali*3;
    document.problema2.mensualti.value="$"+intereses;
}
function borrar(){
    document.problema2.sueldoti.value="";
    document.problema2.mensualti.value="";
    document.problema2.cantidad.value="";

}
