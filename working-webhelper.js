var buttonElement = document.getElementById("submit-guess");

window.onload = start;
var turn = 1;
var colors=[], code=[], guess=[], feedback=[];
colors = ["r","b","g","w","c","y"];
// add arrays for thisTurn, turnRecords
var thisTurn = [], turnRecords = [];
var alertString="";

function start() {
    setup();
}

function setup() {
	var welcome="<h1>Welcome to Mastermind!</h1>\n<p>Here are instructions.</p>";
    var buttonElement = document.getElementById("submit-guess");
    buttonElement.innerHTML = "Start Game"; 
	var board = document.getElementById("board");
	board.innerHTML=welcome; 
    buttonElement.onclick = function () {
		playGame();
	}
}

function playGame(code){
  var startPlay="<h1>Code Is Set up!</h1>\n<p>Pick your four choices for your first guess.</p>"+code;
  while(turn<50){
    startGame();
    var guess=newGetGuess(code);
    masterMain(code, guess);
    turn++;
  }

}

function startGame() {
	code=setCode(colors);
	var buttonElement = document.getElementById("submit-guess");
    buttonElement.innerHTML = "Submit color choices"; 
	var board = document.getElementById("board");
	board.innerHTML=startPlay;
	buttonElement.onclick = function () {
		playGame(code);
	}
}

function newGetGuess(code) {
	var guess =[]; 
	var turn = 1;
	for (i=0;i<4;i++) {
		g=document.getElementById(i);
		guess[i]=g.options[g.selectedIndex].value;
	}
	//alertString=alertString.concat(guess.join(" "));
	//board.innerHTML=alertString;
	//masterMain(code, guess);
  return guess;
}

function masterMain(code, guess){
  var alertString="<h1>Mastermind</h1><p>Guess "+turn+": ";
  alertString=alertString.concat(guess.join(" "));
  alertString=alertString.concat(" || ");
  var feedback=testGuess(code,guess);
  alertString=alertString.concat(feedback.join(" "))
	board.innerHTML=alertString;
}
