const arr=[1,2,3,4,5,6]
//map
const newarrmap = arr.map((item)=>{
   return item * 2
})

console.log(newarrmap);
//filter
const newarrfilter = arr.filter((x) => x > 3) 
console.log(newarrfilter);

function evennum(x){
    if(x%2==0){
        return x
    }
}

const evenarr=arr.filter((x)=>evennum(x))

console.log(evenarr);

//reduce() to find the sum
const output= arr.reduce(function(acc,curr){
    acc= acc + curr;
    return acc;
},0)

console.log(output);


//max

const output2= arr.reduce(function(acc, cur){
    if(cur>acc){
        acc=cur
    }
    return acc
},0)

console.log(output2);

const max =()=>{
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max;
}

console.log(max());

