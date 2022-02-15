
// Initialize with init function
	// add restart function
  // Define variables

  let score = 0;
  let scoreSelect = document.querySelector(".score");
  let snakeLength = 1;
  let startPosition = [579, 580, 581];
  let direction = 1;
  

  // let snakeStartLo;
  // let applelLo;

// Draw a game board 
	// Define a small cell using CSS  grid
  // make a function name "buildBoard"
  // assign a cell as a div by using for loop
  function buildBoard(){
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
  
  buildBoard()

const gridContainerEl = document.getElementById("grid-container");
const cells = document.querySelectorAll(".cell-type")


  
  
	

// Snake moves
    // Keep moving

  function keepMoving(){
    let startPosition= [579, 580, 581];
    const snakeColor = startPosition.forEach(i => document.getElementById(`${i}`).style.backgroundColor = "black");
    let nextPosition = startPosition.pop().unshift(startPosition[0]+ direction);
    // function position(){
    //   position = startPosition;
    //   startPosition.shift().push("401")
    //   console.log(position)
    // }
    // position()
  }

  keepMoving()

  function eatApple(){
    
  }

  function randomApple(){
    do{
      randomAppleLo = Math.floor(Math.random()*900);
    } while (cells[randomAppleLo] === nextPosition[0]);
    document.getElementById(randomAppleLo).style.backgroundColor = "red"
  }
randomApple()

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
