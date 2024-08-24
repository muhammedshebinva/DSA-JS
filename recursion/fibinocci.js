function fiboRec(n){
    if(n<2){
        return n
    }

    return fiboRec(n-1)+fiboRec(n-2)
}

console.log(fiboRec(10))