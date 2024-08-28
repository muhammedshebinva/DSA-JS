//funtions
//with out argument witgout return value
function display(){
    console.log("hello world")
}

display()

// 4 types 
//with argement without return

function displayTwo(value){
    console.log("value:",value)
}

displayTwo("abina")

//with argument with return

function displayThree(value){
    let product = value * 10
    return product
}

let pro =  displayThree(10)

console.log("pro", pro)

//without arg with retun value

function displayFour(){
    let value = 10;
    return value
}

let sss = displayFour()
console.log(sss)



