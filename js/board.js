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

     function checkRaw(matrix){
    let result= [];

          for (var i = 0; i < matrix.length; i++) {
            let full=true;
            for (var j = 0; j < matrix[i].length; j++) {
                if(!matrix[i][j].flag){

                  full=false;
                  break;
                }
            }

            if(full){
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

    let currentShape = null;
    function myCallback() {
      if (!currentShape) {
        currentShape = getShape();
      }

      const d = currentShape.getDimensions();
      for (i = 0; i < 4; i++) {
        matrix[d[i][0]][d[i][1]].flag = true;
      }

      var board = document.getElementById("board");
      for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
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
      console.log(newD);
      for (let k = 0; k < 4; k++) {
        if (newD[k][0] >= 17 || matrix[newD[k][0] + 1][newD[k][1]].flag) {
          for (let j = 0; j < 4; j++) {
            matrix[d[j][0]][d[j][1]].flag = true;
          }
          var res = checkRaw(matrix);
          if(res.length!=0){
            for(let s=0;s<res.length;s++){
              for (let j = 0; j < matrix[s].length; j++) {
              matrix[res[s]][j].flag = false;
              }
            }
         
          }
          currentShape = null;
        }
      }

      moveDirection = "";
    }

    const intervalID = setInterval(myCallback, 200);

    setTimeout(function () {
      clearInterval(intervalID);
      console.log("Interval stopped after 5 seconds.");
    }, 1000000);
    console.log(matrix);
  }

 
}
