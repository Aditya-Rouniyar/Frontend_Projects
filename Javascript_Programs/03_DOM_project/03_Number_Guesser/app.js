/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event Listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for the Guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //   Validate
  if (isNaN(guess) || guess < min || guess > max) {
    // Change the color to red
    guessInput.style.borderColor = "red";
    // Set Message
    setMessage(`Please Enter a number between ${min} and ${max}`, "red");
  }

  //   Check the Guess
  else if (guess === winningNum) {
    //   Game Over - Won

    gameOver(true, `${winningNum} is correct, You WON!!!`);
    // // Disable Input
    // guessInput.disabled = true;
    // // Change color to green
    // guessInput.style.borderColor = "green";
    // // Set Message
    // setMessage(`${winningNum} is correct, You WON!!!`, "green");
  } else {
    //   Wrong Answer
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over - lost

      gameOver(
        false,
        `Game Over, You Lost. The correct number was ${winningNum}`
      );
      //   // Disable Input
      //   guessInput.disabled = true;
      //   // Change color to red
      //   guessInput.style.borderColor = "red";
      //   // Set Message
      //   setMessage(
      //     `Game Over, You Lost. The correct number was ${winningNum}`,
      //     "red"
      //   );
    } else {
      // Game Continues - Wrong Answer

      // Change color to red
      guessInput.style.borderColor = "red";
      // Set Message
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, "red");
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable Input
  guessInput.disabled = true;
  // Change color to red
  guessInput.style.borderColor = color;
  // Set Message
  setMessage(msg, color);

  //   Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Getting the Winning Number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
