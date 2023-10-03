'use strict';

let health = 3;
let playerName;

function changeText(name) {
    text.innerHTML = name.replace("Player Name", playerName);
};

//are we doing images? map?

// let images = document.getElementById("images");
let text = document.getElementById('text');
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');

function nextQ(num) {
    // changeImage(num.image);
  changeText(num.text);
  changeButtons(num.buttons);
}

// addEventListener("click", nextQ()) = 

// function (event) {
//   if (event.key == 'Enter' || event.keyCode == 13) {
//     playerName = input.value;
//     input.parentNode.removeChild(input);
//     nextQ(scenario.two);
//   }
// };





// if ('choice' === optionA) {
//     health--;
//     nextQ();
// } else {
//     nextQ();
// };

//Note: use "Player Name" for the player name so that the function replaces it correctly

function questionOne('click') {
    let text = 'Your car has broken down. Do you run up the stairs or walk';
    let buttons = ["Run", "Walk"]
    addEventListener('click', )
};

function questionTwo('click') {
    text = 'There is a stag head on the wall. Do you look at it?';
    buttons = ["Yes", "No"];
}

function questionThree('click') {
    text = 'There is a record player. Do you play spooky music or fun music?';
    buttons = ["Spooky", "Fun"]
}

if (scenario.one.buttons[0]) {
    hearts--;
};

while (hearts >= 1) {

}

// nextQ(scenario.one);