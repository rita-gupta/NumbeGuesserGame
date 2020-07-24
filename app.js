//GAME FUNCTION
// - Player must guess a number betwween min and max
// - Player gets certain amount of guesses
/// - Notify player of guesses remainning
/// - Notify the player of the correct answer if loose
//-   Let player choose to play again



// Game Value

let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

    // UI Elements
    const game =document.querySelector("#game"),
          minNum =document.querySelector(".min-num"),
          maxNum =document.querySelector(".max-num"),
          guessBtn =document.querySelector("#guess-btn"),
          guessInput =document.querySelector("#guess-input"),
          message =document.querySelector(".message");




    // Assign UI min and max
    minNum.textContent = min;
    maxNum.textContent = max;

//play again event listener
game.addEventListener("mousedown", function(e){
if(e.target.className === "play-again"){
    window.location.reload();
}

});

//listen for guess
guessBtn.addEventListener("click", function(){
let guess = parseInt(guessInput.value);

//Validate
if(isNaN(guess) || guess<min || guess>max){
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
}

//Check if won
if(guess===winningNum){
    //game over -  won 

    gameOver(true, `${winningNum} is correct, YOU WIN..`)


}else{

// wrong number
guessesLeft -= 1;
if(guessesLeft===0){
    // game overr - lost
gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);


}else{
//game continues- answer wrong

//chnage border color
guessInput.style.borderColor = "red";

//clear input
guessInput.value = "";

//tell user its a wrong number
setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");

}
}
});

//Game Over 
function gameOver(won, msg){

let color; 
won === true ? color = "green" : color = "red";
    //Desabled input
guessInput.disabled =true;
//chnage border color
guessInput.style.borderColor = color;
//set message color
message.style.color = color;

//set message when won
setMessage(msg);


//play again?

guessBtn.value = "Play Again";
guessBtn.className += "play-again";
}

//get winning number
function getRandomNumber(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}


// set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}



