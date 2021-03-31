var totali;
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;
     
    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function porcentaje(){
    var valor = document.problema5.cantidadio.value;
    var valorr = document.problema5.cantidadna.value;
    var resultado = parseInt(valor);
    var resultados= parseInt(valorr);
    var total = resultado + resultados;
    totali=total
    var totales= (valor / total )* 100;
    var tani=(valorr/ total)*100;
    document.problema5.emujer.value=tani + "%";
    document.problema5.hombre.value=totales+"%";
}
function borrar(){
    document.problema5.cantidadio.value="";
    document.problema5.cantidadna.value="";
    document.problema5.emujer.value="";
    document.problema5.hombre.value="";


}