const $start = document.querySelector('#start');
const $game = document.querySelector('#game');
const $time = document.querySelector('#time');
const $result = document.querySelector('#result');
const $timeHeader = document.querySelector('#time-header');
const $resultHeader = document.querySelector('#result-header');
const $gameTime = document.querySelector('#game-time');

$start.addEventListener('click', startGame);
$gameTime.addEventListener('input',setGameTime);



let score = 0;
let isGameStarted = false;

// handlBoxClick
function handlBoxClick(ev){
  if(!isGameStarted ){
      return;
  }
  if(ev.target.dataset){
    score ++;
    renderBox();
    ev.preventDefault();
  }
}

// start game 
function startGame(ev){
  score = 0;
  setGameTime()
  $gameTime.setAttribute('disabled','true');

  isGameStarted = true;
  $game.style.backgroundColor = '#fff';
  $start.classList.add('hide');
  let interval = setInterval( () => {
  let time = parseFloat($time.textContent);

    if(time <= 0){
      clearInterval(interval);
      endGame();
    }else{
      $time.textContent = (time - 0.1).toFixed(1);
    }

  },100);

   renderBox();
} 

//game score
function setGameScore(){
  $result.textContent = score.toString();
}

// set game time
function setGameTime(){
  let time = +$gameTime.value;
  $time.textContent = time.toFixed(1);
  $timeHeader.classList.remove('hide');
  $resultHeader.classList.add('hide');
}

// end game
function endGame(){
  isGameStarted = false;
  setGameScore();
  $gameTime.removeAttribute('disabled');
  $start.classList.remove('hide');
  $game.innerHTML = '';
  $game.style.backgroundColor = '#ccc';
  $timeHeader.classList.add('hide');
  $resultHeader.classList.remove('hide');
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
  box.addEventListener('click', handlBoxClick);

  $game.insertAdjacentElement('afterbegin',box);
}

//randomly changing the size and coordinates of the square
function getRandom(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

// Random color change
function getRandomColor(){
  let index = Math.floor(Math.random() * 10);
  const colors = ['#FF0000','#FFC618','#FF188D','#A2FF18','#8E18FF','#18FF98','#FFA018','#FF4C18','#3FFF18','#000'];
  return colors[index];
}
