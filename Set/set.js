
const mySet = new Set([1,2,3,4,5,5])

console.log(mySet)

const leters = new Set()

leters.add('a')
leters.add('b')
leters.add('c')

console.log(leters);

console.log(leters.has('a'));

for(const x of leters){
    console.log(x);
}
leters.forEach((value)=>{
    console.log(value);
})
