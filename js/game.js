let scores = { scandal: 0, masterpiece: 0, stress: 0 };
let consecutiveSixes = 0;

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    
    if (roll === 6) {
        consecutiveSixes++;
        if (consecutiveSixes === 3) {
            disasterMuse();
        }
    } else {
        consecutiveSixes = 0;
    }
    
    return roll;
}

function disasterMuse() {
    scores.masterpiece = 0;
    document.getElementById('masterpiece-score').textContent = scores.masterpiece;
    alert("Disaster Muse! Byron has destroyed your manuscript by accident(?). Time to start over on your masterpiece.");
    consecutiveSixes = 0;
}

function updateScores(effect) {
    for (let [key, value] of Object.entries(effect)) {
        scores[key] = Math.max(0, scores[key] + value);
        document.getElementById(`${key}-score`).textContent = scores[key];
    }
}

function newDay() {
    const roll = rollDie();
    const category = gameData.byronicEvents[Math.floor((roll - 1) / 2)];
    const event = category.events[Math.floor(Math.random() * category.events.length)];
    
    let eventDescription = `You rolled a ${roll}. ${event.description}`;
    document.getElementById('event-display').textContent = eventDescription;
    
    updateScores(event.effect);
    
    let scoreChanges = Object.entries(event.effect)
        .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)} ${value >= 0 ? '+' + value : value}`)
        .join(', ');
    document.getElementById('event-display').textContent += ` (${scoreChanges})`;
    
    checkGameEnd();
}

function checkGameEnd() {
    let gameOverMessage = "";

    if (scores.scandal >= 10) {
        gameOverMessage = "Your reputation is in tatters! You flee to nurse your wounded pride.";
    } else if (scores.masterpiece >= 10) {
        gameOverMessage = "You've created a new genre of supernatural horror fiction based on your time with Byron!";
    } else if (scores.stress >= 10) {
        gameOverMessage = "You've lost your patience with Byron and descended into uncontrollable weeping.";
    }

    if (gameOverMessage) {
        document.getElementById('roll-button').disabled = true;
        const gameOverElement = document.createElement('div');
        gameOverElement.innerHTML = `
            <h2>Game Over!</h2>
            <p>${gameOverMessage}</p>
            <button id="restart-button">Start Over</button>
        `;
        document.getElementById('game-container').appendChild(gameOverElement);
        document.getElementById('restart-button').addEventListener('click', restartGame);
    }
}

function restartGame() {
    scores = { scandal: 0, masterpiece: 0, stress: 0 };
    consecutiveSixes = 0;
    document.getElementById('scandal-score').textContent = '0';
    document.getElementById('masterpiece-score').textContent = '0';
    document.getElementById('stress-score').textContent = '0';
    document.getElementById('event-display').textContent = '';
    document.getElementById('roll-button').disabled = false;
    const gameOverElement = document.getElementById('game-container').lastElementChild;
    if (gameOverElement.querySelector('#restart-button')) {
        gameOverElement.remove();
    }
}

document.getElementById('roll-button').addEventListener('click', newDay);