'use strict';

var $start = document.querySelector('#start');
var $game = document.querySelector('#game');

$start.addEventListener('click', startGame);
$game.addEventListener('click', handlBoxClick);

var score = 0;

// handlBoxClick
function handlBoxClick(ev) {
  if (ev.target.dataset) {
    score++;
    renderBox();
  }
}

// start game 
function startGame(ev) {
  $game.style.backgroundColor = '#fff';
  $start.classList.add('hide');
  renderBox();
}

// boxes render
function renderBox() {
  $game.innerHTML = '';
  var box = document.createElement('div');
  var boxSize = getRandom(30, 100);
  var gameSize = $game.getBoundingClientRect();
  var maxTop = gameSize.height - boxSize;
  var maxLeft = gameSize.width - boxSize;

  box.style.height = box.style.width = boxSize + 'px';
  box.style.position = 'absolute';
  box.style.backgroundColor = '#' + +'';
  box.style.top = getRandom(0, maxTop) + 'px';
  box.style.left = getRandom(0, maxLeft) + 'px';
  box.style.cursor = 'pointer';
  box.setAttribute('data-box', 'true');

  $game.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
  var index = Math.floor(Math.random()) * Math.floor(Math.random() * 10);
  var colors = ['#FF0000', '#FFC618', '#FF188D', '#A2FF18', '#8E18FF', '#18FF98', '#FFA018', '#FF4C18', '#3FFF18', '#000'];
  console.log(index);
}
getRandomColor();