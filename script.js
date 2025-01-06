// Write a function that will randomly return a string of either rock, paper or scissors
// use math.random function to pick a random number
// if number is lower than 33 its rock if lower that 66 then paper if lower than 100 then scissors
function getComputerChoice(){
    let pick = Math.random() * 100
    pick <= 33 ? console.log("rock") : pick <= 66 ? console.log("scissors") : console.log("paper")
}

getComputerChoice()