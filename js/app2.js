'use strict';



let health = 3;

let textElement = document.getElementById('text');
let buttonBox = document.getElementById('buttonBox');

let defaultSong = document.getElementById('audio');
let scarySong = document.getElementById('scarySong');
let funnySong = document.getElementById('funnySong');

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
    restartButton.addEventListener('click', function () {
      health = 3;
      advanceTo('two');
      window.location.href = 'index.html';
    });
    buttonBox.innerHTML = '';
    buttonBox.appendChild(restartButton);
  }
}

let scenario = {
  two: {
    text: 'You\'re driving down a dark, remote road when your front passenger tire blows! You struggle to regain control as you skid off the road.You gather yourself and see a foreboding mansion ahead of you.You need to fix your tire, but you know you do not have the tools.What do you do',
    buttons: [
      ['Run to entrance', function () {
        health--;
        console.log('Your health is ' + health + ' out of 3');
        advanceTo('three');
        updateHealth();
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
        advanceTo('four');
        updateHealth();
      }],
      ['Ignore and go to next room', function () {
        alert('Good idea. Best not to stare into its eyes too long.');
        console.log('Your health is ' + health + 'out of 3');
        advanceTo('four');
      }]
    ]
  },
  four: {
    text: 'There is a record player. Do you play scary music or funny music?',
    buttons: [
      ['Scary', function () {
        defaultSong.pause();
        scarySong.play();
        alert('Why would you play scary music. Health -1');
        health--;
        console.log('Your health is ' + health + ' out of 3');
        advanceTo('five');
        checkGameOver();
        updateHealth();
      }],
      ['Funny', function () {
        alert('Good choice. Nothing bad happens when the music is silly.');
        defaultSong.pause();
        funnySong.play();
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
        advanceTo('six');
        updateHealth();
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
        advanceTo('seven');
        checkGameOver();
        updateHealth();
      }]
    ]
  }
};

let skullImg1 = document.getElementById('skull1');
let skullImg2 = document.getElementById('skull2');
let skullImg3 = document.getElementById('skull3');


function updateHealth() {
  if (health === 2) {
    skullImg3.classList.add('fade-out');
    skullImg3.addEventListener('animationend', function () {
      skullImg3.classList.remove('fade-out');
      document.getElementById('skull3').src = 'images/100Purple.png';
    });
  } else if (health === 1) {
    skullImg2.classList.add('fade-out');
    skullImg2.addEventListener('animationend', function () {
      skullImg2.classList.remove('fade-out');
      document.getElementById('skull2').src = 'images/100Purple.png';
    });

  } else if (health === 0) {
    skullImg1.classList.add('fade-out');
    skullImg1.addEventListener('animationend', function () {
      skullImg1.classList.remove('fade-out');
      document.getElementById('skull1').src = 'images/100Purple.png';
    });
  }
}


advanceTo('two');

function advanceTo(num) {
  changeText(scenario[num].text);
  changeButtons(scenario[num].buttons);
}

