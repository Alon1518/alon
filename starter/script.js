'use strict';
/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!'
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10
*/

let secretNumber = Math.trunc(Math.random()*20) +1
let score = 20
let highScore = 0


//document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value)
console.log(guess)

//when there is no number written
if(! guess){
    document.querySelector('.message').textContent = 'Where is the Number? Dummy!'

//when the number is correct
} else if(guess === secretNumber){
    document.querySelector('.message').textContent = 
    '🟢✔️Correct number lets goo!!!'
    document.querySelector('.number').textContent = secretNumber

document.querySelector('body').style.backgroundColor = '#60b347'

document.querySelector('.number').style.width = '30rem'

if (score > highScore){
    highScore = score
    document.querySelector('.highscore').textContent = highScore
}

//when the number is to high
}else if (guess > secretNumber){
    if (score > 1){
        document.querySelector('.message').textContent = 
        'Not the correct number,(guess is too high) try again...'
    score--
    document.querySelector('.score').textContent = score

} else {
        document.querySelector('.message').textContent = 
        'Score reached 0, YOU LOST! ):'
    }
//when the number is too low
} else if (guess < secretNumber){
    if (score > 1){
    document.querySelector('.message').textContent = 'Not the correct number,(guess is too low) try again...'
    score--
    document.querySelector('.score').textContent = score
}else {
    document.querySelector('.message').textContent = '🔴❌Score reached 0, YOU LOST! ):'
}
}
 })

 /*JavaScript in the Browser: DOM and Events
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem
    */

    document.querySelector('.again').addEventListener('click', function(){
        score = 20
        secretNumber = Math.trunc(Math.random()*20) +1
        document.querySelector('.message').textContent = 'Yalla guess!'
        document.querySelector('.number').textContent = '?'
        document.querySelector('.score').textContent = score
        document.querySelector('.guess').value = ''
        document.querySelector('body').style.backgroundColor = '#440ddb'
        document.querySelector('.number').style.width = '15rem';
    })
    
    