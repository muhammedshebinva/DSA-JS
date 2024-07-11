function goTolucnch(person){
    console.log(person);
    if(person===5) return true
    return goTolucnch(person+1)
}

console.log("outcome:",goTolucnch(1));

const arr= [1,2,3,4]

function multiply(arr){
    if(arr.length==0) return 1
    else return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
}

console.log(multiply(arr));

function factorial(n){
    if(n===0) return 1
    else{
    return n*factorial(n-1)
    }
}

console.log(factorial(5));

//range array creation

function createRangeArr(start,end){
    if(end<start){
        return []
    }else{
        const arr=createRangeArr(start,end-1);
        arr.push(end)
        return arr
    }
}

console.log(createRangeArr(1,5));

//palindrom
// function reversed(){


// let reversed;

// function palindrom(n){
//     if(n===0) return reversed
//     console.log(n);
//     reversed = reversed + (n%10);
//     n=Math.floor(n/10)
//     return palindrom(n)
// }
// reversed = palindrom(121)
// console.log("reversed",reversed);

// }

// reversed()

function reverseNumber(num) {
    // Handle negative numbers (optional)
    if (num < 0) {
      return -1 * reverseNumber(Math.abs(num)); // Reverse absolute value and prepend negative sign
    }
  
    // Base case: Single digit or zero
    if (num === 0 || Math.floor(num / 10) === 0) {
      return num;
    }
  
    // Recursive case: Extract last digit and append it to the reversed number
    const lastDigit = num % 10;
    const reversed = reverseNumber(Math.floor(num / 10)) * 10 + lastDigit;
    return reversed;
  }
  const reversed = reverseNumber(-123);
  console.log(reversed);
  // Example usage
  //const testNumbers = [123, -456, 0, 98765];
  
//   for (const testNum of testNumbers) {
//     const reversed = reverseNumber(testNum);
//     console.log(`Original: ${testNum}, Reversed: ${reversed}`);
//   }


  
