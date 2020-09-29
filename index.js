var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;
guessField.focus();
function checkGuess() {
  var userGuess = Number(guessField.value);
  if(userGuess == '') {
       alert('please enter number')
       guesses.textContent +=' ';
  }else {
    guesses.textContent += userGuess + ' ';
    if(guesses.textContent === 0){
        // alert('value ')
    }
      if(userGuess === randomNumber) {
        lastResult.textContent = "Good job! You win!";
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if(guessCount === 10) {
        //   alert(' oops! you have exceded the count');
        lastResult.textContent = 'oops! you have exceded the count';
        lowOrHi.textContent = "Guess Number is = "+randomNumber;
        // lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = "Oops! You're Wrong!";
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
        }
      }
      guessCount++;
      guessField.value = '';
      guessField.focus();
    }

  }
//   if(guessCount === 1) {
//     guesses.textContent = 'Previous guesses: ';   guesses.textContent += userGuess + ' ';
//   }  

guessSubmit.addEventListener('click', checkGuess);
console.log('cheat is: ' + randomNumber);
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Play Again?';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
function resetGame() {
  guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}