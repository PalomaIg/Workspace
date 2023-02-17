const mensajeVacio = "Rellene este campo"; // VARIABLE GLOBAL DE MENSAJE INPUT VACÍO

// FUNCIÓN A LA QUE SE LLAMA AL PULSAR BOTÓN ENVIAR

function validar(evt){

    var array = [validarNombre(evt), validarEmail(evt), validarClave(), validarClave2()]; // LLAMAMOS A LOS MÉTODOS VALIDAR Y RECOGEMOS VARIABLES

    if(array.includes(false) == false){  // COMPROBAMOS SI EL ARRAY CON LAS VARIABLES SON TODAS POSITIVAS PARA LANZAR ALERT

        alert("La inscripción ha sido correcta");
    };
}

// VALIDAR NOMBRE

function validarNombre(evt){                       // EL INPUT DEL NOMBRE NO ADMITE NÚMEROS, ESO LO CONTROLAMOS EN EL HTML

    var nombreOK = false;                          // INICIALIZAMOS VARIABLE QUE RECOGEMOS EN EL MÉTODO PRINICIPAL PARA SABER SI EL NOMBRE ES VÁLIDO

    if(nombre.value == ""){                        // SI EL NOMBRE ESTÁ VACÍO
        
        evt.preventDefault();                      // PARAMOS EVENTO DE ERROR PARA MOSTRAR MENSAJE PERSONALIZADO
        nombreH.innerHTML = mensajeVacio;          // MOSTRAMOS MENSAJE PERSONALIZADO (H2)
        nombre.className = "error";                // CAMBIAMOS ESTILO DE INPUT A LA CLASE ERROR
        nombreH.style.opacity="1";                 // MOSTRAMOS MENSAJE PERSONALIZADO (H2)
        iNombreE.style.opacity="1";                // MOSTRAMOS IMAGEN DE ERROR
        iNombreC.style.opacity="0"                 // OCULTAMOS IMAGEN DE CORRECTO

    }else{ // SI NO ESTÁ VACÍO

        nombreOK = true;                          // CAMBIAMOS VALOR DE VARIABLE QUE HEMOS INICIALIZADO AL PRINCIPIO POR TRUE (NOMBRE VÁLIDO)
        nombre.className = "correcto";            // CAMBIAMOS ESTILO DE INPUT A LA CLASE CORRECTO
        nombreH.style.opacity="0";                // OCULTAMOS MENSAJE PERSONALIZADO (H2)
        iNombreE.style.opacity="0";               // OCULTAMOS IMAGEN DE ERROR
        iNombreC.style.opacity="1";               // MOSTRAMOS IMAGEN DE CORRECTO
    };

    return nombreOK;                              // DEVOLVEMOS VARIABLE PARA SABER SI EL NOMBRE ES VÁLIDO O NO

}

// VALIDAR EMAIL

function validarEmail(evt){                     

    var emailOK = false;                          // INICIALIZAMOS VARIABLE PARA SABER SI EL EMAIL ES VÁLIDO
    /* let cond = /^\w+([\.-]?\w+)*@\w+([\.]?\w+)$/; */ /* Expresión regular para que se ponga un formato email (no solo el @) */
    let cond = /@/; /* Expresión regular para que pongan un @ y tenga coherencia con el mensaje de error */ /* Elegir una expresión u otra, no las dos */


    if(email.value == ""){                      // SI EL INPUT EMAIL ESTÁ VACÍO
        
        evt.preventDefault();                   // PARAMOS EVENTO DE ERROR PARA MOSTRAR MENSAJE PERSONALIZADO 
        emailH.innerHTML = mensajeVacio;        // MOSTRAMOS MENSAJE PERSONALIZADO (H2)
        email.className = "error";              // CAMBIAMOS ESTILO DE INPUT A LA CLASE ERROR
        emailH.style.opacity="1";               // MOSTRAMOS MENSAJE PERSONALIZADO (H2)
        iEmailE.style.opacity="1";              // MOSTRAMOS IMAGEN DE ERROR
        iEmailC.style.opacity="0";              // OCULTAMOS IMAGEN DE CORRECTO

    }else{

        if(cond.test(email.value)==false){      // SI LA ESTRUCTURA DEL EMAIL NO ES COMO LA EXPRESIÓN REGULAR


            email.setCustomValidity('Incluye un signo "@" en la dirección de correo electrónico. La dirección "' // ESTE MENSAJE SE VE TAL Y COMO MUESTRA LA IMAGEN DE EJEMPLO SI PONEMOS RATÓN ENCIMA
            +email.value+'" no incluye un signo "@"'); // MODIFICAMOS ERROR PREDEFINIDO DE NAVEGADOR (NO LO HEMOS PARADO COMO ANTERIORMENTE PORQUE QUEREMOS QUE SALGA O ESO ENTIENDO YO)
            emailH.innerHTML ="Email inválido";        // CAMBIAMOS MENSAJE PERSONALIZADO (H2)
            email.className = "error";                 // CAMBIAMOS ESTILO DE INPUT A LA CLASE ERROR
            emailH.style.opacity="1";                  // MOSTRAMOS MENSAJE PERSONALIZADO (H2)
            iEmailE.style.opacity="1";                 // MOSTRAMOS IMAGEN DE ERROR 
            iEmailC.style.opacity="0";                 // OCULTAMOS IMAGEN DE CORRECTO

            
        }else{                                          // SI EL EMAIL ESTÁ RELLENO Y CON LA ESTRUCTURA DE LA EXPRESIÓN REGULAR - EMAIL VÁLIDO          
            emailOK = true;                             // CAMBIAMOS VALOR DE VARIABLE PARA INDICAR QUE EL EMAIL ES VÁLIDO
            evt.preventDefault();                       /* Paramos evento porque aunque nuestro mensaje de error solo pide contener un @ en el mail
                                                         al tener un input tipo email nos pide que tenga más que un @ y nos saltaría error */
            email.className = "correcto";               // CAMBIAMOS ESTILO DE INPUT A LA CLASE CORRECTO
            emailH.style.opacity="0";                   // OCULTAMOS MENSAJE PERSONALIZADO (H2)
            iEmailE.style.opacity="0";                  // OCULTAMOS IMAGEN DE ERROR
            iEmailC.style.opacity="1";                  // MOSTRAMOS IMAGEN DE CORRECTO
        };
    };

    return emailOK;                                     // DEVOLVEMOS VARIABLE PARA SABER SI EL EMAIL ES VÁLIDO
    
}

// VALIDAR CLAVE

function validarClave(){

    var claveOK = false;                                // INICIALIZAMOS VARIABLE PARA SABER SI LA CLAVE ES VÁLIDA

    if(clave.value == ""){                              // SI LA CLAVE ESTÁ VACÍA

        claveH.innerHTML = mensajeVacio;                // MODIFICAMOS MENSAJE PERSONALIZADO (H2)
        clave.className = "error";                      // CAMBIAMOS ESTILO DE INPUT A CLASE ERROR
        claveH.style.opacity="1";                       // MOSTRAMOS MENSAJE PERSONALIZADO (H2)
        iClaveE.style.opacity="1";                      // MOSTRAMOS IMAGEN ERROR
        iClaveC.style.opacity="0";                      // OCULTAMOS IMAGEN CORRECTO

    }else if(clave.value.length < 8){ /* SI LA CLAVE TIENE MENOS DE 8 DÍGITOS (AUNQUE EN LA IMAGEN EJEMPLO EL MENSAJE DICE QUE DEBE TENER MÁXIMO 8 DIG EN EL ENUNCIADO Y
                                         Y EN LA IMAGEN EJEMPLO SI CUENTAS LA CANTIDAD DEL INPUT CUANDO DA ERROR SON 5, POR LO TANTO DA ERROR PORQUE TIENE MENOS DE 8 */ 
        claveH.innerHTML = "No debe tener menos de 8 caracteres"; // MODIFICAMOS MENSAJE PERSONALIZADO (H2)
        clave.className = "error";                                // CAMBIAMOS ESTILO DE INPUT A CLASE ERROR
        claveH.style.opacity="1";                                 // MOSTRAMOS MENSAJE PERSONALIZADO (H2)
        iClaveE.style.opacity="1";                                // MOSTRAMOS IMAGEN ERROR
        iClaveC.style.opacity="0";                                // OCULTAMOS IMAGEN CORRECTO

    }else{                                              // SI LA CLAVE ESTÁ COMPLETA Y TIENE MÍNIMO 8 DÍGITOS

        clave.className = "correcto";                   // CAMBIAMOS ESTILO DE INPUT A CLASE CORRECTO
        claveH.style.opacity="0";                       // OCULTAMOS MENSAJE PERSONALIZADO (H2)
        iClaveE.style.opacity="0";                      // OCULTAMOS IMAGEN ERROR
        iClaveC.style.opacity="1";                      // MOSTRAMOS IMAGEN CORRECTO
        claveOK = true;                                 // CAMBIAMOS VALOR PARA INDICAR QUE LA CLAVE ESTÁ BIEN
        
    };

    return claveOK;                                     // DEVOLVEMOS VARIABLE CLAVE
}

function validarClave2(){ // FUNCIÓN PARA VALIDAR CLAVE DE CONFIRMACIÓN  

    var clave2OK = false;                           // INICIALIZAMOS VARIABLE PARA SABER SI LA CLAVE CONFIRMACIÓN ESTÁ BIEN

    if(clave2.value == ""){                         // REPETIMOS INSTRUCCIÓN EN CASO QUE EL INPUT CLAVE CONFIRMACIÓN ESTÉ VACÍA
        clave2.className = "error";
        clave2H.style.opacity="1";
        iClave2E.style.opacity="1";
        iClave2C.style.opacity="0";
        clave2H.innerHTML = mensajeVacio;           
    
    }else if(clave.value != clave2.value){          // SI LA CLAVE Y LA CLAVE CONFIRMACIÓN NO SON IGUALES   
        clave2.className = "error";
        clave2H.innerHTML = "Las contraseñas no coinciden";
        clave2H.style.opacity="1";
        iClave2E.style.opacity="1";
        iClave2C.style.opacity="0";

    }else{                                         // SI INPUT ESTÁ LLENO Y LA CLAVE Y LA CLAVE CONFIRMACIÓN SON IGUALES
        clave2.className = "correcto";
        clave2H.style.opacity="0";
        iClave2E.style.opacity="0";
        iClave2C.style.opacity="1";
        clave2OK = true;

    }; 

    return clave2OK;
}
