function fibbo(n){

    const arr=[0,1];

    for(i=2;i<n;i++){

        arr[i]=arr[i-2]+arr[i-1]

    }
    return arr;

}

console.log(fibbo(7));