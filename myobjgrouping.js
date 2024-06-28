const data=[
   
    {class:"A",name:"shebin",age:17},
    {class:"A",name:"twinkle",age:17},

    {class:"B",name:"soman",age:17},
    {class:"B",name:"soman",age:17},
    {class:"C",name:"shoshama",age:17},
]

const group = data.reduce(function(acc,curr){
    if(!acc[curr.class]){
        acc[curr.class]=[curr]
    }else{
        acc[curr.class].push(curr)
    }

    return acc
},{})

console.log(group);