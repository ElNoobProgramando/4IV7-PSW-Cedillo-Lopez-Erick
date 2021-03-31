function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;
     
    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function pagos(){
    var horitas = document.problema9.horas.value;
    var totaldehoras = parseInt(horitas);
    if(horitas<=40){
        numneroalto=totaldehoras*12.8;
        document.problema9.sip.value=numneroalto;

    }
    if(horitas>=41,horitas<=48){
        extra8=totaldehoras-40;
        finalpago=40*12.8 + ((extra8*12.8)*2);
        document.problema9.sip.value=finalpago;

    }
    if(horitas>48){
        truplus=horitas-48;
        finaltriple=(40*12.8 )+(((8)*(12.8*2))+((truplus)*(12.8*3)));
        document.problema9.sip.value=finaltriple;

    }
}