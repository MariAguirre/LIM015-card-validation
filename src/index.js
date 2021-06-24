
import validator from "./validator.js";

/*----------------declaración de variables-------------------*/
const btnform = document.getElementById('btnform'),
    btnvalidate = document.getElementById('btnvalidate'),
    btnpago = document.getElementById('btnpago'),
    btnregreso = document.getElementById('btnregreso'),
    btnagregar = document.getElementById('btnagregar'),
    btnguardar = document.getElementById('btnguardar'),
    numbercard = document.getElementById('numbercard');

/*----------------Ocultar y mostrar secciones----------------*/
//evento para mostrar el formulario
btnform.addEventListener("click", () => {
    document.getElementById('form').style.display = "block";
    document.getElementById('inicio').style.display = "none";
    document.getElementById('numbercard').value = "";
});
//Evento para regresar al inicio
btnregreso.addEventListener("click", () => {
    document.getElementById('inicio').style.display = "block";
    document.getElementById('final').style.display = "none";
});
//Evento para regresar al inicio
btnpago.addEventListener("click", () => {
    alert("!Se realizo su pago con exito!");
    document.getElementById('inicio').style.display = "block";
    document.getElementById('final').style.display = "none";
});
btnguardar.addEventListener("click", () => {
    alert("Tu tarjeta a sido guardada con exito");
    document.getElementById('inicio').style.display = "block";
    document.getElementById('final').style.display = "none";
});
btnagregar.addEventListener("click", () => {
    alert("QULLQI-Amigx lo sentimos, estamos en mantenimiento. Dentro de unos minutos estara solucionado este problema :)");
    document.getElementById('inicio').style.display = "block";
    document.getElementById('final').style.display = "none";
});
/*---------------------- Operaciones ------------------------*/
//validar solo numeros
numbercard.addEventListener('keyup', (e) => { //keyup se envía a un elemento cuando el usuario suelta una tecla del teclado
    const card = e.target.value;// target es donde ocurrió el evento exacto
    numbercard.value = card
        //reemplaza los espacios en blanco por vacio
        .replace(/\s/g, '')
        //reemplaza las letras por vacio
        .replace(/\D/g, '')
        //busca los numeros del 0-9, los separa por 4 digitos
        //y muestra los 4 digitos mas un espacio en blanco
        .replace(/([0-9])/g, '$1')
        //elimina los espacios en blanco
        .trim();
});

//Evento para validar y enmascarar los numeros de la tarjeta
//Envia datos de la validación a la siguientes seccion 
btnvalidate.addEventListener("click", () => {
    const creditCardNumber = document.getElementById('numbercard').value;// inicializamos a numbercard el valor del input
    //
    if (creditCardNumber) {
        const isValid = validator.isValid(creditCardNumber);
        const maskify = validator.maskify(creditCardNumber);
        document.getElementById("tarjeta").innerHTML = maskify;
        const franchise = validator.franchise(creditCardNumber);
        document.getElementById("franqui").innerHTML = franchise;

        if (isValid) {
            document.getElementById("validacion").innerHTML = "tu tarjeta es VALIDA";
            document.getElementById("mensaje").innerHTML = "*Guarda y/o agrega tus tarjetas para que sea mas facil la operacion que deseas realizar";
        } else {
            document.getElementById("validacion").innerHTML = "tu tarjeta es INVALIDA";
            
        }

        document.getElementById('final').style.display = "block";
        document.getElementById("form").style.display = "none";

    } else {
        alert("Ingresa tu numero de cuenta")
    }


});






//console.log(validator);


//console.log(validator);
