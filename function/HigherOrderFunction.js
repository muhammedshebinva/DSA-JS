//function for finding area circumference with array of radios

const radios = [2,3,4,5,9]

const area = function(radios){
    return  Math.PI * (radios * radios)
}

const circumferance = function(R){
    return 2 * (Math.PI * R)
}

console.log(radios.map(circumferance))


const calculate = (radios,logic)=>{
    const result = []
    for(let i =0; i< radios.length; i++){
        result.push(logic(radios[i]))
    }
    console.log(result)
}


// Array.prototype.calculate = function(logic){
//     const result = []
//     for(let i =0; i< this.length; i++){
//         result.push(logic(this[i]))
//     }
//     return result
// }

calculate(radios,area)


//a function wich returns or have a functionas an argument is known as Higer order function
