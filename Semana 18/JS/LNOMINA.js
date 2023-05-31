let smlv=parseFloat(prompt("ingrese salario minimo lv 2023"))
let subtte=parseFloat(prompt("ingrese subcidio de transporte lv 2023"))
function liquidar(){
    //sueldo Basico
    let n1=document.getElementById("salario").value;//bajar info del formal vscode
    let n2=document.getElementById("dias").value;//bajar info del form al vscode
    sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=sueldo.toFixed(0);
    //subsidio transporte
    if (n1>=2*smlv){
        subsidiot=0;//no se otorga
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }else{
        subsidiot=subtte/30*parseInt(n2);
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }
    //recargo nocturno
    var nhrn=document.getElementById("hrn").value;
    let vhrn=n1/240*nhrn*1.35;
    document.getElementById("totrecn").value=vhrn.toFixed(0);
    //total devengado
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);
    //
    let totaldevo=document.getElementById("totaldev").value;
    //liquidacion de deducciones
    //eps y pension
    let eps00=(totaldevo-subsidiot)*0.04;
    let pens00=(totaldevo-subsidiot)*0.04;
    document.getElementById("eps").value=eps00.toFixed(0);
    document.getElementById("pension").value=pens00.toFixed(0);
    //fondo de solidaridad
    let fondo=0;
    if (n1>=4*smlv){
        let fondo=totaldevo*0.01;
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }
    //prestamo
    let presta=document.getElementById("prestam").value;
    //total deducciones
    document.getElementById("totaldedu").value==(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);
    let totalddc=document.getElementById("totaldedu").value
       //calcular  Neto pago
      let vneto=totaldevo-totalddc;
    document.getElementById("neto").value=vneto.toFixed(0);
}
