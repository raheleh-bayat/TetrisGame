class Game {
  constructor(){
    this.startScreen = document.getElementById('game-intro'); 
    this.gameCanvas =  document.getElementById('game-Canvas');
    this.gameEndscreen = document.getElementById("game-end");
    // this.gameBottons = document.getElementById("game-bottons");
    this.hieght= 400; 
    this.width= 300;
    this.border = '1px solid green';
    this.marginLeft = 20;
    this.borderRadius = 10;
    this.example =0; 
  }

  start(){
    this.startScreen.style.display = 'none';
    this.gameCanvas.style.display = "block";
    // this.gameBottons.style.display = "block";
    this.gameCanvas.style.height = `${this.hieght}px`;
    this.gameCanvas.style.width = `${this.width}px`;
    this.gameCanvas.style.border = this.border; 
    this.gameCanvas.style.marginLeft =`${this.marginLeft}px`;
    this.gameCanvas.style.borderRadius = `${this.borderRadius}px`;
    this.player = new player(startScreen); 

  }

  gameloop(){
    this.update()
    console.log(this.example);
    requestAnimationFrame(() => this.gameloop());
  }

  update(){
    history.example += 1;
  } 
}