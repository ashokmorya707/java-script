// singleton   
// variable use -> not created singleton
// constructor -> always created singleton

// Objects literals

// Object.create

const mySym = Symbol("key1")

const jsUser = {
    name: "Ashok", 
    "fullName": "Ashok Maurya",
    [mySym]: "myKey1",
    age: 22, 
    location: "Delhi",
    email: "ashok@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym])

// console.log(typeof jsUser[mySym])

// jsUser.email = "ashokmorya@gmail.com"
// console.log(jsUser.email)
// Object.freeze(jsUser)
// jsUser.name = "Khushi"
// console.log(jsUser.name)

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())


 