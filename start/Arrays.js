//array

const arr = [1,2,3,4,5,6,7]

console.log(arr)

for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

for (let i of arr){
    console.log(i)
}

//filter

//push pop  

let newArr = [1,3]

console.log(newArr)

newArr.push(5)
//pushed
console.log(newArr)

//pop//last nn delete

newArr.pop()
console.log(newArr)

//shift unshift

newArr.shift()
console.log(newArr)

newArr.unshift(2)
console.log(newArr)


const numbers = [3,1,7,9,2,6]
console.log(numbers)
//assending sort

numbers.sort()

console.log(numbers)

numbers.reverse()

console.log(numbers)

console.log(numbers.length)

let a = [1,2,3];
let b = [4,5,6];


let c  = a.concat(b)

console.log(c)

let joined = c.join("|")

console.log(joined)


const cars = ["bmw", "susuki", "benz"]

console.log(cars.toString())


const multpArr = [1,2,3, [4,5,6,7] ,8,9]

console.log(multpArr.flat())

//length, flat, reverse, join, concate, toString












