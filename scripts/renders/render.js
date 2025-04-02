import {startGame, resetScore, autoPlayButton} from '../RockPaperScissors.js'


// scores of player and computer
export const scores = {
  computer: 0,
  player: 0
};

export const togglePlayAgain = 'Auto Play'
export const stopPlayAgain = 'Stop Auto Play'

export function renderResult(playerPick, computerPick, buttonText){
  const resultScore = startGame(playerPick, computerPick)
  const result = document.querySelector('.result')
  const buttonContainer = document.querySelector('.button-container')


  result.innerHTML = `
            <div class="min-w-[100px] max-w-[500px] w-[clamp(100px,20vw,120px)] p-8 flex self-start aspect-square relative">
              <img class="w-full h-full object-contain" src="./images/${computerPick}-emoji.png" alt="Rock image">
              <div class="absolute bottom-0 -left-0 right-0 text-center  text-[clamp(8px,3vw,16px)]">Computer</div>
              <div class="absolute -bottom-8 -left-0 right-0 text-center font-bold text-[clamp(8px,5vw,18px)] computer-score">${scores.computer}</div>
            </div>
            
            <div class=" font-bold text-[clamp(12px,3vw,23px)]">${resultScore}</div>

            <div class="min-w-[100px] max-w-[500px] w-[clamp(100px,20vw,120px)] p-8 flex self-start aspect-square relative">
              <img class="w-full h-full object-contain" src="./images/${playerPick}-emoji.png" alt="Scissors image">
              <div class="absolute bottom-0 -left-0 right-0 text-center text-[clamp(8px,3vw,16px)]">You</div>
              <div class="absolute -bottom-8 -left-0 right-0 text-center font-bold text-[clamp(8px,5vw,18px)] player-score">${scores.player}</div>
            </div>`

  buttonContainer.innerHTML = `
    <button class="reset-score text-[clamp(8px,5vw,20px)] max-w-full h-auto py-2 px-4 border-white border-2 border-dashed rounded-full cursor-pointer hover:border-solid shadow-gray-500 hover:shadow-[0_2px_22px_0px_rgba(241,245,249,0.8)] transition-all duration-200">Reset Score</button>
    <button class="auto-play text-[clamp(8px,5vw,20px)] max-w-full h-auto py-2 px-4 border-white border-2 border-dashed rounded-full cursor-pointer hover:border-solid shadow-gray-500 hover:shadow-[0_2px_22px_0px_rgba(241,245,249,0.8)] transition-all duration-200" data-state="stopped">${buttonText}</button>
  `

  // resetScore() for resetting a score back to zero if click
  resetScore()
  // autoPlayButton() for looping the game automatically
  autoPlayButton()
}