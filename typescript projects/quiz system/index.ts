import { prompt, Confirm } from 'inquirer';

interface Question {
  text: string;
  answers: string[];
  correctAnswerIndex: number;
}

const questions: Question[] = [
  {
    text: 'What is the capital of France?',
    answers: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswerIndex: 0,
  },
  {
    text: 'What is the largest ocean on Earth?',
    answers: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correctAnswerIndex: 0,
  },
  {
    text: 'What is the tallest mountain in the world?',
    answers: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
    correctAnswerIndex: 0,
  },
];

async function main() {
  let score = 0;

  for (const question of questions) {
    // Prompt the user to answer the question
    const answer = await prompt({
      type: 'list',
      name: 'answer',
      message: question.text,
      choices: question.answers,
    });

    // Check if the user's answer is correct
    if (answer === question.answers[question.correctAnswerIndex]) {
      score++;
      console.log('Correct!');
    } else {
      console.log('Incorrect.');
    }
  }

  // Display the user's score
  console.log('Your final score is:', score);

  // Ask the user to continue
  const continuePrompt = await Confirm({
    name: 'continue',
    message: 'Do you want to continue?',
  });

  if (continuePrompt) {
    await main();
  }
}

main();
