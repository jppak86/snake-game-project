
let score = 0;
let scoreSelect = document.querySelector(".score");
let snakeLength = 1;
let startPosition = [579, 580, 581];
let direction = 1;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;
let cells = document.querySelectorAll(".cell-type")

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
  scoreSelect.innerHTML = score;
  startPosition = [579, 580, 581];
  startPosition.forEach(i => document.getElementById(`${i}`).style.backgroundColor = "black");

  intervalTime = 1000;
  interval = setInterval(gameOver, intervalTime);
  }
  


function gameOver() {
  if(startPosition[0] + 30 >= 900 && direction === 30) {
    restartGame()
  } else if(startPosition[0] % 30 === 30 -1 && direction === 1){
    restartGame()
  } else if(startPosition[0] % 30 === 0 && direction === -1){
    restartGame()
  } else if(startPosition[0] - 30 <= 0 && direction === -30 ){
    restartGame()
  } else {
    keepMoving();
  }
}

function keepMoving(){
  console.log(startPosition)
  startPosition.pop();
  startPosition.unshift(startPosition[0] + direction);
  startPosition.forEach(i => document.getElementById(`${i}`).style.backgroundColor = "black");
  const cells = document.querySelectorAll(".cell-type")
  cells.forEach(cell => {
  if(!startPosition.includes(parseInt(cell.id))){
    cell.style.backgroundColor = "#0c81b8";
  }
  })
    
  eatApple();
  
}

function eatApple(){
  if(startPosition[0] === randomAppleLo){
    document.getElementById(randomAppleLo).style.backgroundColor = "black"
    startPosition.push(randomAppleLo);
    randomApple();
    score++;
    scoreSelect.innerHTML = score;
    clearInterval(interval);
    intervalTime = intervalTime * speed;
    interval = setInterval(gameOver, intervalTime);
  }
}

function randomApple(){
  
    randomAppleLo = Math.floor(Math.random()*900);
    document.getElementById(randomAppleLo).style.backgroundColor = "red";
 
  
}


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

const resetBtn = document.querySelector("button")
resetBtn.addEventListener("click", restartGame)

function restartGame() {
  init();
buildBoard();

}
