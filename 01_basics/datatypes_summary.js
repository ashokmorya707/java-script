// primitive 

// 7 types
// string, Number, Boolean, null(empty), undefined, Symbol, BigInt


const score = 100
const scoreNumber = 103.5

const isLogin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


const bigNumber = 34567890345677n
console.log(typeof bigNumber)

// reference type(Non-primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "ashok",
    age: 22
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof outsideTemp)  // object

let someExample = undefined

console.log(typeof someExample)
console.log(typeof userEmail)
console.log(typeof myFunction)
console.log(typeof anotherId)
console.log(typeof myObj)

// ++++++++++++++++++++++++++++++++++++++++

// Stack (primitive) -> copy,    Heap (non-primitive) -> reference

let anExample = "mynameisAshok"

let anotherExample = anExample
anotherExample = "hithisIsAcopyOforiginal"

console.log(anotherExample)
console.log(anExample)

let user1 = {
    email: "user@gmail.com",
    upi: "user@upi"
}

let user2 = user1

user2.email = "newUser2@gmail.com"

console.log(user1.email)
console.log(user2.email)
