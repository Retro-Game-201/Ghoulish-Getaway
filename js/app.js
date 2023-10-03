'use strict';

function startGame() {
  const userName = prompt('Please enter your name:');
  if (userName) {
    localStorage.setItem('User Name: ', userName);
  } else {
    alert('Name is required to start');
  }
}

document.getElementById('start').addEventListener('click', startGame);
