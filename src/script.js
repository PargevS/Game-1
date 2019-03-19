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
  box.style.backgroundColor = '' + getRandomColor() + '';
  box.style.top = getRandom(0,maxTop) + 'px';
  box.style.left = getRandom(0,maxLeft) + 'px';
  box.style.cursor = 'pointer';
  box.setAttribute('data-box','true');

  $game.insertAdjacentElement('afterbegin',box);
}

function getRandom(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor(){
  let index = Math.floor(Math.random() * 10);
  const colors = ['#FF0000','#FFC618','#FF188D','#A2FF18','#8E18FF','#18FF98','#FFA018','#FF4C18','#3FFF18','#000'];
  return colors[index];
}
