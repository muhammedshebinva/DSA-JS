const person1 = {
    isHuman:false,
    display: function(){
        console.log(`${this.name} is human ${this.isHuman}`)
    }
}

const me1  = Object.create(person1)

me1.name = "shebin";
me1.isHuman = true;

me1.display()


const person = {
    isHuman:false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();
  
  