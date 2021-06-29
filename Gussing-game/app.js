'use strict'
let secretNumber = Math.trunc(Math.random()*20) + 1;
let highestScore = 0;
let score = 20;

const displayMsg = function(massage){
    document.querySelector('.data').textContent = massage;
}

document.querySelector('.check').addEventListener('click',function() {
    let guess = Number(document.querySelector('.guess').value);

    //when there is no input 
    if (!guess) {
        displayMsg("⛔️ No number!");
    }

    //when the guess is correct
    else if (guess === secretNumber) {
        displayMsg(" 🎉 correct Number...");
        document.querySelector('.correct-number').textContent = secretNumber;
        if (highestScore < score) highestScore = score;
        document.querySelector('.highest-score').textContent = `Highest Score : ${highestScore}`;
        document.querySelector('.container').style.backgroundColor ='#ff7e5f';
        document.querySelector('.container').style.backgroundColor ='#ff7e5f';
        document.querySelector('.check').style.backgroundColor ='#fff';
        document.querySelector('.reset').style.backgroundColor ='#fff';
        document.querySelector('.line').style.backgroundColor ='#fff';
        document.querySelector('.check').style.color ='#000';
        document.querySelector('.reset').style.color ='#000';
    } 

    //when the guess is wrong
    else if (guess!==secretNumber) {
        if(score>0) {
            document.querySelector('.data').textContent = guess > secretNumber? " 📈 too high..." :  " 📉 too low..." ;
            score--;
            document.querySelector('.score').textContent =`Score : ${score}`;    
        }  else {
            displayMsg("💥 You lost the game!" );
            document.querySelector('.score').textContent =`Score : ${0}`;    
        }
    }

});

//reset the game
document.querySelector('.reset').addEventListener ('click',function() {
    score = 20;
    document.querySelector('.score').textContent =`Score : ${score}`;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMsg("Start Guessing...");
    document.querySelector('.correct-number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('.container').style.backgroundColor = '#a1ffce75';
    document.querySelector('.check').style.backgroundColor ='rgb(17, 182, 127)';
    document.querySelector('.reset').style.backgroundColor ='rgb(17, 182, 127)';
    document.querySelector('.line').style.backgroundColor ='rgb(17, 182, 127)';
    document.querySelector('.check').style.color ='#fff';
    document.querySelector('.reset').style.color ='#fff';
    document.querySelector('.secret').style.width = '150px';
})



