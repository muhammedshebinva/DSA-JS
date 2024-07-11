
function res(n){
let res=1
for(let i=2;i<=n; i++){
    res = res * i;
}
return res
}


console.log(res(6));

function factorial(n){
if(n===0 || n===1){
    return 1
}else{
return n * factorial(n-1)
}
}

console.log(factorial(6));
