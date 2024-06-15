// Dates

// let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof Date)

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate)

// console.log(myCreatedDate.toDateString())


let myNewDate = new Date("01-31-2023")
console.log(myNewDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // in seconds

let newDate = new Date()
console.log(newDate.getFullYear())

console.log(newDate.getMonth() + 1)

// `${nweDate.getDay()} and the time`

newDate.toLocaleString('Dafault', {
    weekday: "long",
    
})


