const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
        score = 0
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    } else {
        score = -1
    } 
    
if (playerChoice == computerChoice) {
        totalScore['playerScore'] += 0
        totalScore['computerScore'] += 0
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        totalScore['playerScore'] += 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        totalScore['playerScore'] += 1
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        totalScore['playerScore'] += 1
    } else {
        totalScore['playerScore'] -= 1
        totalScore['computerScore'] += 1
    }

  return {score, totalScore}
}

function showResult(score, totalScore, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if (score == -1) {
    resultDiv.innerText = '-1'
  } else if (score == 0) {
    resultDiv.innerText = '0'
  } else {
    resultDiv.innerText = '1'
  }
  
  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`

  playerScoreDiv.innerText = `🧑Score: ${totalScore['playerScore']} |||| 🤖Score: ${totalScore['computerScore']}`
}

function onClickRPS(playerChoice) {
  const finalResultDiv = document.getElementById('finalResult')
  finalResultDiv.innerHTML = ''

  const computerChoice = getComputerChoice()
  const {score , totalScore} = getResult(playerChoice, computerChoice)

  showResult(score, totalScore, playerChoice, computerChoice)
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
 
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => {
    endGame(totalScore)
  }
}

function endGame(totalScore) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const finalResultDiv = document.getElementById('finalResult')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''

  if (totalScore['playerScore'] > totalScore['computerScore']) {
    finalResultDiv.innerText = '🧑 Won!'
    // alert('Congragulations!! You Won')
  } else if (totalScore['playerScore'] < totalScore['computerScore']) {
    finalResultDiv.innerText = '🤖 Won!'
  } else {
    finalResultDiv.innerText = "It's a tie!"
  }

  if (totalScore['playerScore'] == 0 & totalScore['computerScore'] == 0) {
    alert('Press any RPS button and Start the game!!')
    finalResultDiv.innerText = ''
  }

  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

}

playGame()