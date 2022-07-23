const computer = document.getElementById('compText');
const result = document.getElementById('result');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');

let myChoice = "paper";

    switch(myChoice) {
        
          case 'paper':
          paper.addEventListener('click', () => {
              myChoice = "paper"
              playGame()
              console.log(myChoice)
          })
          case 'rock':
          rock.addEventListener('click', () => {
              myChoice = "rock"
              playGame()
              console.log(myChoice)
          })
          case 'scissors':
          scissors.addEventListener('click', () => {
              myChoice = "scissors"
              playGame()
              console.log(myChoice)
          })
        

const list = ['paper', 'rock', 'scissors']  

function playGame() {

    const compChoice = list[Math.floor(Math.random() * list.length)];
    computer.innerText = compChoice;
        
     if(myChoice == compChoice) {
        result.innerText = `It's a draw, try again!`
        result.style.color = "white";
         } else if (myChoice == "scissors" && compChoice == "paper" || myChoice == "paper" && compChoice == "rock" || myChoice == "rock" && compChoice == "scissors" ){
        result.innerText = 'Congrats! You WON!'
         result.style.color = "white";
        } else {
        result.innerText = 'Computer beat you up, you loser!'
        result.style.color = "white";
         }
     }
    }















