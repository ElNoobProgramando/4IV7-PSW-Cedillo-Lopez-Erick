var totalis;
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;
     
    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function leerr(){
    var unonumero = document.problema8.primernumero.value;
    var segundonumeros = document.problema8.segundonumero.value;
    var ernumeros = document.problema8.tercernumero.value;
    var resu = parseInt(unonumero);
    var segundo = parseInt(segundonumeros);
    var ultimo = parseInt(ernumeros);
    if(resu>segundo,segundo<resu){
        numneroalto=resu;
        document.problema8.mostrarr.value=numneroalto;

    }
    if(segundo>resu,resu<segundo){
        segundoalto=segundo;
        document.problema8.mostrarr.value=segundoalto;

    }
    if(ultimo>resu,ultimo>segundo){
        ultimos=ultimo;
        document.problema8.mostrarr.value=ultimos;
    }
}