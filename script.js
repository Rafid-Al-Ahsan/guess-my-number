'use strict';

//1. Add eventListener to the check button
//2. Covert the value from the input field from string to a number and store it in a guess variable
//3. write the conditions if no number is present, if the guess is correct and if the guess is wrong
//4. Implement the score funtionality
//5. Implement reset button

function displayMessage (message){
    document.querySelector('.message').textContent= message;
}

let score = 20;
let highScore = 0;

let randomNumber = Math.trunc(Math.random()*20)+1;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    //Empty number is 0, and 0 is a falsy value

    if(!guess) displayMessage('⛔ No Number');

    else if(guess === randomNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = guess;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    
    else if(guess !== randomNumber){
        guess > randomNumber ?  document.querySelector('.message').textContent = '📈 Too High!' : document.querySelector('.message').textContent = '📉 Too Low!';
        if(score >1){
           score--;
           document.querySelector('.score').textContent = score;
        }

        else{
            document.querySelector('.message').textContent = '💥 You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }

     
});

document.querySelector('.again').addEventListener('click', function(){
    randomNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});