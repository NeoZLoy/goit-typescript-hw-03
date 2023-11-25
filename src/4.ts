class Key{
    constructor(protected signature: number){
        signature = Math.random();
    }

    getSignature():number {
        return this.signature
    }
}

class Person {
    constructor(private key: Key){
        this.key = key
    }

    getKey():Key{
        return this.key
    }
}


abstract class House{
    constructor(protected key: Key){
        this.key = key;
    }
    protected door : boolean = false;
    protected tenants :Person[] = [];
    comeIn(person:Person){
        if(this.door){
            this.tenants.push(person)
        }
    }
    abstract openDoor(key:Key):void
}

class MyHouse extends House{
   constructor(key: Key){
    super(key)
   }

   openDoor(key: Key): void {
       if(key.getSignature() === this.key.getSignature()){
        this.door = true;
       }
   }
}


const key = new Key(3);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};