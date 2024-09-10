const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Charlie", age: 10 }
  ];

  //sort by age

function sortBykey(arr,key){
    return arr.sort((a,b)=>a[key]-b[key])
}

const ageSort = sortBykey(people,"age");

console.log(ageSort);
