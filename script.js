'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeStyle = function (width, value, color) {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = value;
  document.querySelector('body').style.backgroundColor = color;
};

const refreshScore = function (currentScore) {
  document.querySelector('.label-score').textContent = currentScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //No input
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  //When the player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    changeStyle('30rem', secretNumber, '#60b347');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = `${highscore}`;
    }
  }
  //When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      refreshScore(`💯 Score: ${score}`);
      displayMessage(guess > secretNumber ? `📈 Too high!` : '📉 Too low!');
    } else {
      displayMessage('😰 You lost the game!');
      refreshScore(`💯 Score: ${score - 1}`);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  refreshScore(`💯 Score: ${score}`);
  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');
  changeStyle('15rem', '?', '#222');
});
