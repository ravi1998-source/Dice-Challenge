var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var selectImage1 = document.querySelector(".img1");
var selectImage2 = document.querySelector(".img2");


function firstDice(){


if ( randomNumber1 == 1) {
	selectImage1.setAttribute('src','images/dice1.png')
}

if ( randomNumber1 == 2) {
	selectImage1.setAttribute('src','images/dice2.png')
}

if ( randomNumber1 == 3) {
	selectImage1.setAttribute('src','images/dice3.png')
}

if ( randomNumber1 == 4) {
	selectImage1.setAttribute('src','images/dice4.png')
}

if ( randomNumber1 == 5) {
	selectImage1.setAttribute('src','images/dice5.png')
}

if ( randomNumber1 == 6) {
	selectImage1.setAttribute('src','images/dice6.png')
}
}


function secondDince(){
	

if ( randomNumber2 == 1) {
	selectImage2.setAttribute('src','images/dice1.png')
}

if ( randomNumber2 == 2) {
	selectImage2.setAttribute('src','images/dice2.png')
}

if ( randomNumber2 == 3) {
	selectImage2.setAttribute('src','images/dice3.png')
}

if ( randomNumber2 == 4) {
	selectImage2.setAttribute('src','images/dice4.png')
}

if ( randomNumber2 == 5) {
	selectImage2.setAttribute('src','images/dice5.png')
}

if ( randomNumber2 == 6) {
	selectImage2.setAttribute('src','images/dice6.png')
}
}


function winner(){

	if ( randomNumber1 > randomNumber2) {
		document.querySelector("h1").innerHTML = "Player one wins";
	}

    if ( randomNumber1 < randomNumber2) {
		document.querySelector("h1").innerHTML = "Player two wins";
	}

	if ( randomNumber1 === randomNumber2) {
		document.querySelector("h1").innerHTML = "Draw!";
	}
}




firstDice();
secondDince();
winner();
