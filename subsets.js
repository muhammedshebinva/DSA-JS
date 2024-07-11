arr=[1,2,3]

function subset(arr){
    let temp=[]
    let result = []

    function recsub(arr,i){
        if(arr.length === i ){
            return result.push([...temp])
        }
        temp.push(arr[i]);
        recsub(arr,i+1);
        temp.pop();
        recsub(arr,i+1)
    }

    recsub(arr,0)
    return result
}

console.log(subset(arr));