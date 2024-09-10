


const p =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello shebin")
    }
    ,3000)
})


async function handlePromise(){
    console.log("hi")
    const val =  p;
    console.log(val)
    console.log("bye")
    const val2 = await p;
    console.log(val2)
}

handlePromise()