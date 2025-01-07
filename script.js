// Write a function that will randomly return a string of either rock, paper or scissors
// use math.random function to pick a random number
// if number is lower than 33 its rock if lower that 66 then paper if lower than 100 then scissors
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
// a function where we ask user to input rock paper or scissors
// choice will be stored in variable userInput
// if choice is not rock paper or scissors ask user again for input

function getHumanChoice(){
    const userInput = prompt("Choose rock paper or scissors").toLowerCase()
    if(userInput === "rock" || userInput === "paper" || userInput ===  "scissors"){
        return userInput
    }else{
        alert("that`s not right input rock paper or scissors") 
    }
}
// create variables that will hold the score
// create function that takes in returns of function getHumanChoice and getComputerChoice 
// decide which one wins with if statements
// increment eather the humanScore or computerScore

// function playRound(humanChoice,computerChoice){
//     if(computerChoice === "rock" && humanChoice === "scissors"){
//         console.log("You lose! Rock beats Scissors!")
//         computerScore++
//     }else if(computerChoice === "paper" && humanChoice === "rock"){
//         console.log("You lose! Paper beats Rock!")
//         computerScore++
//     }else if(computerChoice === "scissors" && humanChoice === "paper"){
//         console.log("You lose! Scissors beats Paper!")
//         computerScore++
//     }else if(computerChoice === "rock" && humanChoice === "paper"){
//         console.log("You Win! Paper beats Rock!")
//         humanScore++
//     }else if(computerChoice === "paper" && humanChoice === "scissors"){
//         console.log("You Win! Scissors beats Paper!")
//         humanScore++
//     }else if(computerChoice === "scissors" && humanChoice === "rock"){
//         console.log("You Win! Rock beats Scissors!")
//         humanScore++
//     }else{
//         console.log("It`s a draw!")
//     }
// }


// function playGame that calls on function playRound untill either human or computer has 5 points

function playGame(){
    let humanScore = 0
    let computerScore = 0   
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
        playRound(getHumanChoice(),getComputerChoice())
        playRound(getHumanChoice(),getComputerChoice())
        playRound(getHumanChoice(),getComputerChoice())
        playRound(getHumanChoice(),getComputerChoice())
        playRound(getHumanChoice(),getComputerChoice())

        if (humanScore > computerScore){
            console.log("You win!")
        }else if (computerScore > humanScore){
            console.log("You lose!")
        }else{
            console.log("It`s a draw!")
        }
}

playGame()