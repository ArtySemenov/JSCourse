/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gameRunning, limit;
var numberOfRolls = []

gameRunning = true;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gameRunning) {
		// 1. Rnd number BUT no 1s or 6s if it is the player's first roll
		if (numberOfRolls.length <= 1) {

			var die1 = Math.floor(Math.random() * 4) + 2;
			var die2 = Math.floor(Math.random() * 4) + 2;
		} else {
			var die1 = Math.floor(Math.random() * 6) + 1;
			var die2 = Math.floor(Math.random() * 6) + 1;
		}

		console.log(die1 + " " + die2)

		// 2. display the result
		var diceDOM1 = document.getElementById('leftDie');
		var diceDOM2 = document.getElementById('rightDie');

		diceDOM1.style.display = 'block';
		diceDOM1.src = "dice-" + die1 + ".png"

		diceDOM2.style.display = 'block';
		diceDOM2.src = "dice-" + die2 + ".png"

		// 3. update round score if roll was not 1 and not two 6s

		if (die1 == 1 || die2 == 1) {
			alert("You rolled a 1. You lose your current score");
			nextPlayer();
		} else if (die1 == 6 && die2 == 6) {
			alert("You rolled 6 twice in a row. You lose your whole score");
			scores[activePlayer] = 0;
			document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
			nextPlayer();
		} else {
			//Next player
			roundScore += die1 + die2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		}

		//4. update number of rolls

		numberOfRolls.push('roll');
		console.log(numberOfRolls.length);
	};

});


document.querySelector('.btn-hold').addEventListener('click', function () {

	if (gameRunning) {
		//1. add current score to global score of player
		scores[activePlayer] += roundScore;
		//2. update the UI
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

		if (scores[activePlayer] >= limit) {

			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.getElementById('rightDie').style.display = 'none';
			document.getElementById('leftDie').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gameRunning = false;


		} else {

			nextPlayer();

		};
	};
});


document.querySelector('.btn-new').addEventListener('click', newGame);

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.getElementById('rightDie').style.display = 'none';
	document.getElementById('leftDie').style.display = 'none';

	numberOfRolls.length = 0;
};

function newGame() {
	//	if (document.getElementById('highScore').value == 0){
	//		alert("The score is set to default (100)");
	//		limit = 100;
	//	} else {
	//		limit = document.getElementById('highScore').value;
	//		alert("Score set to " + limit);
	//	}

	limit = window.prompt("What is the high score you're playing to?", 100);
	numberOfRolls.length = 0;

	document.getElementById('highScore').textContent = limit;
	console.log(limit);
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';
	document.getElementById('rightDie').style.display = 'none';
	document.getElementById('leftDie').style.display = 'none';
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	gameRunning = true;

};


/*
Challenges

1. A player loses his ENTIRE score when he rolls two 6s in a row. After that, it's the next player's turn. (Hint: save the previous dice roll)
2. Add an input field into the HTML where players can set the winning score, so that they can change the predefined score of 100 (Hint: you can read that value with the .value property in JS. This is a good opportunity to use Google)
2. Add another dice into the game, so that there are two dice. The player loses his current score when one of them is 1 (Hint: you will need CSS to position the second dice, so take a look at the CSS for the first one)
*/
