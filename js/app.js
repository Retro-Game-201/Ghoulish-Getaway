'use strict';

let health = 3;
let playerName;

//are we doing images? map?

// // let images = document.getElementById("images");
// let text = document.getElementById('text');
// let buttonBox = document.getElementById('buttonBox');
// let input = document.getElementById('input');

// function nextQ(num) {
//   //   changeImage(num.image);
//   changeText(num.text);
//   changeButtons(num.buttons);
// }

// addEventListener("click", nextQ()) = 

// function (event) {
//   if (event.key == 'Enter' || event.keyCode == 13) {
//     playerName = input.value;
//     input.parentNode.removeChild(input);
//     nextQ(scenario.two);
//   }
// };





// if ('choice' === optionA) {
//     health--;
//     nextQ();
// } else {
//     nextQ();
// };

const scenario {
    one: {
        text:'Your car has broken down. Do you run up the stairs or walk',
        buttons: [[Run], [Walk]]
    },
    two: {
        text: 'There is a stag head on the wall. Do you look at it?',
        buttons: [[Yes], [No]],
    },
    three: {
        text: 'There is a record player. Do you play spooky music or fun music?',
        buttons: [[Spooky], [fun]]
    }
}

// nextQ(scenario.one);