    function apostar(){
        var a=Math.round(Math.random()*10);
        document.getElementById("resultado").value=a;
        //
        var b=document.getElementById("apostado").value;
        //validar apuesta
        if (a==b){
            document.getElementById("salida").value="GANO APUESTA";
            }else{
                document.getElementById("salida").value="PERDIO APUESTA";
            }
         }
         function cancel(){
            document.getElementById("apostado").value="";
            document.getElementById("resultado").value="";
            document.getElementById("salida").value="";
         }
    