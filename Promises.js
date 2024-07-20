// Promises = An Object that manages asynchronous operations.
//            Wrap a Promise Object around {asynchronous code}
//            "I promise to return a value"
//            PENDING -> RESOLVED or REJECTED
//            New Promise((resolve, reject) => {asynchronous code})

//   Do THESE CHROES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT TRASH


function walkDog(callback){

    setTimeout(() => {
        console.log("You walk the dog 🐕");
        callback();
    },1500);
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen 🍽️🧹🧼");
        },2500);
    
    });
}

function takeOutTrash(){ 

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("You take out the trash 🗑️");
        },500);
    });
}


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")});