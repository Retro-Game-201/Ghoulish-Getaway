'use strict';

let text = document.getElementById('text');
let buttonBox = document.getElementById('buttonBox');
//add this:
let input = document.getElementById('player name');

let playerName = input.value;

input.addEventListener('click', hidePlayerName());

function hidePlayerName() {
  input.parentNode.removeChild('input');
  advanceTo(scenario.two);
}

function changeText(words) {
    text.innerHTML = words.replace('Your name', playerName);
}

function changeButtons(buttonList) {
    buttonBox.innerHTML = '';
    for (let i = 0; i < buttonList.length; i++){
        buttonBox.innerHTML += 'button onClick=' +buttonList[i][1]+'>' + buttonList[i][0] + '</button'>;
    }
}

function advanceTo(num){
    changeText(scenario.num.text);
    changeButtons(scenario.num.buttons);
}

let scenario = {
    one: {
        text: 'What is your name?',
    },
    two: {
        text: 'Do you run into the house or enter slowly?',
        //why are the next scenatios in strings?
        buttons: [['Run', 'advanceTo(scenario.three)'],['Go slow', 'advanceTo(scenario.three)']]
    },
    three: {
      // image: 'https://1.bp.blogspot.com/-83pWE4JxQxM/ViiOd_7nGTI/AAAAAAAADUg/yCJ8iAB-gMY/s1600/postapoc5.jpg',//"https://s4.postimg.org/t1g20apst/261819008_d4316c1bdf_o.jpg",
      text: 'You see a deer head, do you inspect or leave it alone?',
      buttons: [['inspect', 'advanceTo(scenario.four'], ['go slow', 'advanceTo(scenatio.four']]
    },
    four: {
      // image: 'https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg',
      text: 'There is a record player. Do you play scary music or funny music?',
      buttons: [['Scary', 'advanceTo(scenario.five)'],['Funny', 'advanceTo(scenario.five)']]
    },
    five: {
      // image: 'https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg',
      text: 'There is a chest that might contain valubles. Do you check it out?',
      buttons: [['Yes', 'advanceTo(scenario.six'], ['No', 'advanceTo(scenario.six']]
    },
    six: {
      text: 'Do you look in the shed or the basement next?',
      buttons: [['Shed', 'advanceTo(scenario.seven)'], 'Basement', 'advanceTo(scenario.seven)']
    }
  
  };
  
  //this is the code that starts the game
  advanceTo(scenario.one);
  