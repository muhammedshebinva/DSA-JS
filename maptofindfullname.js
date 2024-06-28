const arr = [
    {firstname:"muhammed", lastname:"shebin", age:22},
    {firstname:"twinkle", lastname:"s", age:22},
    {firstname:"adhil", lastname:"basheer", age:17},
    {firstname:"abdul", lastname:"basheer", age:45}
]

const fullname=[]
arr.map((item)=>{
    fullname.push(item.firstname+" "+item.lastname)
})

console.log(fullname);

const fullnames=arr.map(item => item.firstname+" "+item.lastname)
console.log(fullnames);

//reduce to pass objects age with count

const ageless = arr.reduce(function(acc,cur){

  if(acc[cur.age]){
    acc[cur.age]=++acc[cur.age]
  }else{
    acc[cur.age]=1;
  }
  return acc

}, {})

console.log(ageless);

const newobj= {};
for (let i=0;i<arr.length;i++){
    if(newobj[arr[i].age]){
    newobj[arr[i].age]+=1
    }else{
        newobj[arr[i].age]=1;
    }
}

