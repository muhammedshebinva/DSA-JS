
//obj litteraral
const obj1 = {
    firstName:'shebin',
    lastName:'vs',
    place:'wayand'
}

obj1.age = 22;

console.log(obj1)

//new key

const obj2 = new Object();

obj2.firstName = 'adhil'
obj2.lastName = 'basheer'

console.log(obj2)

//constractor
class person{
    constructor(name,place,age){
        this.name = name;
        this.place = place;
        this.age  = age;
       }
    }


person.prototype.add=function(){
   console.log(this.name+this.place);
} 

const obj3  = new person('shami', 'wayanad', 43)
obj3.add()

console.log(obj3);


// function constructor
function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}
// adding calculateAge() method to the Prototype property
Person.prototype.calculateAge = function () {
    console.log('The current age is: ' + (2019 - this.yearOfBirth));
}
console.log(Person.prototype);

// creating Object Person1
let Person1 = new Person('Jenni', 'clerk', 1986);
console.log(Person1)
let Person2 = new Person('Madhu', 'Developer', 1997);
console.log(Person2)

Person1.calculateAge();
Person2.calculateAge();


