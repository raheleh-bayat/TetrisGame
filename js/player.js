class player {
    constructor(gameCanvas, left, right, bottom, width, rotate){
        this.gameCanvas= gameCanvas;
        this.left = left
        this.right = right
        this.bottom = bottom
        this.width = width
        this.height = height
        this.rotate = rotate;
        this.element.style.position = 'absolute'

    }

    tetriminos(){
        tetriminos = {
          I: [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
          O: [
            [1, 1],
            [1, 1],
          ],
        };
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");
        function drawTetrimino(tetrimino, x, y, color){
            for(let row =0 ; row < tetrimino.length ; row++){
                for(let col =0 ; col < tetrimino[row].length ;col++ ){
                    if (tetrimino[row][col]) {
                        ctx.fillStyle = color;
                        ctx.fillRect(x + col * 30, y + row * 30, 30, 30);
                        ctx.strokeStyle = "black";
                        ctx.strokeRect(x + col * 30, y + row * 30, 30, 30);
                    }
                }
            }
        }
             this.gameCanvas.appendChild(this.tetriminos());
    }
   
}