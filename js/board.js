class Board {
  start() {
    var matrix = new Array(18);

    for (var i = 0; i < matrix.length; i++) {
      matrix[i] = new Array(11);
      for (var j = 0; j < matrix[i].length; j++) {
        var pixel = document.createElement("div");
        pixel.classList.add("pixel");
        matrix[i][j] = { elem: pixel, flag: false };
      }
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function getShape() {
      const rand = getRandomInt(4);
      const list = [new I(), new B(), new I(), new B()];
      return list[rand];
    }

    function checkRaw(matrix) {
      let result = [];

      for (var i = 0; i < matrix.length; i++) {
        let full = true;
        for (var j = 0; j < matrix[i].length; j++) {
          if (!matrix[i][j].flag) {
            full = false;
            break;
          }
        }
        if (full) {
          result.push(i);
        }
      }
      return result;
    }

    let moveDirection = "";
    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        moveDirection = "right";
      }
      if (event.key === "ArrowLeft") {
        moveDirection = "left";
      }

      if (event.code === "Space" || event.key === " ") {
        moveDirection = "rotate";
      }
    });

    let repeat = 0;
    let scoreSum = 0;

    let currentShape = getShape();
    function myCallback() {
      if (!currentShape) {
        if(repeat ==1){
          alert("Game Over");
           clearInterval(intervalID);
         return;
        }
        currentShape = getShape();
        repeat=0;
      }

      const d = currentShape.getDimensions();
      for (i = 0; i < 4; i++) {
        matrix[d[i][0]][d[i][1]].flag = true;
      }

      var board = document.getElementById("board");
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j].flag) {
            matrix[i][j].elem.style.backgroundColor = "red";
          } else {
            matrix[i][j].elem.style.backgroundColor = "white";
          }
          board.append(matrix[i][j].elem);
        }
      }

      for (i = 0; i < 4; i++) {
        matrix[d[i][0]][d[i][1]].flag = false;
      }

      if (moveDirection == "right") {
        currentShape.moveRight();
      } else if (moveDirection == "left") {
        currentShape.moveLeft();
      } else if (moveDirection == "rotate") {
        currentShape.rotate();
      }

      currentShape.move();

      let newD = currentShape.getDimensions();

      for (let k = 0; k < 4; k++) {
        if (newD[k][0] >= 17 || matrix[newD[k][0] + 1][newD[k][1]].flag) {
          for (let j = 0; j < 4; j++) {
            matrix[d[j][0]][d[j][1]].flag = true;
          }

          // Check if a full row detected
          var res = checkRaw(matrix);

          if (res.length != 0) {
            for (let s = 0; s < res.length; s++) {
              for (let j = 0; j < matrix[res[s]].length; j++) {
                matrix[res[s]][j].flag = false;
              }
            }

            // Shift every row to down

              for (let i = res[0]-1; i > 0; i--) {
                for (let j = 0; j < matrix[i].length; j++) {
                  if (matrix[i][j].flag) {
       
                    matrix[i][j].flag = false;
                    let l = i + res.length;
              
                    console.log(l);
                    matrix[l][j].flag = true;
                  }
                }
              }
            

            switch (res.length) {
              case 1:
                scoreSum += 100;
                break;
              case 2:
                scoreSum += 300;
                break;
              case 3:
                scoreSum += 500;
                break;
              case 4:
                scoreSum += 800;
                break;
            }

            this.score.innerHTML=scoreSum;

            
          }

          currentShape = null;
        }
      }

      moveDirection = "";
      repeat++;
    }

    const intervalID = setInterval(myCallback, 200);

    setTimeout(function () {
      clearInterval(intervalID);
      console.log("Interval stopped after 5 seconds.");
    }, 1000000);
    console.log(matrix);
  }
}
