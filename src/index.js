
import validator from "./validator.js";

/*----------------declaración de variables-------------------*/
let btnform = document.getElementById('btnform'),
    btnvalidate = document.getElementById('btnvalidate'),
    btnpago = document.getElementById('btnpago'),
    btnregreso = document.getElementById('btnregreso'),
    numbercard = document.getElementById('numbercard');

/*----------------Ocultar y mostrar secciones----------------*/
//evento para mostrar el formulario
btnform.addEventListener("click", () => {
    document.getElementById('form').style.display = "block";
    document.getElementById('inicio').style.display = "none";

});
//Evento para regresar al inicio
btnregreso.addEventListener("click", () => {
    document.getElementById('inicio').style.display = "block";
    document.getElementById('final').style.display = "none";
});
//Evento para regresar al inicio
btnpago.addEventListener("click", () => {
    alert("!Se realizo su pago con exito!");

});
/*---------------------- Operaciones ------------------------*/
//validar solo numerosq
numbercard.addEventListener('keyup', (e) => {
    let card = e.target.value;
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
    let creditCardNumber = document.getElementById('numbercard').value;// inicializamos a numbercard el valor del input
    //
    if (creditCardNumber) {
        let isValid = validator.isValid(creditCardNumber);
        let maskify = validator.maskify(creditCardNumber);
        document.getElementById("tarjeta").innerHTML = maskify;

        if (isValid) {
            let array = numbercard.value.split("");
            let find = array.slice(0, 1);
            if (find == "4")
                document.getElementById("cate").innerHTML = "VISA";
            else if (find == "5")
                document.getElementById("cate").innerHTML = "MASTERCARD";
            else
                document.getElementById("cate").innerHTML = "OTRA CATEGORIA";
            document.getElementById("validacion").innerHTML = "tu tarjeta es VALIDA";
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
