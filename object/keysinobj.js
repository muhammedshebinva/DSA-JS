const obj = {
    red:"#ff0000",
    green : "#00ff00",
    blue : "fffffff"
 }

for (let key in obj){
    console.log(key)
}

//printing each  values;


for (const [key,values] of Object.entries(obj)){
    console.log(values)
}

//object constructor
let car = new Object()


    car.model = "m5"
    car.brand = "BMW",
    car.Year = 2015,
    car.power = "575hp"


for (let [key,value] of Object.entries(car)){
    console.log(key, value)
}

