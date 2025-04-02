import { renderResult, scores, togglePlayAgain, stopPlayAgain } from "./renders/render.js"

// computer choice
function computerChoice(){
  const choice = Math.floor(Math.random() * 3)
  if(choice === 0){
    return 'rock'
  } else if(choice === 1){
    return 'paper'
  } else if(choice === 2){
    return 'scissors'
  }
}

// player choice
function playerChoice(choice){
  if(choice === 'rock'){
    return 'rock'
  } else if(choice === 'paper'){
    return  'paper'
  } else if(choice === 'scissors'){
    return 'scissors'
  }
}

// play the game
export function startGame(playerPick, computerPick){
  let result;
  if(playerPick === computerPick){
    result = 'TIE'
  } else if(playerPick === 'rock' && computerPick === 'paper'){
    result = 'Computer Win'
  } else if(playerPick === 'rock' && computerPick === 'scissors'){
    result = 'You Win'
  } else if(playerPick === 'paper' && computerPick === 'scissors'){
    result = 'Computer Win'
  } else if(playerPick === 'paper' && computerPick === 'rock'){
    result = 'You Win'
  } else if(playerPick === 'scissors' && computerPick === 'rock'){
    result = 'Computer Win'
  } else if(playerPick === 'scissors' && computerPick === 'paper'){
    result = 'You Win'
  }
  addScore(result)
  return result
}

function buttonsClick(){
    // choices buttons
    const buttons = document.querySelectorAll('.choices-buttons')

    buttons.forEach(button => button.addEventListener('click', () => {
      if(button.dataset.choice === 'rock'){
        renderResult(playerChoice('rock'), computerChoice(), togglePlayAgain)

      } else if(button.dataset.choice === 'paper'){
        renderResult(playerChoice('paper'), computerChoice(), togglePlayAgain)

      } else if(button.dataset.choice === 'scissors'){
        renderResult(playerChoice('scissors'), computerChoice(), togglePlayAgain)
      }
    }
  ))
}

function addScore(result){
  if(result === 'Computer Win'){
    scores.computer++
  } else if(result === 'You Win'){
    scores.player++
  } 
}

export function resetScore(){
  const button = document.querySelector('.reset-score')
  
  button.addEventListener('click', () => {
    scores.computer = 0
    scores.player = 0

    // target the scores container
    document.querySelector('.computer-score').textContent = scores.computer;
    document.querySelector('.player-score').textContent = scores.player;
  })
}

// declare outside the autoPlayButton function so that we can reassign it to a new value and execute the else
let loop = null; 

export function autoPlayButton() {
  // target the button of auto play
  const button = document.querySelector('.auto-play');


  // click event
  button.addEventListener('click', () => {

    // check if the loop doesn't have a value meaning to say it is not running
    if (!loop) {
      // change the text to 'Stop Auto Play'
      button.innerHTML = stopPlayAgain; 
      // start the loop
      loop = setInterval(() => {
        // randomize the playerChoice
        const playerPick = randomizePlayerChoice();
        // randomize the computerChoice
        const computerPick = computerChoice();
        renderResult(playerPick, computerPick, stopPlayAgain);
      }, 1000);

    // check if the loop is running
    } else {
      // change the text to 'Auto Play'
      button.innerHTML = togglePlayAgain; 
      // stop the loop
      clearInterval(loop);
      // give the loop a falsy value to execute the if in the next click
      loop = null; 

    }
  });
}


function randomizePlayerChoice(){
  // random number of 0 to 2
  const choice = Math.floor(Math.random() * 3)
  if(choice === 0){
    return 'rock'
  } else if(choice === 1){
    return 'paper'
  } else if(choice === 2){
    return 'scissors'
  }
}


buttonsClick()