window.addEventListener('load', () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  function startGame() {
    console.log("start game");
     const game =  new Game();
     game.start();
  }

  startButton.addEventListener('click', function () {
    startGame();
  })
  
})
    

