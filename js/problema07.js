var totali;
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;
     
    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function leer(){
    var valorr = document.problema7.numero1.value;
    var valores = document.problema7.numero2.value;
    var resultado = parseInt(valorr);
    var resultados = parseInt(valores);
    if(resultado==resultados){
        multi=resultado * resultados;
        document.problema7.iguales.value=multi;

     }
    if(resultado>resultados){
        resta=resultado-resultados;
        document.problema7.mayor.value=resta;

    }
    else{
        suma=resultados+resultado;
        document.problema7.mayors.value=suma;

    }

    
}