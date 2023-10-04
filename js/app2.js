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

let health = 3;

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
      ['Run', function () {
        health--;
        advanceTo('three');
      }],
      ['Go slow', function () {
        advanceTo('three');
      }]
    ]
  },
  three: {
    text: 'You see a deer head, do you inspect or leave it alone?',
    buttons: [
      ['Inspect', function () {
        health--;
        advanceTo('four');
      }],
      ['Leave it alone', function () {
        advanceTo('four');
      }]
    ]
  },
  four: {
    text: 'There is a record player. Do you play scary music or funny music?',
    buttons: [
      ['Scary', function () {
        health--;
        advanceTo('five');
      }],
      ['Funny', function () {
        advanceTo('five');
      }]
    ]
  },
  five: {
    text: 'There is a chest that might contain valuables. Do you check it out?',
    buttons: [
      ['Yes', function () {
        health--;
        advanceTo('six');
      }],
      ['No', function () {
        advanceTo('six');
      }]
    ]
  },
  six: {
    text: 'Do you look in the shed or the basement next?',
    buttons: [
      ['Shed', function () {
        advanceTo('seven');
      }],
      ['Basement', function () {
        health--;
        alert()
        advanceTo('seven');
      }]
    ]
  }
};

advanceTo('two');
