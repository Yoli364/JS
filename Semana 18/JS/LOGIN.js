function validainputs(){
    let email=document.getElementById("email");//baja info
    let password=document.getElementById("password");//baja info
    let ingreso=document.getElementById("login");//baja info
    let emailval=email.value.trim();//elimina espacios innecesarios
    let passwordval=password.value.trim();
    let passwordok="a12345";
    // seccion de valida de campos formulñario campo x campo
    var errorf=0;// si no ocurre evento error=0
    //validar el email
    if (emailval===""){
        ocErrorform(email,"por favor ingrese su email..");
        errorf=1;//ocurre error =1 
    }else if (!valEmail(emailval)){
        ocErrorform(email," email no valido..");
        errorf=1;//ocurre error =1   
    }else{
        exitosform(email);
    }
    //validar contraseña ingresada
    if (passwordval===""){
        ocErrorform(password,"por favcor ingrese su contraseña....");
        errorf=1;
    }else if(passwordval!=passwordok){
        ocErrorform(password," contraseña no valida....");
        errorf=1; 
    }else{
        exitosform(password);
    }
    //seccion de ingreso exitoso en campos form
    if (errorf==0){
        ingreso.addEventListener('click',function(){
            swal("ACCESO PERMITIDO !!", "Click OK para continuar", "success");

        })
    }
    return false;
    //
    // función para validar errores en formularios
    function ocErrorform (input, message){
        let formControl=input.parentElement;
        let small=formControl.querySelector("small");
        formControl.className="form-control error";
        small.innerText =message; 
     }
     // función para ingreso exitoso en formularios
     function exitosform (input){
         let formControl=input.parentElement;
             formControl.className="form-control success";
         }
     function valEmail(email){
     return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
     }

     
}