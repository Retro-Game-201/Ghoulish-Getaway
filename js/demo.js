// Source: https://codepen.io/rzim2082/pen/jMWYJW?editors=0010



// let images = document.getElementById('images');
let text = document.getElementById('text');
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');

let playerName;

input.addEventListener = function(event) {
  if (event.key === 'Enter' || event.keyCode === 13) {
    playerName = input.value;
    input.parentNode.removeChild(input);
    advanceTo(scenario.two);
  }
};

function changeText(words) {
  text.innerHTML = words.replace('Your dog', playerName);
}

// let changeImage = function(img) {
//   images.style.backgroundImage = 'url(' + img + ')';
// };

function changeButtons(buttonList) {
  buttonBox.innerHTML = '';
  for (let i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += '<button onClick='+buttonList[i][1]+'>' + buttonList[i][0] + '</button>';
  }
}

function advanceTo(num) {
//   changeImage(s.image);
  changeText(scenario.num.text);
  changeButtons(scenario.num.buttons);
}

let scenario = {
  one: {
    // image: 'https://s9.postimg.org/eceo9mp73/5860028206_d66810105f_b.jpg', //dog
    text: 'What is your name?',
  },
  two: {
    // image: 'https://s9.postimg.org/9p8m7v1u7/6899639786_d517c4cce3_z.jpg', //house
    text: 'Do you run into the house or enter slowly',
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
