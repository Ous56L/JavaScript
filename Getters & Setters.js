// Getter = special method that makes a property readable
// Setter = special method that makes a property writeable


// validate and modify a value whem reading/writing a property


//class Rectangle{
    //constructor(width, height){
        //this.width = width;
        //this.height = height;
    //}

    //set width(newWidth){
        //if(newWidth > 0){
            //this._width = newWidth;
        //}
        //else{
           // console.error("width must be a positive number");
        //}
   // }

    //set height(newHeight){
        //if(newHeight > 0){
           // this._height = newHeight;
        //}
        //else{
           // console.error("height must be a positive number");
        //}
    //}

    //get width(){
        //return `${this._width.toFixed(1)}cm`;
    //}

    //get height(){
       // return `${this._height.toFixed(1)}cm`;
    //}

    //get area(){
      //  return `${(this._width * this._height).toFixed(1)}cm^2`;
    //}
//}

//const rectangle = new Rectangle(-100000, "pizza");

//rectangle.width = 5;
//rectangle.height = 6;

//console.log(rectangle.width);
//console.log(rectangle.height);


// example #2

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must not be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must not be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must not be a non-negative string");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._lastName + " " + this._firstName;
    }
}

const Person = new Person("Yusei","Fudo",18);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);