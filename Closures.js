// Closure = A function defined inside of another function,
//          the inner function has access to the variables
//          and scope of the outer function.
//          Allow for private variables and state maintenance
//          Used frequently in JS frameworks REact, Vue, Angulat.


//function outer(){

//    let message = "Hello";

  //  function inner(){
    //    console.log(message);
    //}

    //inner();
//}

//outer();


//function createCounter(){

  //  function increment(){
    //    let count = 0;
      //  count ++;
        //console.log(`Count increased to ${count}`);
    //}

    //function getCount(){
      //  return count;
    //}

    //return {increment, getCount};
//}

//const counter = createCounter();

//counter.increment();
//counter.increment();
//counter.increment();
//counter.increment();

//console.log(`The current count is ${counter.getCount()}`);

//----------------------------------------------------------


function createGame(){

    let score = 0;

    function increaseScore(){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};

}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${getScore()}pts`);