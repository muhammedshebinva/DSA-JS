const myFunction = {
    fullname:function(fname,lname){
        return this.fname+this.lname
    }
}

const person1={
    fname:'adhil',
    lname:'basheer'
}

let data = myFunction.fullname('shebin ','vs')

console.log(data)

data = myFunction.fullname.call(person1)

console.log(data);