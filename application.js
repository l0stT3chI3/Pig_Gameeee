var scores, roundScore, activePlayer, gamePlaying, target;

int();

var lastDice;

var mg = localStorage.getItem("lastname");
console.log(mg);




document.querySelector('.dice').style.display = 'none';


document.querySelector('.new2').addEventListener('click', function () {
	if (gamePlaying) {
		var dice = Math.floor(Math.random() * 6) + 1;
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';
		if (dice !== 1) {
			roundScore += dice;
			document.querySelector('.currentscore-' + activePlayer).textContent = roundScore;
		}
		else {
			myFunctions();

		}

	}


});



function myFunctions() {
	if (activePlayer === 1) {
		activePlayer = 2
	} else {
		activePlayer = 1
	}
	roundScore = 0;
	document.querySelector('.currentscore-1').textContent = '0';
	document.querySelector('.currentscore-2').textContent = '0';

	document.querySelector('.box1').classList.toggle('active');
	document.querySelector('.box2').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.new3').addEventListener('click', function () {
	if (gamePlaying) {
		scores[activePlayer] += roundScore;
		document.querySelector('.globalscore-' + activePlayer).textContent = scores[activePlayer];
		if (scores[activePlayer] >= target) {
			document.querySelector('.align' + activePlayer).textContent = 'Winner';
			document.querySelector('.dice').style.display = 'none';
			gamePlaying = false;
		} else {
			myFunctions();
		}
	}
});

document.querySelector('.new1').addEventListener('click', int);







function int() {
	target = document.getElementById('fr').value;
	scores = [0, 0, 0];
	roundScore = 0;
	activePlayer = 1;
	gamePlaying = true;
	document.querySelector('.currentscore-1').textContent = '0';
	document.querySelector('.currentscore-2').textContent = '0';
	document.querySelector('.globalscore-1').textContent = '0';
	document.querySelector('.globalscore-2').textContent = '0';
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.align1').textContent = 'Player 1';
	document.querySelector('.align2').textContent = 'Player 2';
	document.querySelector('.box1').classList.remove('active');
	document.querySelector('.box2').classList.remove('active');
	document.querySelector('.box1').classList.add('active');

}