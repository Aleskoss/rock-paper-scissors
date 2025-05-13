# rock-paper-scissors
Third project from odin project curriculum where i will demonstrate more of what i have learnt from JavaScript - variables, functions, conditionals and most importantly programmer like thinking with planning doing pseudocode and dividing problems into smaller problems so i can solve them easily
1. Write a function that returns computer choice
    use math.random function to select a number from 0 to 2 and store that number in variable called random number
    if random number = 0 then return rock else if random number = 1 paper else scissors
2. Write logic for human choice of rock paper scissors
    Get user input through prompt and store it in variable user userChoice
3. create variables that will hold computer score and human score named computerScore and humanScore initialized with number 0
4. Write logic to play a single round that will have two parameters userChoice and humanChoice, this function will take in arguments as getComputerChoice and getHumanChoice after a round it will increment the score 
  forgot to store input of function humanchoice and computerchoice inside new variables inside playRound function
  if human choice(transferd to lower case so the choice is case insensitive) wins then it increments human score, else computer score 
5.create a function that plays 5 rounds so invoke function playRound 5 times
  if humanScore > Computer score human wins else computer wins

Adding a UI to rock paper scissor demonstarting what i have learned further in DOM, loops and array and JS array methods
1.1. Create 3 buttons in html document
1.2. add listeners to buttons through the use of bubbling by adding listener to document and than deciding through id what button was pressed
1.3. change the return value of userChoice function, store the choice in userChoice variable and return it
