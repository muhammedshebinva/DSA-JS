

function binarySearch(arr, target){
    let left=0;
    let right=arr.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(target===arr[mid]){
            return mid
        }
        if(target<arr[mid]){
            right=mid-1;
        }else{
            left=mid+1
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7],5));

//with recursion

function binarySearchRecursion(arr, target){
    
   return search(arr,target,0,arr.length-1)

}

function search(arr,target,leftIndex, rightIndex){

    if(leftIndex>rightIndex){
        return -1
    }

    let midIndex=Math.floor((leftIndex+rightIndex)/2);

    if(target===arr[midIndex]){
        return midIndex;
    }

    if(target<arr[midIndex]){
        return search(arr,target,leftIndex,midIndex-1)
    }else{
       return search(arr,target,midIndex+1,rightIndex)
    }
}
console.log(binarySearchRecursion([1,2,3,4,5,6,7],5));