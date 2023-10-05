'use strict';



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

function checkGameOver() {
  if (health <= 0) {
    changeText('Game Over! You lost all your lives.');
    let restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.className = 'restart';
    restartButton.addEventListener('click', function() {
      health = 3;
      advanceTo('two');
      window.location.href = 'index.html';
    });
    buttonBox.appendChild(restartButton);
  }
}



// function advanceTo(num) {
//   changeText(scenario[num].text);
//   changeButtons(scenario[num].buttons);
// }

let scenario = {
  two: {
    text: 'You\'re driving down a dark, remote road when your front passenger tire blows! You struggle to regain control as you skid off the road.You gather yourself and see a foreboding mansion ahead of you.You need to fix your tire, but you know you do not have the tools.What do you do',
    buttons: [
      ['Run to entrance', function () {
        health--;
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('three');
      }],
      ['Enter house slowly', function () {
        console.log('Your health is ' + health + 'out of 3');
        advanceTo('three');
      }]
    ]
  },
  three: {
    text: 'You enter a dusty sitting room, filled with old volumes and leather seats. You notice an old mounted stag head on the wall. Did the eyes just move?',
    buttons: [
      ['Inspect', function () {
        health--;
        alert('It falls off the wall and impales you. Health -1');
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('four');
      }],
      ['Ignore and go to next room', function () {
        console.log('Your health is ' + health + 'out of 3');
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
        checkGameOver();
      }],
      ['Funny', function () {
        console.log('Your health is ' + health + ' out of 3');
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
        advanceTo('six');
        checkGameOver();
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
        advanceTo('seven');
      }],
      ['Basement', function () {
        alert('Don\'t go in the basement! You fell down the stairs. Health -1');
        health--;
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('seven');
        checkGameOver();
      }]
    ]
  }
};

let skullImg1 = document.getElementById('skull');
let skullImg2 = document.getElementById('skull');
let skullImg3 = document.getElementById('skull');


function updateHealth() {
  if (health === 2) {
    skullImg3.classList.add('scale-down-center');
    skullImg3 = document.getElementById('skull').src = '100Purple.png';
  } else if (health === 1) {
    skullImg2.classList.add('scale-down-center');
    skullImg2 = document.getElementById('skull').src = '100Purple.png';
  } else if (health === 0) {
    skullImg1.classList.add('scale-down-center');
    skullImg1 = document.getElementById('skull').src = '100Purple.png';
    window.location.href = 'index.html';
  }
}

advanceTo('two');

function advanceTo(num) {
  changeText(scenario[num].text);
  changeButtons(scenario[num].buttons);
  if (health < 3) {
    const skullIdToHide = 'skull' + (3 - health);
    const skullToHide = document.getElementById(skullIdToHide);
    if (skullToHide) {
      skullToHide.style.visibility = 'hidden';
    }
  }
}

