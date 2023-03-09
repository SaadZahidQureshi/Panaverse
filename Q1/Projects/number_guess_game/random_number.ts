import { question } from "readline-sync";

// function main() {

//     let maxGuess : number = 3;
//     let maxNumber : number = 10;
//     let score : number = 0;

// }

let guess_random_number = () => {
  let maxGuess: number = 3;
  let maxNumber: number = 10;
  let score: number = 0;

  while (true) {
    let randomNumber: number = Math.floor(Math.random() * maxNumber);
    let numGuesses: number = 0;

    while (numGuesses < maxGuess) {
      let guess: string = question("Enter a random number : ");
      let pareGuess: number = parseInt(guess);

      if (pareGuess == randomNumber) {
        score++;
        console.log("Congratulations!! You successfully guessed the number");
        break;
      } else if (pareGuess < 1 || isNaN(pareGuess) || pareGuess > maxNumber) {
        console.log(
          "Invalid guess. Please enter a number between 1 and " +
            maxNumber +
            "."
        );
      } else {
        console.log("Thats not a number. Please enter a number");
        numGuesses++;
      }
      if (numGuesses === maxGuess) {
        console.log(
          "Sorry, you're out of guesses. The number was " + randomNumber + "."
        );
      }

      const playAgain: string = question("Do you want to play again? (y/n) ");
      if (playAgain.toLowerCase() !== "y") {
        break;
      }
      else{
        
      }
    }

    console.log("Thanks for playing! Your final score was " + score + ".");
  }
};

// main();
guess_random_number();
