import './style.css';
import grid from './grid';
import GameScreen from './gameScreen';
import GameState from './gameState';
import move from './movement';

const gameScreenElement = document.querySelector('.game-screen');
const gameScreen = new GameScreen(grid.gridStore, grid.size, gameScreenElement);
const gameState = new GameState(grid, gameScreen);

const moveSnake = () => {
  move.setDirection(move.getDesired());
  const pos = { x: gameState.pos[0].x, y: gameState.pos[0].y };
  if (!gameState.isPaused) {
    switch (move.getDirection()) {
      case 'up':
        move.up(pos);
        break;
      case 'down':
        move.down(pos);
        break;
      case 'left':
        move.left(pos);
        break;
      case 'right':
        move.right(pos);
        break;
      default:
        break;
    }
  }
  if (gameState.isValidMove(pos)) {
    gameState.moveSnake(pos);
    console.log(gameState.movesSinceFood);

    gameState.movesSinceFood += 1;
  }
  if (gameState.movesSinceFood >= 400) {
    gameState.movesSinceFood = 0;
    gameState.generateFood();
  }
  if (gameState.isFoodEmpty()) {
    gameState.generateFood();
  }
};

let moveFunction = window.setInterval(moveSnake, gameState.snakeSpeed);
window.addEventListener('keydown', (e) => {
  const pos = { x: gameState.pos[0].x, y: gameState.pos[0].y };
  if (move.getDirection() !== 'up' && move.getDirection() !== 'down') {
    if (e.code === 'ArrowUp') {
      move.up(pos);
      move.setDesired('up');
    }

    if (e.code === 'ArrowDown') {
      move.down(pos);
      move.setDesired('down');
    }
  }

  if (move.getDirection() !== 'left' && move.getDirection() !== 'right') {
    if (e.code === 'ArrowLeft') {
      move.left(pos);
      move.setDesired('left');
    }

    if (e.code === 'ArrowRight') {
      move.right(pos);
      move.setDesired('right');
    }
  }

  if (e.code === 'Space') {
    if (!gameState.isPaused) {
      gameState.isPaused = true;
      clearInterval(moveFunction);
    } else {
      gameState.isPaused = false;
      moveFunction = setInterval(moveSnake, gameState.snakeSpeed);
    }
  }
});
