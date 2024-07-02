class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.size = 0

    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size ++;
    }
    append(value){
        const node =  new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size ++;
    }
    insert(value, index){
        if(index<0 || index>this.size){
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            let node = new Node(value);
            let prev = this.head;

            for(let i = 0; i < index-1; i++){
                prev = prev.next;
            }
            node.next=prev.next;
            prev.next =  node;
            this.size++
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr = this.head;
            let listvalues = '';

            while(curr){
                listvalues += `${curr.value} `
                curr = curr.next
            }
            console.log(listvalues);
        }
        
    }

    binarytodecimal(){
        let decimalValue = 0;
        let current = this.head;
        while (current) {
            // Shift the existing decimal value one position to the left (multiply by 2)
            decimalValue *= 2;
        
            // Add the current node's data (0 or 1) to the decimal value
            decimalValue += current.data;
        
            // Move to the next node
            current = current.next;
          }
        
          console.log(decimalValue);
          return decimalValue
    }
}

const list =  new linkedList()

// list.print()
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.print()
list.print()
list.append(1);
list.append(0);
list.append(1);
//list.insert(25,2)
list.print()

list.binarytodecimal()
