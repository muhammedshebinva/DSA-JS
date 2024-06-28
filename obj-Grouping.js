const fruits = [
    {
        fruit_name: "Apple",
        fruit_color: "Red",
    },
    {
        fruit_name: "Pomegranate",
        fruit_color: "Red",
    },
    {
        fruit_name: "Grapes",
        fruit_color: "Green",
    },
    {
        fruit_name: "Kiwi",
        fruit_color: "Green",
    },
];

const groupedByColor = {};

for (const fruit of fruits) {
    const color = fruit.fruit_color;
    if (!groupedByColor[color]) {
        groupedByColor[color] = [fruit];
    } else {
        groupedByColor[color].push(fruit);
    }
}

const resultArray = Object.values(groupedByColor);
console.log(resultArray);




///using for each

const data=[
    {
        key:'sample1' ,
        data:'data1'  
    },
    {
        key:'sample2' ,
        data:'data1'  
    },
    {
        key:'sample1' ,
        data:'data2'  
    },
    {
        key:'sample2' ,
        data:'data2'  
    },
    {
        key:'sample3' ,
        data:'data1'  
    },
    {
        key:'sample2' ,
        data:'data3'  
    }
]

//to group the object

const groupedData={}

data.forEach(item=>{
    if(groupedData[item.key]){
        console.log(item.key);
        console.log(item);
        groupedData[item.key].push(item);
    }else{
        groupedData[item.key]=[item];
    }
})

console.log(groupedData);



