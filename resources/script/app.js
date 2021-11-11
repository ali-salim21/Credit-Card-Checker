//import validateCard from './creditCard.js'
const validateCred = card => {
    const checker = card;
    let other = false;
    let sum = 0;
    //algorithim for doubling every other value
    for(i = checker.length; i > 0; i--) {
      if(other) {
        checker[i-1] = 2 * checker[i-1];
        //subtract 9 if the value is greater than 9
        if (checker[i-1] > 9) {
          checker[i-1] = checker[i-1] - 9;
        }
        other = false;
      } else {
        other = true
      }
      //add all digits after multiplying them
      sum = sum + checker[i-1];
      //console.log(card[i-1]);
    }
    console.log('modulus: '+sum % 10);
    //find the modulus of 10 from the total of digits
    if(sum % 10 === 0) {
      return true
    } else {
      return false
    }  
}

let digits = 0;
const btn = document.getElementById('check');

function main() {
    btn.addEventListener("click", () => {
        digits = document.getElementById('digits').value;
        const digitArray = [];
        for (digit in digits) {
            digitArray.push(digit);
        }
        console.log(digitArray);
        console.log(validateCred(digits));
    })
}
main();
