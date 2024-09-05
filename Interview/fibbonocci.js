function fibbonocci(n){
    if(n==0 || n==1){
        return n
    }
    if (n==2) return 1

    return fibbonocci(n-2)+fibbonocci(n-1)
}

console.log(fibbonocci(6))


//MEMORIZATOION

const obj = {}

function memorizationfibo(n){
    if(n==0||n==1) return n
    
    if (n==2) return 1

    if(obj[n]) return obj[n]
    else{
         obj[n]= memorizationfibo(n-2)+memorizationfibo(n-1);
         return obj[n]
    }
    
}

console.log(memorizationfibo(10))

