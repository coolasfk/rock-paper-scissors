const computer = document.getElementById('compText');
const result = document.getElementById('result');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const weapon = document.getElementById('.chooseWeapon');
const your_score_display = document.getElementById('your_score');
const comp_score_display = document.getElementById('comp_score');
const body = document.getElementsByTagName('body');



let myChoice = "paper";
let your_score = 0
let comp_score = 0


function you_score(){
    your_score ++
    your_score_display.innerText = your_score 
}

function comp_scores(){
    comp_score ++
    comp_score_display.innerText = comp_score 
}






    switch(myChoice) {
        
          case 'paper':
          paper.addEventListener('click', paper_choice)
          case 'rock':
          rock.addEventListener('click', rock_choice)
          case 'scissors':
          scissors.addEventListener('click', scissors_choice)
        
          function paper_choice(){
            myChoice = 'paper'
            paper.removeEventListener('click', playGame, true)
            scissors.removeAttribute('style')
            rock.removeAttribute('style')
            paper.style.border = "1px dotted #774c77";
            playGame()
            console.log(myChoice)
          }










          
          function scissors_choice(){
           
             myChoice = "scissors"
            rock.removeAttribute('style')
            paper.removeAttribute('style')
            scissors.style.border = "1px dotted #774c77";   
            playGame()
            console.log(myChoice)        
          }

          function rock_choice(){
            myChoice = "rock"
            scissors.removeAttribute('style')
            paper.removeAttribute('style')
            rock.style.border = "1px dotted #774c77";
            playGame()
            console.log(myChoice)
          }



function playGame() {
    
    
    
 const list = ['paper', 'rock', 'scissors']  

    if (your_score >=4){
    result.innerText = `Congrats! You won 9 to ${comp_score}!`
    addBtn()
    return;
    
    
    }
    
    if (comp_score  >= 4){
    result.innerText = `Game over! You lost ${your_score} to 9!`
    addBtn()
    return;
    
    }

    const compChoice = list[Math.floor(Math.random() * list.length)];
    computer.innerText = compChoice;
        
     if(myChoice == compChoice) {
        result.innerText = `It's a draw, try again!`
        
         } else if (myChoice == "scissors" && compChoice == "paper" || myChoice == "paper" && compChoice == "rock" || myChoice == "rock" && compChoice == "scissors" ){
        result.innerText = 'Congrats! You WON!'
        you_score()
        } else {
        result.innerText = 'Computer beat you up, you loser!'
        comp_scores()
         }
     }
    }



function addBtn(){
    btn = document.createElement('button')
    btn.className = 'play_again'
    btn.innerText = "play again"
    document.body.appendChild(btn)
    paper.removeEventListener('click', paper_choice);
    rock.removeEventListener('click', rock_choice);
    scissors.removeEventListener('click', scissors_choice); 
    btn.addEventListener('click',() => {
    document. location. reload() 
})

}







