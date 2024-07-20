// (THIS) method = refrence the object where THIS used 
//                (the object depends on the immediate context)
//                person.name = this.me


const person1 = {
    name: "Yugi",
    favHobb: "Dual Monsters",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    play: function(){console.log(`${this.name} is playing ${this.favHobb}`)},
}

const person2 = {
    name: "jack",
    favfood: "Ramen",
    sayHello: function(){console.log(`Hey! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favfood}`)},
}

person1.play();
person2.eat()