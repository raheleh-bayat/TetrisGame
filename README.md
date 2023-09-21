 ### Tetris Game


## Description

This is a classic Tetris game implemented in JavaScript. Play and enjoy the challenge of stacking Tetrominos!

## Game Controls

- Move Left: Left Arrow Key
- Move Right: Right Arrow Key
- Rotate: Up Arrow Key

## Features
- Scoring system
- Level progression
- Fast-paced gameplay

## Installation
1. Clone the repository: `git clonehttps://github.com/raheleh-bayat/TetrisGame.git`
2. Open `index.html` in your web bro

## Development Stack
- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- Local Storage
- JS Audio() and JS Image()

## States

. Start Screen
. Game Screen
. Game Over Screen

### Objective

The MVP (Minimum Viable Product) of the Tetris Game is to create a basic, functional version of the classic Tetris game. The MVP serves as the foundation for further development and feature enhancements.

### Minimum Features

1. **Game Board**:
   - Display a game board grid where Tetrominos will be placed.

2. **Tetrominos**:
   - Implement the four classic Tetromino shapes: I,#,.
   - Tetrominos should be randomly generated and fall from the top of the game board.

3. **Movement**:
   - Allow players to move Tetrominos left and right using keyboard arrow keys.

4. **Rotation**:
   - Enable Tetrominos to rotate 90 degrees clockwise using the up arrow key.

5. **Falling**:
   - Tetrominos should automatically fall down at a constant rate.
   - Players should be able to manually accelerate the fall by pressing the down arrow key.

6. **Collision Detection**:
   - Detect and prevent Tetrominos from moving beyond the boundaries of the game board.
   - Detect when a Tetromino reaches the bottom or collides with other Tetrominos.

7. **Row Clearing**:
   - Check for completed rows (filled with Tetrominos).
   - Clear completed rows and shift above rows down.

8. **Scoring**:
   - Keep track of the player's score based on the number of rows cleared.

9. **Game Over**:
   - End the game when a new Tetromino cannot be placed at the top of the game board.

10. **User Interface**:
    - Display the player's current score.
    - Provide a simple start/restart button to begin a new game or restart the current game.


### Tetromino Class

Represents a Tetromino (I,#,Z shapes).

**Methods**:
- `constructor(shape)`: Creates a new Tetromino with the specified shape.
- `rotate()`: Rotates the Tetromino 90 degrees clockwise.
- `moveLeft()`: Moves the Tetromino one step to the left.
- `moveRight()`: Moves the Tetromino one step to the right.
- `moveDown()`: Moves the Tetromino one step down.
- `getCoordinates()`: Returns the current coordinates of the Tetromino.

### GameBoard Class

**Methods**:
- `constructor(rows, columns)`: Creates a game board with the specified dimensions.
- `clearRow(row)`: Clears a specific row on the game board.
- `isRowFull(row)`: Checks if a row is completely filled with Tetrominos.
- `placeTetromino(tetromino)`: Places a Tetromino on the game board.
- `removeTetromino(tetromino)`: Removes a Tetromino from the game board.

### GameManager Class

**Methods**:
- `constructor(board, tetrominoFactory)`: Initializes the game manager with a game board and a Tetromino factory.
- `startGame()`: Starts a new game.
- `moveLeft()`: Handles the left arrow key press.
- `moveRight()`: Handles the right arrow key press.
- `moveDown()`: Handles the down arrow key press.
- `rotate()`: Handles the up arrow key press.
- `update()`: Updates the game state (e.g., Tetromino falling, row clearing).
- `endGame()`: Ends the game and displays the game over screen.
- `pauseGame()`: Pauses the game.
- `resumeGame()`: Resumes the game after pausing.
- `increaseScore(points)`: Increases the player's score.

### TetrominoFactory Class

**Methods**:
- `constructor()`: Initializes the Tetromino factory.
- `generateRandomTetromino()`: Generates a random Tetromino.

### UserInterface Class

**Methods**:
- `updateScore(score)`: Updates the displayed score.
- `showGameOverScreen()`: Displays the game over screen.
- `hideGameOverScreen()`: Hides the game over screen.
- `showStartScreen()`: Displays the start/restart button.


### Extra Links


### Slides


### Deploy




