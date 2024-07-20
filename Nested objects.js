// Nested objects = Objects inside of other objects.
//                  Allows you to represent more complex data structures
//                  child object is enclosed by a parent object

//                 Person{Address{}, ContactInfo{}}
//                 ShoppingCart{keyboard{}, Mouse{}, Monitor{}}


//const person = {
    //fullName: "Monkey.D.Luffy",
    //age: 20,
    //isPirate: true,
    //nakama: ["zoro","nami","sanji"],
    //address: {
        //Street: "123 fusha",
        //village: "fusha",
        //country: "East Blue",
    //}

//}

//console.log(person.fullName);
//console.log(person.age);
//console.log(person.isPirate);
//console.log(person.nakama[2]);
//console.log(person.address.village);



class Person{
    constructor(name, age , ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}


class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}


const person1 = new Person("Judai", 18, "123 Duel Academeia" ,"Domino City" ,"Japan");




const person2 = new Person("Yusei" , "19" ,"Stardust Street" ,"Neo Domino City" ,"Tokyo");


console.log(person2.address);