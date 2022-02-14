
// Initialize with init function
	// add restart function
  // Define variables

  // let score;
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
  
  const gridContainerEl = document.getElementById("grid-container");



  
  buildBoard()
	

// Snake moves
    // Keep moving

  function keepMoving(){
    let startPosition= [397,398,399,400];
    startPosition.forEach(i => document.getElementById(`${i}`).style.backgroundColor = "black")

  }

  keepMoving()

  function randomApple(){
    randomNum = Math.floor(Math.random()*900)
    document.getElementById(randomNum).style.backgroundColor = "red"
  }
randomApple()

function moveByArrow() {
  document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
      console.log('up arrow pressed')
    } else if (e.key === 'ArrowDown') {
      console.log('down arrow pressed')
    } else if (e.key === 'ArrowLeft') {
      console.log('left arrow pressed')
    } else if (e.key === 'ArrowRight') {
      console.log('right arrow pressed')
    }
  });

}

function nextpostion () {
  
}
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
