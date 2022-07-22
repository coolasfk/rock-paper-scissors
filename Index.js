
const computer = document.getElementById('compText');
const result = document.getElementById('result');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');

const list = ['paper', 'rock', 'scissors']

paper.addEventListener('click', () => {
    rock.removeAttribute("style");
    scissors.removeAttribute("style");
    paper.style.border="dotted #774c77 1px";
    playGame1()

})


scissors.addEventListener('click', () => {
    rock.removeAttribute("style");
    paper.removeAttribute("style");
   scissors.style.border="dotted #774c77 1px";
    playGame2()

})

rock.addEventListener('click', () => {
    paper.removeAttribute("style");
    scissors.removeAttribute("style");
    rock.style.border="dotted #774c77 1px";
    playGame3()

})


function playGame1 () {
    myChoice = 'paper'

   
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

    function playGame2 () {
        myChoice = 'scissors'
    
       
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

        function playGame3 () {
            myChoice = 'rock'
        
           
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


















