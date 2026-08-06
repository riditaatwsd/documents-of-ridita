const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;


console.log('=== NUMBER GUESSING GAME === from test branch on august 6');
console.log('I am thinking of a number between 1 and 10.');

function askQuestion() {
  rl.question('Take a guess: ', (input) => {
    const guess = parseInt(input, 10);
    attempts++;

    if (isNaN(guess)) {
      console.log('Please enter a valid number.');
      askQuestion();
    } else if (guess < targetNumber) {
      console.log('Too low! Try again.');
      askQuestion();
    } else if (guess > targetNumber) {
      console.log('Too high! Try again.');
      askQuestion();
    } else {
      console.log(`\n🎉 Correct! You found the number ${targetNumber} in ${attempts} tries!`);
      rl.close();
    }
  });
}

askQuestion();
