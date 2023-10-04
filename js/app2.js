'use strict';
// const startbutton = document.getElementById('start');
// const userNameInput = document.getElementById('input');


// function startGame() {
//   const userName = userNameInput.value;
//   if (userName) {
//     localStorage.setItem('User Name: ', userName);
//     window.location.href = 'gameplay.html';
//   } else {
//     alert('Name is required to start');
//   }
// }

// startbutton.addEventListener('click', startGame);

// don't mess with whats up here ^^

let textElement = document.getElementById('text');
let buttonBox = document.getElementById('buttonBox');

function changeText(newText) {
  textElement.textContent = newText;
}

function changeButtons(buttonList) {
  buttonBox.innerHTML = '';
  for (let i = 0; i < buttonList.length; i++) {
    const button = document.createElement('button');
    button.textContent = buttonList[i][0];
    button.addEventListener('click', buttonList[i][1]);
    buttonBox.appendChild(button);
  }
}

function advanceTo(num) {
  changeText(scenario[num].text);
  changeButtons(scenario[num].buttons);
}

let scenario = {
  two: {
    text: 'Do you run into the house or enter slowly?',
    buttons: [
      ['Run', () => advanceTo('three')],
      ['Go slow', () => advanceTo('three')]
    ]
  },
  three: {
    text: 'You see a deer head, do you inspect or leave it alone?',
    buttons: [
      ['Inspect', () => advanceTo('four')],
      ['Leave it alone', () => advanceTo('four')]
    ]
  },
  four: {
    text: 'There is a record player. Do you play scary music or funny music?',
    buttons: [
      ['Scary', () => advanceTo('five')],
      ['Funny', () => advanceTo('five')]
    ]
  },
  five: {
    text: 'There is a chest that might contain valuables. Do you check it out?',
    buttons: [
      ['Yes', () => advanceTo('six')],
      ['No', () => advanceTo('six')]
    ]
  },
  six: {
    text: 'Do you look in the shed or the basement next?',
    buttons: [
      ['Shed', () => advanceTo('seven')],
      ['Basement', () => advanceTo('seven')]
    ]
  }
};

advanceTo('two');
