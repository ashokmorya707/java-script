let score = "33abs" // Nan in conversion of Number
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)  // for NULL became 0

// true = 1
// undefined = Nan
// NULL = 0

let isLoggedIn = 1;

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

// "" => false
// "ashok" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(typeof stringNumber)
