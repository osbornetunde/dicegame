

var scores, roundScore, activeplayer, gamePlaying;

init();


// document.querySelector("#current-" + activeplayer).innerHTML = '<em>' + dice + '</em>';




document.querySelector('.btn-roll').addEventListener('click', function(){
		if (gamePlaying){
			//Random number
			var dice = Math.floor(Math.random() * 6) + 1;

			//Display the result
			var diceDOM = document.querySelector('.dice');
			diceDOM.style.display = 'block';
			diceDOM.src = 'dice-' + dice + '.png';

			//Update the round score IF the rolled number was NOT a 1
			if (dice !== 1) {
				//Add score
				roundScore += dice;
				document.querySelector("#current-" + activeplayer).textContent = roundScore;
			} else {
				//Next player
				nextPlayer();
			}

		}
});


document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying){
		// add current score to GLOBAL score
		scores[activeplayer] += roundScore;

		// Update the UI
		document.querySelector("#score-" + activeplayer).textContent = scores[activeplayer]

		// Check if player won the game
		if (scores[activeplayer] >= 20) {
			document.querySelector("#name-" + activeplayer).textContent = "Winner!";
			document.querySelector(".dice").style.display = 'none';
			document.querySelector(".player-" + activeplayer + '-panel').classList.add('winner');
			document.querySelector(".player-" + activeplayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			//next Player
			nextPlayer();
		}
	}
});

function nextPlayer() {
	activeplayer === 0 ? activeplayer = 1 : activeplayer =0;
				roundScore = 0;
				document.getElementById("current-0").textContent = '0';
				document.getElementById("current-1").textContent = '0';

				document.querySelector(".player-0-panel").classList.toggle('active');
				document.querySelector(".player-1-panel").classList.toggle('active');
				// document.querySelector(".player-0-panel").classList.remove('active');
				// document.querySelector(".player-1-panel").classList.add('active');
				document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener("click", init);


function init(){
	scores = [0,0];
	roundScore = 0;
	activeplayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector(".player-0-panel").classList.remove('winner');
	document.querySelector(".player-1-panel").classList.remove('winner');
	document.querySelector(".player-0-panel").classList.remove('active');
	document.querySelector(".player-1-panel").classList.remove('active');
	document.querySelector(".player-0-panel").classList.add('active');

}