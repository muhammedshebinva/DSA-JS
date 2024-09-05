const arr=[[1,2,4],[3,4,5]]

function findLargest(arr){
    let largest = arr[0][0]

    for(let i of arr){
        for(let j of i){
          if (largest < j){
            largest = j
          }
           
        }
    }
    return largest
}

console.log(findLargest(arr));





