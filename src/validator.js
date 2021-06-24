const validator = {
  //...
  //creditCardNumber :document.getElementById("numbercard").value,

  isValid(creditCardNumber) {
    const array = creditCardNumber.split("");//[0,1,2,3,4,5,6,7,8,9]
    const arrayInverse = array.reverse();
    const sum = 0;
    for (let i = 0; i < arrayInverse.length; i++) {
      let numero = arrayInverse[i];// [9,8,7,6,5,4,3,2,1,0]
      if ((i % 2) != 0) {//[2 ,3, 6]
        numero = parseInt(arrayInverse[i]) * 2;//4 //12
        if (numero > 9) {//12
          let impar = numero.toString().split("");//[1 , 2]
          let sumaimpar = 0;
          impar.forEach(element => {//recorriendo el miniarray [1, 2]
            sumaimpar = sumaimpar + parseInt(element); // sumando ambos digitos  //1+2

          });
          numero = sumaimpar;// almanenado la suma del miniarray
        }
        sum = sum + numero; //4//3
      } else {
        sum = sum + parseInt(arrayInverse[i]); //7+3
      }

    }
    const result = sum % 10; //modulo, resto
    if (result == 0)
      return true;
    else
      return false;

  },

  maskify(creditCardNumber) {
    let hiddendigit = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < creditCardNumber.length - 4) {//16 - 4 = 12
        //hiddendigit.value = hiddendigit.replace(/\s/g, '#'); 
        hiddendigit = hiddendigit + "#";
      } else {
        hiddendigit = hiddendigit + creditCardNumber[i]; 
      } 
    } return hiddendigit;

  },

  franchise(creditCardNumber) {
    const array = creditCardNumber.split("");
    let bank = "";
    const indone = array[0];
    const indtwo = array[1];
    const indtree = array[2];
    const indfour = array[3];
    if (parseInt(indone) > "6") {
      bank = "NO EXISTE";
    } else if (indone == "6") {
      if (indtwo == "0" && indtree == "1" && indfour == "1") {
        bank = "Descubrir";
      }
    } else if (indone == "5") {
      if (indtwo == "1" || indtwo == "2" || indtwo == "3" || indtwo == "4" || indtwo == "5") {
        bank = "MASTERCARD";
      } else {
        bank = "No se encontro el banco"
      }
    } else if (indone == "4") {
      bank = "VISA";
    } else if (indone == "3") {
      if (indtwo == "4") {
        bank = "AMERICAN EXPRESS";
      } else if (indtwo == "6") {
        bank = "DINER'S CLUB / INTERNACIONAL";
      } else if (indtwo == "7") {
        bank = "AMERICAN EXPRESS";
      } else if (indtwo == "8") {
        bank = "DINER'S CLUB / CARTE BLANCHE";
      } else if (indtwo == "0") {
        if (indtree == "0" || indtree == "1" || indtree == "2" || indtree == "3" || indtree == "4" || indtree == "5") {
          bank = "DINER'S CLUB / CARTE BLANCHE";
        }
      } else {
        bank = "JBC";
      }
    } else if (indone == "2") {
      if (indtwo == "0" && indtree == "1" && indfour == "4") {
        bank = "DINER'S CLUB / enRoute";
      } else if (indtwo == "1" && indtree == "3" && indfour == "1") {
        bank = "JBC";
      } else if (indtwo == "1" && indtree == "4" && indfour == "9") {
        bank = "DINER'S CLUB / enRoute";
      } else {
        bank = "No se encontro el banco";
      }
    } else if (indone == "1") {
      if (indtwo == "8" && indtree == "0" && indfour == "0") {
        bank = "JCB";
      } else {
        bank = "No se encontro el banco";
      }
    } return bank;
  }

};



export default validator;
