import './style.css';
import grid from './grid';
import GameScreen from './gameScreen';
import GameState from './gameState';
import move from './movement';
import Control from './control';

const gameScreenElement = document.querySelector('.game-screen');
const scoreElement = document.querySelector('.score-value');
const gameScreen = new GameScreen(
  grid.gridStore,
  grid.size,
  gameScreenElement,
  scoreElement,
);

const startGame = () => {
  return new GameState(grid, gameScreen);
};

let gameState = new GameState(grid, gameScreen);

// const moveSnake = () => {
//   move.setDirection(move.getDesired());
//   const pos = { x: gameState.pos[0].x, y: gameState.pos[0].y };
//   if (!gameState.isPaused) {
//     switch (move.getDirection()) {
//       case 'up':
//         move.up(pos);
//         break;
//       case 'down':
//         move.down(pos);
//         break;
//       case 'left':
//         move.left(pos);
//         break;
//       case 'right':
//         move.right(pos);
//         break;
//       default:
//         break;
//     }
//   }

//   if (!gameState.isValidMove(pos) && !gameState.isPaused) {
//     gameState.isGameOver = true;
//     console.log(gameState.pos);
//     controller.;
//     gameOver();
//   }
//   if (gameState.isValidMove(pos)) {
//     gameState.moveSnake(pos);
//     gameState.movesSinceFood += 1;
//   }
//   if (gameState.movesSinceFood >= 400) {
//     gameState.movesSinceFood = 0;
//     gameState.generateFood();
//   }
//   if (gameState.isFoodEmpty()) {
//     gameState.generateFood();
//   }
// };

const controller = new Control(gameState, gameState.snakeSpeed);
controller.start();

window.addEventListener('keydown', (e) => {
  if (!gameState.isPaused) {
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
  }

  if (e.code === 'Space') {
    if (!gameState.isGameOver) {
      if (!gameState.isPaused) {
        gameState.isPaused = true;
        controller.pause();
        document.querySelector('.overlay').style.display = 'flex';
        document.querySelector('.overlay-head').innerText = 'PAUSED';
      } else {
        gameState.isPaused = false;
        controller.start();
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.overlay-head').innerText = '';
      }
    }
  }
});
