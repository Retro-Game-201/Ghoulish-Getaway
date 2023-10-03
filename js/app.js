'use strict';

let health = 3;
let playerName;

function changeText(name) {
  text.innerHTML = name.replace('Player Name', playerName);
}

input.value = playerName;

//are we doing images? map?

// let images = document.getElementById("images");
let text = document.getElementById('text');
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');


//called advanceTo() in the original
function nextQ(num) {
  // changeImage(num.image);
  changeText(num.text);
  changeButtons(num.buttons);
}




//Note: use "Player Name" for the player name so that the function replaces it correctly

while (hearts >= 1) {
// run next function
}

function questionOne() {
  let text = 'Your car has broken down. Do you run up the stairs or walk';
  let buttons = ['Run', 'Walk'];
  // addEventListener('click', )
  questionTwo();
}

function questionTwo() {
  let text = 'There is a stag head on the wall. Do you look at it?';
  let buttons = ['Yes', 'No'];
  questionThree();
}

function questionThree() {
  let text = 'There is a record player. Do you play spooky music or fun music?';
  let buttons = ['Spooky', 'Fun'];
  questionFour();
}
