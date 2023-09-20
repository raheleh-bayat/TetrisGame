class Shape {
  constructor() {}

  getDimensions() {
    return this.dimensions;
  }
  move() {
    for (let i = 0; i < 4; i++) {
      if (this.dimensions[i][0] + 1 >= 18) {
        return false;
      }
    }
    this.dimensions[0][0] += 1;
    this.dimensions[1][0] += 1;
    this.dimensions[2][0] += 1;
    this.dimensions[3][0] += 1;
  }
  moveRight() {
    for (let i = 0; i < 4; i++) {
      if (this.dimensions[i][1] + 1 >= 11) {
        return false;
      }
    }

    this.dimensions[0][1] += 1;
    this.dimensions[1][1] += 1;
    this.dimensions[2][1] += 1;
    this.dimensions[3][1] += 1;
  }

  moveLeft() {
    for (let i = 0; i < 4; i++) {
      if (this.dimensions[i][1] - 1 < 0) {
        return false;
      }
    }
    this.dimensions[0][1] -= 1;
    this.dimensions[1][1] -= 1;
    this.dimensions[2][1] -= 1;
    this.dimensions[3][1] -= 1;
  }
}

class Z extends Shape {
  constructor() {
    super();
    this.dimensions = [
      [0, 4],
      [0, 5],
      [1, 5],
      [1, 6],
    ];

    this.dir = "line";
  }

  rotate() {
    if (this.dir == "line") {
      this.dimensions[3][0] -= 1;
      this.dimensions[3][1] -= 1;

      this.dimensions[0][0] += 2;
      this.dimensions[1][0] += 1;
      this.dimensions[1][1] -= 1;

      this.dir = "down";
    } else {
      this.dimensions[3][0] += 1;
      this.dimensions[3][1] += 1;

      this.dimensions[0][0] -= 2;

      this.dimensions[1][0] -= 1;
      this.dimensions[1][1] += 1;

      this.dir = "line";
    }
  }
}

class L extends Shape {
  constructor() {
    super();
    this.dimensions = [
      [0, 5],
      [1, 4],
      [1, 5],
      [1, 6],
    ];
  }

  rotate() {
    return false;
  }
}

class B extends Shape {
  constructor() {
    super();
    this.dimensions = [
      [0, 4],
      [0, 5],
      [1, 4],
      [1, 5],
    ];
  }

  rotate() {
    return false;
  }
}

class I extends Shape {
  constructor() {
    super();
    this.dimensions = [
      [0, 5],
      [1, 5],
      [2, 5],
      [3, 5],
    ];
    this.dir = "down";
  }

  rotate() {
    if (this.dir == "line") {
      if (this.dimensions[3][0] + 1 >= 11 || this.dimensions[0][0] - 2 < 0) {
        return;
      }

      this.dimensions[0][0] -= 2;
      this.dimensions[0][1] += 2;

      this.dimensions[1][0] -= 1;
      this.dimensions[1][1] += 1;

      this.dimensions[3][0] += 1;
      this.dimensions[3][1] -= 1;

      this.dir = "down";
    } else {
      if (this.dimensions[3][1] + 1 >= 11 || this.dimensions[0][1] -2 < 0) {
        return;
      }
      this.dimensions[0][0] += 2;
      this.dimensions[0][1] -= 2;

      this.dimensions[1][0] += 1;
      this.dimensions[1][1] -= 1;

      this.dimensions[3][0] -= 1;
      this.dimensions[3][1] += 1;

      this.dir = "line";
    }
  }

  // if(){

  // }
}
