# rock-paper-scissors
Third project from odin project curriculum where i will demonstrate more of what i have learnt from JavaScript - variables, functions, conditionals and most importantly programmer like thinking with planning doing pseudocode and dividing problems into smaller problems so i can solve them easily
1. Write a function that returns computer choice
    use math.random function to select a number from 0 to 2 and store that number in variable called random number
    if random number = 0 then return rock else if random number = 1 paper else scissors
2. Write logic for human choice of rock paper scissors
    Get user input through prompt and store it in variable user userChoice
3. create variables that will hold computer score and human score named computerScore and humanScore initialized with number 0
4. Write logic to play a single round that will have two parameters userChoice and humanChoice, this function will take in arguments as getComputerChoice and getHumanChoice after a round it will increment the score 
  if human choice(transferd to lower case so the choice is case insensitive) wins then it increments human score, else computer score 