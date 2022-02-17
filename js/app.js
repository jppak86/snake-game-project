let score = 0;
let startPosition = [579, 580, 581];
let direction = 1;
let speed = 0.8;
let intervalTime = 1000;
let interval = 0;


const scoreSelect = document.querySelector(".score");
const resetBtn = document.getElementById("restart")
const backSound = document.querySelector(".musicBtn");


const musicBack = new Audio("../audio/back-ground.mp3");

backSound.addEventListener("click", function(evt) {
  musicBack.volume = .10
  musicBack.play()
})

document.addEventListener('keydown', (e) => {
  e = e || window.event;
  if (e.key === 'ArrowUp') {
    direction = -30;
  } else if (e.key === 'ArrowDown') {
    direction = +30;
  } else if (e.key === 'ArrowLeft') {
    direction = -1;
  } else if (e.key === 'ArrowRight') {
    direction = 1;
  }
});

resetBtn.addEventListener("click", restartGame)


buildBoard()
init()


function buildBoard() {
  const gridContainerEl = document.getElementById("grid-container");
  gridContainerEl.innerHTML = ""
  for (let i = 0; i < 900; i++){
    const cellEl = document.createElement("div");
    cellEl.setAttribute("class", "cell");
    gridContainerEl.appendChild(cellEl);
    const cellType = document.createElement("div");
    cellType.setAttribute("class", "cell-type");
    cellType.setAttribute("id", i);
    cellEl.appendChild(cellType);
  }
}


function init() {
  randomApple();
  direction = 1;
  score = 0;
  scoreSelect.innerHTML =`Score: ${score}`;
  speed = 0.8;
  startPosition = [579, 580, 581, 582];
  startPosition.forEach(i => document.getElementById(`${i}`).style.backgroundColor = "#fff56c");
  clearInterval(interval)
  intervalTime = 800;
  interval = setInterval(gameOver, intervalTime);
  }
  

  function keepMoving(){
    startPosition.shift();
    startPosition.push(startPosition[startPosition.length-1] + direction);
    startPosition.forEach(i => document.getElementById(`${i}`).style.backgroundColor = "#fff56c");
    const cells = document.querySelectorAll(".cell-type")
    cells.forEach(cell => {
    if(!startPosition.includes(parseInt(cell.id))){
      cell.style.backgroundColor = "#26b9c8";
    }if(startPosition[startPosition.length -1] !== randomAppleLo){
      cells[randomAppleLo].style.backgroundColor = "#ed7f8c"
    }
    })
    eatApple()
  }


function gameOver() {
  let snakeHead = startPosition[startPosition.length-1];
  let nextCell = startPosition[startPosition.length-1] + direction;
  if(snakeHead+ 30 >= 900 && direction === 30) {
    alert("you hit the bottom wall!")
    restartGame();
  } if(snakeHead % 30 === 30 -1 && direction === 1){
    alert("you hit the right wall!")
    restartGame();
  } if(snakeHead % 30 === 0 && direction === -1){
    alert("you hit the left wall!")
    restartGame();
  } if(snakeHead - 30 <= 0 && direction === -30 ){
    alert("you hit the uppper wall!")
    restartGame();
  } if(startPosition.slice(1).includes(nextCell)){
    alert("you hit yourself!")
    restartGame();
  } else {
    keepMoving();
  }
}


function eatApple(){
  if(startPosition[startPosition.length -1] === randomAppleLo){
    startPosition.push(randomAppleLo);
    document.getElementById(randomAppleLo).style.backgroundColor = "#fff56c"
    randomApple();
    score++;
    scoreSelect.innerHTML =`Score: ${score}`;
    clearInterval(interval);
    intervalTime = intervalTime * speed;
    interval = setInterval(gameOver, intervalTime);
  }
}


function randomApple(){
  do{
  randomAppleLo = Math.floor(Math.random()*900);
  document.getElementById(randomAppleLo).style.backgroundColor = "#ed7f8c";}
  while (startPosition.includes(randomAppleLo));
}


function restartGame() {
  init();
  buildBoard();
  musicBack.pause();
  musicBack.currentTime = 0;
}