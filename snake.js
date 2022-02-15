
// Initialize with init function
	// add restart function
  // Define variables

let score = 0;
let scoreSelect = document.querySelector(".score");
let snakeLength = 1;
let startPosition = [579, 580, 581];
let direction = 1;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;
let gridContainerEl = document.getElementById("grid-container");
let cells = document.querySelectorAll(".cell-type")

  // let snakeStartLo;
  // let applelLo;

// Draw a game board 
	// Define a small cell using CSS  grid
  // make a function name "buildBoard"
  // assign a cell as a div by using for loop
function buildBoard() {
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
  randomApple()
  direction = 1;
  scoreSelect.innerHTML = score;
  startPosition = [579, 580, 581];
  startPosition.forEach(i => document.getElementById(`${i}`).style.backgroundColor = "black");
  }
  
function gameOver() {
  if(startPosition[0] + 30 >= 900 && direction === 30) {
    alert("You hit the bottom wall! Please try again!");
    popup.style.display = "flex";
  } else if(startPosition[0] % 30 === 30 -1 && direction === 1){
    alert("You hit the left wall! Please try again!");
    popup.style.display = "flex";
  } else if(startPosition[0] % 30 === 0 && direction === -1){
    alert("You hit the right wall! Please try again!");
    popup.style.display = "flex";
  } else if(startPosition[0] - 30 <= 0 && direction === -30 ){
    alert("You hit the upper wall! Please try again!");
    popup.style.display = "flex";
  }
}




  
  
	

// Snake moves
    // Keep moving

  function keepMoving(){
    let startPosition= [579, 580, 581];
    startPosition.forEach(i => document.getElementById(`${i}`).style.backgroundColor = "black");
    startPosition.pop().unshift(startPosition[0]+ direction);
    eatApple();

  }


  function eatApple(){
    if(cells[startPosition[0]] === randomAppleLo){
      document.getElementById(randomAppleLo).style.backgroundColor = "black"
      startPosition.push(startPosition[startPosition.length-1]);
      randomApple();
      score++;
      scoreSelect.innerHTML = score;
      

    }

  }

function randomApple(){
  do{
    randomAppleLo = Math.floor(Math.random()*900);
  } while (cells[randomAppleLo] === nextPosition[0]);
  document.getElementById(randomAppleLo).style.backgroundColor = "red"
 }

 


// function moveByArrow() {
//   document.addEventListener('keydown', (e) => {
//     e = e || window.event;
//     if (e.key === 'ArrowUp') {
//       postion1 = startPosition[0] +  30
      
//     } else if (e.key === 'ArrowDown') {
//       startPosition[0](el -= 30)
//     } else if (e.key === 'ArrowLeft') {
//       startPosition.forEach(el -= 1)
//     } else if (e.key === 'ArrowRight') {
//       startPosition.forEach(el += 1)
//     }
//   });

// }
// moveByArrow()
// function nextpostion () {
//   let position = [];
//   if(randomNum === position[3]){
//     document.getElementById(randomNum).style.backgroundColor = "black"
//   } 

// }


      // define "render" function which makes snake keeps moving to forward direction if there is no arrow key input
    // Stop moving when hit one of four walls
    // Change direction with arrow keys
      //add event listener "keydown" for each arrow key buttons
      //make a "changeDirection" function

// Scores increases by 1 every time snake eats a fruit
  // add a function name "newAppleLo" to locate a new apple

// Game is over when snake hit the wall or hit itself
  // make a "GameOver" function which stop the game with alert message
//  Restart the game with restart button
  // make a "restart" function
