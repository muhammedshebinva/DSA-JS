const arr = [1,2,3,4,5,6,7,8]

function even(x){
    if(x%2===0){
        return x
    }
}
const newarr= arr.filter((x)=> even(x))
console.log(newarr);