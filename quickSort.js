function swap(arr,start,end){
    let temp = arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
}
function findPivot(arr,start,end){
    let i=start;
    pivot = arr[end];
    for(let j=start;j<end;j++){
        if(arr[j]>pivot){
            swap(arr,j,i);
            i++;
        }
    }
    swap(arr,i,end);
    return i;

}
function quickSort(arr,start,end){
    if(start<end){
        let pivot = findPivot(arr,start,end);
        quickSort(arr,0,pivot-1);
        quickSort(arr,pivot+1,end);
    }

}


let arr = [-2,5,-6,1,5,3]

quickSort(arr,0,arr.length-1);
console.log(arr)





