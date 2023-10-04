'use strict';

let text = document.getElementById('text');
let buttonBox = document.getElementById('buttonBox');

const nameButton = document.getElementById('nameButton');
nameButton.addEventListener('click', changeName);
function changeName(name) {
  text.innerHTML = name.replace('Your name', playerName);
}

function changeButtons(buttonList) {
  buttonBox.innerHTML = '';
  for (let i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += 'button onClick=' +buttonList[i][1]+'>' + buttonList[i][0] + '</button>';
  }
}

function advanceTo(num){
  changeName(scenario.num.text);
  changeButtons(scenario.num.buttons);
}

let scenario = {
  one: {
    text: 'What is your name?',
  },
  two: {
    text: 'Do you run into the house or enter slowly?',
    //why are the next scenatios in strings?

    //split into ButtonLeft and ButtonRight? If/else statements if clicked on?
    buttons: [['Run', 'advanceTo(scenario.three)'],['Go slow', 'advanceTo(scenario.three)']]
  },
  three: {
    text: 'You see a deer head, do you inspect or leave it alone?',
    buttons: [['inspect', 'advanceTo(scenario.four'], ['go slow', 'advanceTo(scenatio.four']]
  },
  four: {
    text: 'There is a record player. Do you play scary music or funny music?',
    buttons: [['Scary', 'advanceTo(scenario.five)'],['Funny', 'advanceTo(scenario.five)']]
  },
  five: {
    text: 'There is a chest that might contain valubles. Do you check it out?',
    buttons: [['Yes', 'advanceTo(scenario.six'], ['No', 'advanceTo(scenario.six']]
  },
  six: {
    text: 'Do you look in the shed or the basement next?',
    buttons: [['Shed', 'advanceTo(scenario.seven)'], 'Basement', 'advanceTo(scenario.seven)']
  }

};

//this is the code that starts the game
advanceTo(two);

