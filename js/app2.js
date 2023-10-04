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

// duplicate:
// function advanceTo(num) {
//   changeText(scenario[num].text);
//   changeButtons(scenario[num].buttons);
// }

let scenario = {
  one: {
    text: 'Do you run into the house or enter slowly?',
    buttons: [
      ['Run', function () {
        health--;
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('two');
      }],
      ['Go slow', function () {
        console.log('Your health is ' + health + ' out of 3');
        advanceTo('two');
      }]
    ]
  },
  two: {
    text: 'You see a deer head, do you inspect or leave it alone?',
    buttons: [
      ['Inspect', function () {
        health--;
        alert('It falls off the wall and impales you. Health -1');
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('three');
      }],
      ['Leave it alone', function () {
        console.log('Your health is ' + health + ' out of 3');
        advanceTo('three');
      }]
    ]
  },
  three: {
    text: 'There is a record player. Do you play scary music or funny music?',
    buttons: [
      ['Scary', function () {
        alert('Why would you play scary music. Health -1');
        health--;
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('four');
      }],
      ['Funny', function () {
        console.log('Your health is ' + health + ' out of 3');
        advanceTo('four');
      }]
    ]
  },
  four: {
    text: 'There is a chest that might contain valuables. Do you check it out?',
    buttons: [
      ['Yes', function () {
        alert('That wasn\'t a chest, it was a mimic! That\'s what you get for stealing. Health -1');
        health--;
        console.log('Your health is ' + health + ' out of 3');
        advanceTo('five');
      }],
      ['No', function () {
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('five');
      }]
    ]
  },
  five: {
    text: 'Do you look in the shed or the basement next?',
    buttons: [
      ['Shed', function () {
        console.log('Your health is ' + health + ' out of 3');
        advanceTo('six');
      }],
      ['Basement', function () {
        alert('Don\'t go in the basement! You fell down the stairs. Health -1');
        health--;
        console.log('Your health is ' + health + ' out of 3');
        updateHealth();
        advanceTo('six');
      }]
    ]
  }
};

let skullImg1 = document.getElementById('skull');
let skullImg2 = document.getElementById('skull');
let skullImg3 = document.getElementById('skull');


function updateHealth() {
  if (health === 2) {
    skullImg3.style.visibility = 'hidden';
    // skullImg3.classList.add('scale-down-center');
    // skullImg3 = document.getElementById('skull').src = '100Purple.png';
  } else if (health === 1) {
    skullImg2.style.visibility = 'hidden';
    // skullImg2.classList.add('scale-down-center');
    // skullImg2 = document.getElementById('skull').src = '100Purple.png';
  } else if (health === 0) {
    skullImg1.style.visibility = 'hidden';
    // skullImg1.classList.add('scale-down-center');
    // skullImg1 = document.getElementById('skull').src = '100Purple.png';
    window.location.href = 'index.html';
  }
}

advanceTo('one');

function advanceTo(num) {
  changeText(scenario[num].text);
  changeButtons(scenario[num].buttons);
  // if (health < 3) {
  //   const skullIdToHide = 'skull' + (3 - health);
  //   const skullToHide = document.getElementById(skullIdToHide);
  //   if (skullToHide) {
  //     skullToHide.style.visibility = 'hidden';
  //   }
  // }
}

