'use strict';

let winMsg = document.getElementById('winMsg');
let userName = localStorage.getItem('User Name: ');
console.log('user name is: ', userName);

winMsg.textContent = `Congratulations, ${userName}, you won!`;
