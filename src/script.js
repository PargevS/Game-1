const $start = document.querySelector('#start');
const $game = document.querySelector('#game');

$start.addEventListener('click', startGame);
$game.addEventListener('click', handlBoxClick);

let score = 0;

// handlBoxClick
function handlBoxClick(ev){
  if(ev.target.dataset){
    score ++;
    renderBox();
  }
}

// start game 
function startGame(ev){
   $game.style.backgroundColor = '#fff';
   $start.classList.add('hide');
   renderBox();
} 

// boxes render
function renderBox(){
  $game.innerHTML = '';
  let box = document.createElement('div');
  let boxSize = getRandom(30,100);
  const gameSize = $game.getBoundingClientRect();
  let maxTop = gameSize.height - boxSize;
  let maxLeft = gameSize.width - boxSize;

  box.style.height = box.style.width = boxSize + 'px';
  box.style.position = 'absolute';
  box.style.backgroundColor = '#000';
  box.style.top = getRandom(0,maxTop) + 'px';
  box.style.left = getRandom(0,maxLeft) + 'px';
  box.style.cursor = 'pointer';
  box.setAttribute('data-box','true');

  $game.insertAdjacentElement('afterbegin',box);
}

function getRandom(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}