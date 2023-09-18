window.addEventListener('load', () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game

  function startGame() {
    console.log("start game");
      game =  new Game();
     game.start();
     
  }

  startButton.addEventListener('click', function () {
    startGame();
  })

  document.addEventListener('keydown' , event => {
    console.log('down' , event)
    if(event.code === 'KeyA'){
        board.directionx = -1
    }else if (event.code === "KeyD") {
      board.directionY = 1
    } 
  })

  document.addEventListener('keypress' , event => {
      console.log('up' , event);
      if (event.code === "KeyA" || event.code === "KeyD") {
        board.directionx = 0;
      }
  })
  
})
    

