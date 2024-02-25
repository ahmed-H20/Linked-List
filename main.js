// that class for represent the full list 
class LinkedList {
    //setup 
    constructor(){
        this.head = null;
        this.size = 0;   
        this.tail = null;
    } 
        
        
    

    
    // Add node in after last element
    append(value){
        let node = new Node(value);
        let current;
        if(!this.head){
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            this.tail = node;
        }
        this.size++;
    }

    // Add node in first linked list
    prepend(value){
        this.head = new Node(value,this.head);
        this.size++;
    }

    // Returns the node at the given index
    at(index){
        let current = this.head;
        let i = 0;        
        while(i<=index){
            if(current){
                if(i == index){
                    return current;                
                }
                ++i;
                current = current.next;
            }
            else{
                return "no nodes";
            }
            
        }   
        
        return null;
    }

    // Removes the last element from the list

    pop(){
        if (!this.head) {
            return;
        }
        let current = this.head;
        let previous = null;
        while(current.next){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size --;
    }

    // Returns true if the passed in value is in the list and otherwise returns false.
    contains(value){
        let current = this.head;
        while(current){            
            if(current.data == value){
                return true
            }
            current = current.next;
        }
        return false;
    }

    // Returns the index of the node containing value, or null if not found.
    find(value){
        let current = this.head;
        let i = 0;
        while(current){            
            if(current.data == value){
                return i;
            }
            current = current.next;
            i++;
        }
        return null;
    }

    // Represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
    toString(){
        let result = '';
        let current = this.head;
        while (current !== null) {
            result += `(${current.data}) -> `;
            current = current.next;
        }
        result += 'null';
        return result;
    
    }
}

class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

const li = new LinkedList();
const node = new Node();
li.prepend(10);
li.prepend(20);
li.prepend(30);
li.prepend(5);
li.append(7);
li.at(1);
console.log(li);
console.log(li.toString());
