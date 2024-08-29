const multiArr = [1,2,3,[4,5,6]]

console.log(multiArr[3][0])


//it will remove in between an array with location
multiArr.splice(3,1)

console.log(multiArr)


//find index

const carsArray =  ["bmw", "porsche", "toyota", "nisan", "tata"]

const index = carsArray.indexOf("tata")
console.log(index)


//problem contat 2 array and sort and find largest 3

const arr1 = [10,4,5,62,5,[1,2,3]]
const arr2 = [12,4,3,7,9]


const arr3 = arr1.concat(arr2)
console.log(arr3);


const obj1 = {
    a:1,
    b:2,
    c:3
}

const obj2  = {
    b:4,
    d:5,
}

const obj3 = Object.assign(obj1,obj2)

console.log(obj1)


const arrobj1 = [{a:1, d:3, c:4}]
const arrobj2 = [{b:4,d:5}]




Object.assign(arrobj1[0],arrobj2[0])

console.log("hello",arrobj1)



