
const obj={}
function addnum(n){
    if(!obj[n]){
        obj[n]=n+10
        console.log("calculating");
        return obj[n]
    }else{
        console.log("returning from obj");
        return obj[n]
    }    
}
console.log(addnum(1)); 
console.log(addnum(10)); 
console.log(addnum(10)); 




function fibo(n){
    if(n==0 || n== 1){
        return n
    }
    if(n==2){
        return 1
    }
   return fibo(n-2) + fibo(n-1)
}

console.log(fibo(6));



const cache={}
function memofibo(n){
    if(n==0||n==1){
        return n
    }
    if (n==2) return 1

    if(cache[n]) return cache[n]
    else{
        cache[n]=memofibo(n-2)+memofibo(n-1)
        return cache[n]
    }
}

console.log(memofibo(100));


const result={}
function add2(a,b){
    if(result[a+"_"+b]){
        console.log("from cache");
        return result[a+"_"+b]
    }else{
        console.log("calculating ...");
        result[a+"_"+b]=a+b;
        
        return result[a+"_"+b]
       
    }
    
}

console.log(add2(1,7));
console.log(add2(1,7));
console.log(add2(1,7));
