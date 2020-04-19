const start_btn = document.getElementById("start-btn");

let PROMPT_MSG = "Guess a number < 100:";
let computerGuess;
let userTry = 1;

const getUserNumber = () => {
  let userNumber = prompt(`${PROMPT_MSG} `, "");
  if (isNaN(userNumber) && !parseInt(userNumber)) {
    PROMPT_MSG = "Invalid choice! Choose an integer number: ";
    userNumber = getUserNumber();
  } else if (userNumber > 100) {
    PROMPT_MSG = "Number must be between 100: ";
    userNumber = getUserNumber();
  } else if (userNumber < 0) {
    PROMPT_MSG = "Number can not be negative: ";
    userNumber = getUserNumber();
  }
  return userNumber;
};

const gameStart = () => {
  if (!computerGuess) {
    computerGuess = Math.random() * Math.floor(100);
  }
  let number = getUserNumber();
  if (document.getElementById("getHints").checked == true) {
    if (parseInt(computerGuess) === parseInt(number)) {
      document.getElementById("number").innerHTML = number;
      document.getElementById(
        "result_box"
      ).innerHTML = `Your guess is correct. You have tried ${userTry} times. Try without hints :)`;
      computerGuess = false;
      userTry = 1;
      document.getElementById("getHints").checked = false;
      PROMPT_MSG = "Guess a number < 100:";
      return;
    } else if (parseInt(number) < parseInt(computerGuess)) {
      userTry = userTry + 1;
      PROMPT_MSG = "Think of a larger number: ";
      gameStart();
    } else if (parseInt(number) > parseInt(computerGuess)) {
      userTry = userTry + 1;
      PROMPT_MSG = "Think of a smaller number: ";
      gameStart();
    } else {
      userTry = userTry + 1;
      PROMPT_MSG = "Wrong guess, pick another number: ";
      gameStart();
    }
  } else {
    if (parseInt(computerGuess) === parseInt(number)) {
      document.getElementById("number").innerHTML = number;
      document.getElementById(
        "result_box"
      ).innerHTML = `Genius! Your guess is correct. You have tried ${userTry} times.`;
      computerGuess = false;
      userTry = 1;
      PROMPT_MSG = "Guess a number < 100:";
      return;
    } else {
      userTry = userTry + 1;
      PROMPT_MSG = "Wrong guess pick another number: ";
      gameStart();
    }
  }
};

start_btn.addEventListener("click", gameStart);
