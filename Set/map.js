const car = new Map(
[
    [1,'BMW'],
    [2,'Benz'],
    [3,'VW']
]
)

console.log(car.get(1))

for (let value of car){
    console.log(value);
}

car.set(1,'Tata')

console.log(car)

