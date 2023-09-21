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

  restartButton.addEventListener('click' , function (){
     location.reload("http://127.0.0.1:5500/index.html");

  })
  
})


    

