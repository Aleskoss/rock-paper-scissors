function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3)
  if(randomNumber === 0){
    return "rock"
  }else if(randomNumber === 1){
    return "paper"
  }else if(randomNumber === 2){
    return "scissors"
  }
}
function getUserChoice(){
  let userChoice = prompt("Rock Paper or Scissors, what will you choose to play?")
  return userChoice
}
function playGame(){
  let computerScore = 0
  let humanScore = 0
  function playRound(computerChoice, userChoice){
    let newComputerChoice = computerChoice()
    let newUserChoice = userChoice()
    if(newUserChoice.toLowerCase() === "rock" && newComputerChoice === "scissors" 
    || newUserChoice.toLowerCase() === "paper" && newComputerChoice === "rock" 
    || newUserChoice.toLowerCase() === "scissors" && newComputerChoice === "paper"){
      console.log("Human wins")
      humanScore += 1
    }else if(!(newUserChoice.toLowerCase() === "rock" && newComputerChoice === "scissors" 
    || newUserChoice.toLowerCase() === "paper" && newComputerChoice === "rock" 
    || newUserChoice.toLowerCase() === "scissors" && newComputerChoice === "paper")){
      console.log("Computer wins")
      computerScore += 1
    }else{
      console.log("It`s a draw")
    }
  }
  playRound(getComputerChoice,getUserChoice)
  playRound(getComputerChoice,getUserChoice)
  playRound(getComputerChoice,getUserChoice)
  playRound(getComputerChoice,getUserChoice)
  playRound(getComputerChoice,getUserChoice)
  if(humanScore > computerScore){
    console.log(`Human is the winner with a score of\nHuman ${humanScore} - ${computerScore} Computer`)
  }else{
    console.log(`Computer is the winner with a score of\nHuman ${humanScore} - ${computerScore} Computer`)
  }
}
playGame()