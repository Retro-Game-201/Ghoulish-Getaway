'use strict';
const startbutton = document.getElementById('start');
const userNameInput = document.getElementById('username');


function startGame() {
  const userName = userNameInput.value;
  if (userName) {
    localStorage.setItem('User Name: ', userName);
    window.location.href = 'gameplay.html';
  } else {
    alert('Name is required to start');
  }
}

startbutton.addEventListener('click', startGame);

document.getElementById('start').addEventListener('click', startGame);
