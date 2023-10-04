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

function changeText(newText) {
  textElement.textContent = newText;
}

function advanceTo(num) {
  changeText(scenario[num].text);
  changeButtons(scenario[num].buttons);
}


let buttonBox = document.getElementById('buttonBox');



function changeButtons(buttonList) {
  buttonBox.innerHTML = '';
  for (let i = 0; i < buttonList.length; i++) {
    const button = document.createElement('button');
    button.textContent = buttonList[i][0];
    button.addEventListener('click', buttonList[i][1]);
    buttonBox.appendChild(button);
  }
}

//changeText function

let scenario = {
  // one: {
  //   text: 'What is your name?',
  // },
  two: {
    text: 'Do you run into the house or enter slowly?',
    //why are the next scenatios in strings?

    //split into ButtonLeft and ButtonRight? If/else statements if clicked on?
    buttons: [
      ['Run', () => advanceTo('three')],
      ['Go slow', () => advanceTo('three')]
    ]
  },
  three: {
    text: 'You see a deer head, do you inspect or leave it alone?',
    buttons: [
      ['test', () => advanceTo('three')],
      ['123', () => advanceTo('three')]
    ]
  },
  four: {
    text: 'There is a record player. Do you play scary music or funny music?',
    buttons: [
      ['Run', () => advanceTo('three')],
      ['Go slow', () => advanceTo('three')]
    ]
  },
  five: {
    text: 'There is a chest that might contain valubles. Do you check it out?',
    buttons: [
      ['Run', () => advanceTo('three')],
      ['Go slow', () => advanceTo('three')]
    ]
  },
  six: {
    text: 'Do you look in the shed or the basement next?',
    buttons: [
      ['Run', () => advanceTo('three')],
      ['Go slow', () => advanceTo('three')]
    ]
  }

};


advanceTo('two');

