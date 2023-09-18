class Game {
  constructor(){
    this.startScreen = document.getElementById('game-intro'); 
    this.board = document.getElementById("board");
    this.gameEndscreen = document.getElementById("game-end");
    this.pixel = document.getElementsByClassName(".pixel");
    this.width = 196;
    this.height=323;
    this.display="grid";
    this.border = '1px solid green';
    this.padding = "2px";
    this.gridtemplatecolumns =
      "18px 18px 18px 18px 18px 18px 18px 18px 18px 18px 18px";
    this.gridtemplaterows =
        "18px 18px 18px 18px 18px 18px 18px 18px 18px 18px 18px 18px 18px 18px 18px 18px 18px 18px";
    this.marginLeft = 20;
    this.borderRadius = 10;
    this.example =0; 
  }

  start(){
    this.startScreen.style.display = 'none';
    this.gameEndscreen.style.direction = "none";

    this.board.style.display = "block";
    this.board.style.height = `${this.height}px`;
    this.board.style.width = `${this.width}px`;
    this.board.style.display = `${this.display}`
    this.board.style.padding =`${this.padding}px`
    this.board.style.gridTemplateColumns = `${this.gridtemplatecolumns
    }`;
    this.board.style.gridTemplateRows = `${this.gridtemplaterows}`;
    console.log(this.board.style);
    this.board.style.border = this.border; 
    this.board.style.marginLeft = `${this.marginLeft}px`;
    this.board.style.borderRadius = `${this.borderRadius}px`;

    const board = new Board(); 
    board.start();

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