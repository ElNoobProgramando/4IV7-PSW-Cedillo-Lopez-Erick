var totali="";
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;
     
    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function aja(){
    var primerass = document.problema04.primerparcial.value;
    var ci = parseInt(primerass);
    var segunda = document.problema04.segundoparcial.value;
    var or = parseInt(segunda);
    var tercera = document.problema04.tercerparcial.value;
    var cr = parseInt(tercera);
    var cuarta = document.problema04.examenfinal.value;
    var kr = parseInt(cuarta);
    var quinta = document.problema04.trabajofinal.value;
    var er = parseInt(quinta);
    var promedioss=(ci+or+cr)/3;
    
    var promediofinal=(promedioss*0.55)+(kr*0.30)+(er*0.15);
    document.problema04.omg.value=promediofinal;
}