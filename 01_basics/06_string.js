const name = "ashok"
const repoCount = 6

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("ashok-ok-cam")
console.log(gameName)

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(3))

// console.log(gameName.indexOf('o'))

// -----------------------mdn.docx----------------------

const newString = gameName.substring(0,5)   // take neg value as 0
console.log(newString)

const anotherString = gameName.slice(-8, -3)
console.log(anotherString)

const newStringOne = "   Ashok   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://ashok.com/ashok%20maurya"

console.log(url.replace('%20', '-'))

console.log(url.includes('ashok'))

console.log(gameName.split('-'))

