
// function getHumanChoice(){
//     const userInput = prompt("Choose rock paper or scissors").toLowerCase()
//     if(userInput === "rock" || userInput === "paper" || userInput ===  "scissors"){
//         return userInput
//     }else{
//         alert("that`s not right input rock paper or scissors") 
//     }
// }

// create element in index
// selec element in js with query selector
// add textcontent to element with current score at the end of click event

function playGame(){
    let humanScore = 0
    let computerScore = 0
    const gameButtons = document.querySelector("div")
    const gameResult = document.querySelector("#show-result")
    gameButtons.addEventListener("click", (event) =>{
        let target = event.target
        function getComputerChoice(){
            let pick = Math.random() * 100
            if(pick <= 33){ 
                return "rock"
            }else if (pick <= 66){
                return "scissors"
            }else{ 
                return "paper"
        }
        }
        function playRound(humanChoice,computerChoice){
            if(computerChoice === "rock" && humanChoice === "scissors"){
                computerScore++
                console.log("You lose! Rock beats Scissors!")
            }else if(computerChoice === "paper" && humanChoice === "rock"){
                computerScore++
                console.log("You lose! Paper beats Rock!")
            }else if(computerChoice === "scissors" && humanChoice === "paper"){
                computerScore++
                console.log("You lose! Scissors beats Paper!")
            }else if(computerChoice === "rock" && humanChoice === "paper"){
                humanScore++
                console.log("You Win! Paper beats Rock!")
            }else if(computerChoice === "paper" && humanChoice === "scissors"){
                humanScore++
                console.log("You Win! Scissors beats Paper!")
            }else if(computerChoice === "scissors" && humanChoice === "rock"){
                humanScore++
                console.log("You Win! Rock beats Scissors!")
            }else{
                console.log("It`s a draw!")
            }
        }
        switch(target.id){
            case "rock":
                playRound("rock",getComputerChoice())
                break;
            case "paper":
                playRound("paper",getComputerChoice())
                break;
            case "scissors":
                playRound("scissors",getComputerChoice())
                break;
        }
        gameResult.textContent = `Human ${humanScore} - ${computerScore} Computer`
        if (humanScore > computerScore && (humanScore === 5 || computerScore === 5)){
            gameResult.textContent = `${humanScore} - ${computerScore} - Human wins`
            humanScore = 0
            computerScore = 0
        }else if (computerScore > humanScore && humanScore === 5 || computerScore === 5){
            gameResult.textContent = `${humanScore} - ${computerScore} - Computer is the winner`
            humanScore = 0
            computerScore = 0
        }
    })
}
playGame()