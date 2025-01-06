// Write a function that will randomly return a string of either rock, paper or scissors
// use math.random function to pick a random number
// if number is lower than 33 its rock if lower that 66 then paper if lower than 100 then scissors
function getComputerChoice(){
    let pick = Math.random() * 100
    pick <= 33 ? console.log("rock") : pick <= 66 ? console.log("scissors") : console.log("paper")
}
// a function where we ask user to input rock paper or scissors
// choice will be stored in variable userInput
// if choice is not rock paper or scissors ask user again for input

function getHumanChoice(){
    let userInput = prompt("Choose rock paper or scissors")
    if(userInput.toLowerCase() === "rock" || userInput.toLowerCase() === "paper" || userInput.toLowerCase() ===  "scissors"){
        return userInput
    }else{
        alert("that`s not right input rock paper or scissors") 
    }
}
//
getHumanChoice()
getComputerChoice()