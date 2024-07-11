
// const obj = {}
// function fibo(n){
//     if(n==0){
//         return 0
//     }
//     if(n==1 || n==2){
//         return 1
//     }

//     if(obj[n]){
//         return obj[n]
//     }else{
//         obj[n]=fibo(n-2)+fibo(n-1)
//         return obj[n]
//     }

    
// }

// console.log(fibo(100));

//console.log("hello");

// const message = setTimeout(()=>{
//     console.log("shebin")
// },1000)

/////

// console.log("start");

// function sample(name,call){
//     setTimeout(()=>{
//         call(name)
//     },1000)
    
// }

// const message = sample("shebin",(message)=>{
//     console.log(message);
// })


// console.log("end");


const promise = new Promise((resolve,reject)=>{
    const result = true;
    if(result) resolve("hello")
    else reject(new Error("this is a promise error"))
})

promise.then((m)=>{
    console.log(m);
}).catch((e)=>{
 console.log(e);
})