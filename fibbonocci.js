function fibbo(n){

    const arr=[0,1];

    for(i=2;i<n;i++){

        arr[i]=arr[i-2]+arr[i-1]

    }
    return arr;

}

console.log(fibbo(7));

const cache = {}


function abc(n){
    if(n==0){
        return 0
    }
    if(n==1||n==2){
        return 1
    }
    if(cache[n]){
        return cache[n]
    }else{
        cache[n]=abc(n-2)+abc(n-1)
        return cache[n]
    }
}

console.log(abc(60));

//0 1 1 2 3 5 8..

//3x2x1