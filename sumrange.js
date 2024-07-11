const arr = [1,2,3,4,5,6,7,8];

//by using for
function findSum(rangeArr){
    start = Math.min(rangeArr[0],rangeArr[1])
    end = Math.max(rangeArr[0],rangeArr[1])
    total=0
    for(let i=start; i<=end; i++){
        total = total + arr[i]
    }
    return total
}
console.log(findSum([0,7])); 

//slice and reduce
const newArr = arr.slice(0,2+1)
console.log(newArr);
const result = newArr.reduce((acc,curr)=>{
     acc = acc + curr
     return acc
},0)
console.log(result);

//prefix arr
function prefixSum(arr) {
    const prefixArray = new Array(arr.length).fill(0); // Initialize with zeros
  
    // Calculate the prefix sum for each element
    for (let i = 1; i < arr.length; i++) {
      prefixArray[i] = prefixArray[i - 1] + arr[i];
    }
  
    return prefixArray;
  }
  
  // Example usage
  const myArray = [10, 20, 30, 40];
  const prefixArray = prefixSum(myArray);
  
  console.log(prefixArray); // Output: [10, 30, 60, 100]
  
  // Get the sum of elements from index 1 to 3 (inclusive)
  const sumFrom1To3 = prefixArray[3] - prefixArray[0]; // 100 - 10 = 90
  console.log(sumFrom1To3);
  console.log(prefixArray);

  function findSumof(start,end){
    if(start==0){
        console.log("hello");
        return prefixArray[end]
       
    }
    let result = prefixArray[end]-prefixArray[start-1]
    return result
  }

  console.log(findSumof(0,3));

  



