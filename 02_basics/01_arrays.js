// // array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["shakitman", "naagraj"]

// console.log(myArr)
// console.log(myArr[0])

// const myArr2 = new Array(1, 2, 3, 4)

// console.log(myHeros[1])
// console.log(myArr2[3])

const myArr = new Array(0,1,2, 3, 4, 5)
// myArr.push(5)
// myArr.push(6)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(0)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(5))

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr) // string

// slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)



