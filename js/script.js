function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3)
  if(randomNumber === 0){
    return "Rock"
  }else if(randomNumber === 1){
    return "Paper"
  }else if(randomNumber === 2){
    return "Scissors"
  }
}
function getUserChoice(){
  let userChoice = prompt("Rock Paper or Scissors, what will you choose to play?")
  return userChoice
}

console.log(getUserChoice())