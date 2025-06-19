const userInput = document.querySelector('#guessField');
const submitBtn = document.querySelector('#subt');
const userGuesses = document.querySelector('.guessess');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.querySelector('p');

let randomNum = Math.floor(Math.random() * 100 + 1);
let previewGuesses = [];
let numOfGuesses = 1;

let playGame = true;

if (playGame) {
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess > 500 || guess < 1) {
    alert('please enter valid number')
  } else {
    previewGuesses.push(guess);
    if (numOfGuesses === 10) {
      displayGuesses(guess);
      displayMessage(`game over. random number is ${randomNum}`);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`you guessed it right. random number is ${randomNum}`);
    endGame();
  } else if (guess > randomNum) {
    displayMessage('your number is high');
  } else if (guess < randomNum) {
    displayMessage('your number is low');
  }
}

function displayGuesses(guess) {
  userInput.value = '';
  userGuesses.innerHTML += `${guess},`;
  numOfGuesses++;
  remainingGuesses.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    randomNum = Math.floor(Math.random() * 100 + 1);
    previewGuesses = [];
    numOfGuesses = 1;
    lowOrHigh.innerHTML = ''
    userGuesses.innerHTML = '';
    remainingGuesses.innerHTML = `${11 - numOfGuesses}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

console.log(randomNum)
