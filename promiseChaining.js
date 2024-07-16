
function add(a,b){
    return a+b
}

function mul(product){
    return product*product
}

function div(num){
    return num/10
}

const sum = new Promise((resolve,reject)=>{
    resolve(add(5,5))
})


sum.then((sum)=>{
    console.log(sum);
    return mul(sum)
}).then((value)=>{
    console.log(value);
    return div(value)
}).then((value)=>{
    console.log(value);
})

