const arr = [
    {firstname:"muhammed", lastname:"shebin", age:22},
    {firstname:"twinkle", lastname:"s", age:22},
    {firstname:"adhil", lastname:"basheer", age:17},
    {firstname:"abdul", lastname:"basheer", age:45}
]

const output= arr.filter(x=> x.age<20).map(x=>x.firstname)
console.log(output);

console.log(arr.map(x=> x.firstname));

const out2= arr.reduce(function(acc,curr){
    if(curr.age<20){
        acc.push(curr.firstname)
    }
    return acc

},[])

console.log(out2);