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
    button.className = 'custom-button';
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
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('three');
      }],
      ['Go slow', function () {
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('three');
      }]
    ]
  },
  three: {
    text: 'You see a deer head, do you inspect or leave it alone?',
    buttons: [
      ['Inspect', function () {
        alert('It falls off the wall and impales you. Health -1');
        health--;
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('four');
      }],
      ['Leave it alone', function () {
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('four');
      }]
    ]
  },
  four: {
    text: 'There is a record player. Do you play scary music or funny music?',
    buttons: [
      ['Scary', function () {
        alert('Why would you play scary music. Health -1');
        health--;
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('five');
      }],
      ['Funny', function () {
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('five');
      }]
    ]
  },
  five: {
    text: 'There is a chest that might contain valuables. Do you check it out?',
    buttons: [
      ['Yes', function () {
        alert('That wasn\'t a chest, it was a mimic! That\'s what you get for stealing. Health -1');
        health--;
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('six');
      }],
      ['No', function () {
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('six');
      }]
    ]
  },
  six: {
    text: 'Do you look in the shed or the basement next?',
    buttons: [
      ['Shed', function () {
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('seven');
      }],
      ['Basement', function () {
        alert('Don\'t go in the basement! You fell down the stairs. Health -1');
        health--;
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('seven');
      }]
    ]
  }
};

let skullImg1 = document.getElementById('skull');
let skullImg2 = document.getElementById('skull');
let skullImg3 = document.getElementById('skull');

function updateHealth() {
  if (health === 2) {
    skullImg3.classList.add('keyframesNameHere');
    skullImg3 = document.getElementById('purp');
  } else if (health === 1) {
    skullImg2.classList.add('keyframesNameHere');
    skullImg2 = document.getElementById('purp');
  } else if (health === 0) {
    skullImg1.classList.add('keyFramesNameHere');
    skullImg1 = document.getElementById('purp');
    gameOver();
  }
}

advanceTo('two');
