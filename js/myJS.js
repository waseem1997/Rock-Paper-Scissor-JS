// chash the DOM:
/* 
cash: store something for future use purposes 
and that will increase the manage of the memory 
because we 'll be needed to search for the element for once
 */
let userResult = 0;
let computerResult = 0;

const userResult_span = document.getElementById("user-score");
const computerResult_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

///////////////////////////////////////////////////////////////////////


// computer choice function:
function computerChoice(){
	const choices = ['r', 'p', 's']; // available choices
	// get a random number between 0 and 2:
	let index = Math.floor(Math.random() * 3); /* this is random number between 0 and 2  */
	/* 0.9999 * 3 it will never reach the 3 */
	return choices[index]; // return computer choice  
}

function convertToWord(letter){
	if(letter == "r") return "Rock";
	if(letter == "p") return "Paper";
	if(letter == "s") return "Scissor";
}

function win(user, computer){
	userResult++;
	userResult_span.innerHTML = userResult;
	computerResult_span.innerHTML = computerResult;
	let smallUserString = "user".fontsize(3).sub();
	let samllCompString = "computer".fontsize(3).sub();
	result_p.innerHTML =  `${convertToWord(user)}${smallUserString} beat the ${convertToWord(computer)}${samllCompString} so, YOU WIN.`;
	document.getElementById(user).classList.add('green-glow');
	setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 2000);


}

function lose(user, computer){
	computerResult++;
	userResult_span.innerHTML = userResult;
	computerResult_span.innerHTML = computerResult;
	let smallUserString = "user".fontsize(3).sub();
	let samllCompString = "computer".fontsize(3).sub();
	result_p.innerHTML =  `${convertToWord(user)}${smallUserString} loses to ${convertToWord(computer)}${samllCompString} so, YOU LOSE.`;
	document.getElementById(user).classList.add('red-glow');
	setTimeout( () => document.getElementById(user).classList.remove('red-glow') , 2000);
}

function draw(user, computer){
	userResult_span.innerHTML = userResult;
	computerResult_span.innerHTML = computerResult;
	let smallUserString = "user".fontsize(3).sub();
	let samllCompString = "computer".fontsize(3).sub();
	result_p.innerHTML =  `${convertToWord(user)}${smallUserString} equal to ${convertToWord(computer)}${samllCompString} so, DRAW`;
	document.getElementById(user).classList.add('gray-glow');
	setTimeout(() => document.getElementById(user).classList.remove('gray-glow') , 2000);
}

// game function:
function game(userChoice){
	const compChoice = computerChoice(); // get computer choice 

	switch(userChoice + compChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
	}
}

// response to choice click:
function main(){
	rock_div.addEventListener('click', function(){
		game("r"); // launch game method with passing "r" -> rock 
	});

	paper_div.addEventListener('click', function(){
		game("p"); // launch game method with passing "p" -> paper
	});

	scissor_div.addEventListener('click', function(){
		game("s"); // launch game method with passing "s" -> scissor 
	});
}


main();



