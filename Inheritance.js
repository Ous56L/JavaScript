// Inheritance = allows a new class to inherit properties
//              and methods from an existing class ( parnet -> child)
//               helps with code reusability.


class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";
}
class Hawk extends Animal{
    name = "hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(hawk.alive);

hawk.eat();
hawk.sleep();

rabbit.eat();
rabbit.sleep();
rabbit.run();