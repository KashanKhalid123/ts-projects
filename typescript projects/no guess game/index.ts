import inquirer from 'inquirer';

const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100

const askForGuess = async () => {
  const answer = await inquirer.prompt({
    type: 'number',
    name: 'guess',
    message: 'Guess a number between 1 and 100:',
  });

  return answer.guess;
};

const playGame = async () => {
  let remainingChances = 10;

  while (remainingChances > 0) {
    const guess = await askForGuess();

    if (guess === randomNumber) {
      console.log('You win!');
      return;
    } else if (guess < randomNumber) {
      console.log('Too low.');
    } else if (guess > randomNumber) {
      console.log('Too high.');
    }

    remainingChances--;
  }

  console.log('You lose! The correct number was:', randomNumber);
};

playGame();
