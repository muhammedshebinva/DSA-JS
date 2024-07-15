
class myClass {
    constructor(name,age){
        this.name = name;
        this.age =  age
    }

    myClassMethod(){
        console.log('hello this a class')
    }

}

const a = new myClass('shebin', 22);

console.log(a.age)

a.myClassMethod()

