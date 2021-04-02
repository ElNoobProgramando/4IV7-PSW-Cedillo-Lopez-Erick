
function utilidad(){
    var añoss = document.problema10.años.value;
    var suelda = document.problema10.sueldomensual.value;
    var sii = parseFloat(añoss);
    var noo = parseInt(suelda);


    if(sii<1.0){
        var noob=suelda*0.05;
        var ki=noob + noo;
        document.problema10.xd.value=ki;
    }

    if(sii>=1&&sii<2)
    {
        var noob=suelda*0.07;
        var ki=noob + noo;
        document.problema10.xd.value=ki;
    }

    if(sii>=2&&sii<5)
    {
        var noob=suelda*0.10;
        var ki=noob + noo;
        document.problema10.xd.value=ki;
    }

    if(sii>=5 &&sii<10)
    {   
        var noob=suelda*0.15;
        var ki=noob + noo;
        document.problema10.xd.value=ki;
    }

    if(sii>10)
    {
        var noob=suelda*0.20;
        var ki=noob + noo;
        document.problema10.xd.value=12;
    }
    
   

}