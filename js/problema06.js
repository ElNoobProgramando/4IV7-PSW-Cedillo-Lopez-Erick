var totali;
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;
     
    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function edad(){
    var valorr = document.problema6.Año.value;
    var resultado = parseInt(valorr);
    var calcuedad= 2021-resultado;
    if (resultado>2021){
        calcuedadd=calcuedad*-1;
        document.problema6.edades.value=calcuedadd + "Años";
    }
    else{
        document.problema6.edades.value=calcuedad + "Años";

    }
}