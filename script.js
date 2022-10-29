//thse variable for game stat will be stores outside of the game function so that they will not be reset after the function loops
var wins = 0;
var losses = 0;
var ties = 0;

//this function, will run the game
function playGame() {
  //to start, the user is prompted to pick either R P or S, and sets their input to come back as uppercase
  var userChoise = prompt("Please enter R, P, S").toUpperCase();
  //then wa make anoter variable for the computer choises, with R P and S inside its array

  var computerChoices = ["R", "P", "S"];
  //then we make a function to pick its choice
  function computerChoice(computerChoices) {
    //we set a constant called randomindex, and make it randomly pick an integer  between the length of the array
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    //then we set another constant called item thats equal to a random index from our array, so eithe R P or S
    const item = computerChoices[randomIndex];
    //we then return the item so that value of the computerChoise is now either R P or S
    return item;
  }
  //then we check if the user selected a correct, choise, if they didnt then they will be alerted and the game function will be run again. looping back to the first prompt

  if (userChoise !== "R" && userChoise !== "P" && userChoise !== "S") {
    alert("you must pick eithe R, P, or S!");
    playGame();
  }
  //if they did selected a correct choice, then we continue
  //then we make another contant called result. this will be equal to the computers choise

  const result = computerChoice(computerChoices);
  console.log(userChoise);
  //then we make if statements to compare the value of user choice vs computer choice.
  //depending on the outcome, it will present alert you of the result and tell you what the computer picked

  if (userChoise === result) {
    alert("Its a tie! The computer picked " + result);
    ties++;
  } else if (userChoise === "S" && result === " P") {
    alert("You Won! The computer picked " + result);
    wins++;
  } else if (userChoise === "R" && result === "S") {
    alert("You Won! The computer picked " + result);
    wins++;
  } else if (userChoise === "P" && result === "R") {
    alert("You Won! The computer picked " + result);
    wins++;
  } else {
    alert("you lost:( The computer picked " + result);
    losses++;
  }
  //after the result is presented, it will run another alert that display wins ties and losses.

  alert(
    "Your Wins: " + wins + (" Your losses: " + losses) + (" Your Ties: " + ties)
  );
  //then we are asked to confirm if we would like to play again
  var playAgain = confirm("would you like to play again ?");
  //if they say yes, the game will run again
  if (playAgain) {
    playGame();
  }
  //if not the function will stop
}
//this is the first action to occur, it will call the function of PlayGame
playGame();
