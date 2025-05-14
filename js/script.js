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
function playGame(){
  let computerScore = 0
  let humanScore = 0
  let scoreBoard = document.querySelector("#score")
  document.addEventListener(`click`, (event) => {
    let target = event.target
    switch(target.id){
      case "rock":
        playRound(getComputerChoice,"rock")
        showScoreBoard(computerScore,humanScore)
        break;
      case "paper":
        playRound(getComputerChoice,"paper")
        showScoreBoard(computerScore,humanScore)
        break;
      case "scissors":
        playRound(getComputerChoice,"scissors")
        showScoreBoard(computerScore,humanScore)
        break;
    }
    if(humanScore >= 5 || computerScore >= 5){
      if(humanScore > computerScore){
        scoreBoard.textContent = "Human is the winner"
        computerScore = 0
        humanScore = 0
      }else{
        scoreBoard.textContent = "Computer wins yaay!"
        computerScore = 0
        humanScore = 0
      }
    }
  })
  function playRound(computerChoice, userChoice){
    let newComputerChoice = computerChoice()
    let newUserChoice = userChoice
    if(newUserChoice.toLowerCase() === "rock" && newComputerChoice === "scissors" 
    || newUserChoice.toLowerCase() === "paper" && newComputerChoice === "rock" 
    || newUserChoice.toLowerCase() === "scissors" && newComputerChoice === "paper"){
      humanScore += 1
    }else if(!(newUserChoice.toLowerCase() === "rock" && newComputerChoice === "scissors" 
    || newUserChoice.toLowerCase() === "paper" && newComputerChoice === "rock" 
    || newUserChoice.toLowerCase() === "scissors" && newComputerChoice === "paper")){
      computerScore += 1
    }
  }
    function showScoreBoard(computer,human){
      scoreBoard.textContent = `player ${human} - ${computer} computer`
    }
  }
playGame()