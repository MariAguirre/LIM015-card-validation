const validator = {
  //...
  //creditCardNumber :document.getElementById("numbercard").value,

  isValid(creditCardNumber) {
    let array = creditCardNumber.split("");
    const arrayInverse = array.reverse();
    var sum = 0;
    for (let i = 0; i < arrayInverse.length; i++) {
      let numero = arrayInverse[i];
      if ((i % 2) != 0) {//[2 , 6]
        numero = parseInt(arrayInverse[i]) * 2;
        if (numero > 9) {//12
          let impar = numero.toString().split("");//[1 , 2]
          let sumaimpar = 0;
          impar.forEach(element => {//recorriendo el miniarray [1, 2]
            sumaimpar = sumaimpar + parseInt(element); // sumando ambos digitos

          });
          numero = sumaimpar;// almanenado la suma del miniarray
        }
        sum = sum + numero;
      } else {
        sum = sum + parseInt(arrayInverse[i]);
      }

    }
    let result = sum % 10;
    if (result == 0)
      return true;
    else
      return false;

  },

  maskify(creditCardNumber) {
    let hiddendigit = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < creditCardNumber.length - 4) {
        //hiddendigit.value = hiddendigit.replace(/\s/g, '#'); 
        hiddendigit = hiddendigit + "#";
      } else {
        hiddendigit = hiddendigit + creditCardNumber[i];
      }
    } return hiddendigit;

  }


};



export default validator;
