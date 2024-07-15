
const fs = require('fs');


const content = fs.readFileSync('./data.json');

console.log(JSON.parse(content));
const JsonData =  JSON.parse(content)

const result  = JsonData.reduce((acc,curr)=>{
    console.log(curr.age)
    acc = acc+curr.age
    return acc
},0)

console.log(typeof(JsonData))



const newResult = JsonData.filter(myFunction)

function myFunction(value,index,array){
    console.log(value)
    return value.age > 18;
}

console.log(newResult)

