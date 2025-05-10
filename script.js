document.addEventListener('DOMContentLoaded', function() {
    // Game elements
    const choices = document.querySelectorAll('.element-choice');
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const resultDisplay = document.getElementById('result-message');
    const userScoreDisplay = document.getElementById('user-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const roundDisplay = document.getElementById('current-round');
    const resetBtn = document.getElementById('reset-btn');
    const gameOverModal = document.getElementById('game-over-modal');
    const finalResult = document.getElementById('final-result');
    const finalScore = document.getElementById('final-score');
    const playAgainBtn = document.getElementById('play-again-btn');

    // Game variables
    let userScore = 0;
    let computerScore = 0;
    let currentRound = 1;
    const maxRounds = 10;
    let gameActive = true;

    // Winning rules (first element beats the second)
    const winningRules = {
        metal: ['wood', 'soil'],
        wood: ['water', 'soil'],
        water: ['metal', 'fire'],
        fire: ['metal', 'wood'],
        soil: ['fire', 'water']
    };

    // Event listeners
    choices.forEach(choice => {
        choice.addEventListener('click', function() {
            if (gameActive) {
                const userChoice = this.id;
                playRound(userChoice);
            }
        });
    });

    resetBtn.addEventListener('click', resetGame);
    playAgainBtn.addEventListener('click', resetGame);

    // Function to determine if choice1 beats choice2
    function doesElementWin(choice1, choice2) {
        return winningRules[choice1].includes(choice2);
    }

    // Main game function for each round
    function playRound(userChoice) {
        if (!gameActive) return;
        
        // Computer random choice
        const elementChoices = ['metal', 'wood', 'water', 'fire', 'soil'];
        const computerChoice = elementChoices[Math.floor(Math.random() * elementChoices.length)];
        
        // Display choices
        userChoiceDisplay.innerHTML = `<img src="images/${userChoice}-icon.png" alt="${userChoice}" class="result-icon">`;
        computerChoiceDisplay.innerHTML = `<img src="images/${computerChoice}-icon.png" alt="${computerChoice}" class="result-icon">`;
        
        // Determine winner
        let result;
        if (userChoice === computerChoice) {
            result = "It's a draw!";
            resultDisplay.className = 'draw';
        } else if (doesElementWin(userChoice, computerChoice)) {
            result = "You win this round!";
            userScore++;
            userScoreDisplay.textContent = userScore;
            resultDisplay.className = 'winner';
        } else {
            result = "Computer wins this round!";
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.className = 'loser';
        }
        
        resultDisplay.textContent = result;
        
        // Add animation to choices
        userChoiceDisplay.style.transform = 'scale(1.1)';
        computerChoiceDisplay.style.transform = 'scale(1.1)';
        setTimeout(() => {
            userChoiceDisplay.style.transform = 'scale(1)';
            computerChoiceDisplay.style.transform = 'scale(1)';
        }, 300);
        
        // Update round counter
        currentRound++;
        roundDisplay.textContent = currentRound;
        
        // Check if game is over
        if (currentRound > maxRounds) {
            endGame();
        }
    }

    function endGame() {
        gameActive = false;
        
        // Determine final winner
        let finalMessage;
        if (userScore > computerScore) {
            finalMessage = "You Won the Game!";
        } else if (computerScore > userScore) {
            finalMessage = "Computer Won the Game!";
        } else {
            finalMessage = "The Game Ended in a Tie!";
        }
        
        // Update modal
        finalResult.textContent = finalMessage;
        finalScore.textContent = `Final Score: You ${userScore} - ${computerScore} Computer`;
        
        // Show modal
        gameOverModal.style.display = 'flex';
    }

    function resetGame() {
        // Reset scores and round
        userScore = 0;
        computerScore = 0;
        currentRound = 1;
        gameActive = true;
        
        // Update displays
        userScoreDisplay.textContent = '0';
        computerScoreDisplay.textContent = '0';
        roundDisplay.textContent = '1';
        resultDisplay.textContent = 'Choose an element to begin';
        resultDisplay.className = '';
        
        // Reset choice displays
        userChoiceDisplay.innerHTML = '<img src="images/question-icon.png" alt="?" class="result-icon">';
        computerChoiceDisplay.innerHTML = '<img src="images/question-icon.png" alt="?" class="result-icon">';
        
        // Hide modal
        gameOverModal.style.display = 'none';
    }
});