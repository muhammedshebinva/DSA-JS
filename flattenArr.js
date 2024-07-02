const arr=[1,2,3,[4,[5,6]],7,8]

//output=[1,2,3,4,5,6,7,8]
const newarr=[]
function flattenarr(arr,newarr){
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === "number"){
            newarr.push(arr[i])

        }else{
            flattenarr(arr[i],newarr)
        }
    }
    return newarr
}

console.log(flattenarr(arr,[]));