
// function getHumanChoice(){
//     const userInput = prompt("Choose rock paper or scissors").toLowerCase()
//     if(userInput === "rock" || userInput === "paper" || userInput ===  "scissors"){
//         return userInput
//     }else{
//         alert("that`s not right input rock paper or scissors") 
//     }
// }
function playGame(){
    let humanScore = 0
    let computerScore = 0
    let gameButtons = document.querySelector("div")
    gameButtons.addEventListener("click", (event) =>{
        let target = event.target
        console.log(target.id)
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
            if (humanScore > computerScore){
                console.log("You win!")
            }else if (computerScore > humanScore){
                console.log("You lose!")
            }else{
                console.log("It`s a draw!")
            }
    })
}
playGame()