
function utilidad(){
    var añoss = document.problema10.años.value;
    var suelda = document.problema10.sueldomensual.value;
    var sii = parseInt(añoss);
    var noo = parseInt(suelda);
    if(sii<1 +"meses"){
        noob=suelda*.5;
        ki=noob + noo;
        document.problema10.xd.value=ki;
    }

    
    if(sii>=1,sii<2){
        conporci= (suelda *.07);
        sumati=conporci + noo;
        document.problema10.xd.value=sumati;

    }
    if(sii>=2,sii<5){
        cono=(suelda*0.10);
        sumatis=cono + noo;
        document.problema10.xd.value=sumatis;
    }
    if (sii>=5,sii<10){
        yes=suelda*0.15;
        suma=yes+noo;
        document.problema10.xd.value=suma;

    }
    if (sii>=10){
        not=suelda*0.20;
        oko=not+noo;
        document.problema10.xd.value=oko;
    }

}