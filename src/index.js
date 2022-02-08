import './style.css';
import grid from './grid';
import GameScreen from './gameScreen';
import GameState from './gameState';

const gameScreenElement = document.querySelector('.game-screen');
const gameScreen = new GameScreen(grid.gridStore, grid.size, gameScreenElement);
const gameState = new GameState(grid, gameScreen);
gameState.createFood({ x: 11, y: 26 });
gameState.createFood({ x: 20, y: 28 });
gameState.createFood({ x: 12, y: 21 });

window.addEventListener('keydown', (e) => {
  const pos = { x: gameState.pos[0].x, y: gameState.pos[0].y };
  // gameState.setGridElement(pos.x, pos.y, 0);
  if (e.code === 'ArrowUp') {
    pos.x -= 1;
    if (gameState.isValidMove(pos)) {
      gameState.moveSnake(pos);
    }
  }
  if (e.code === 'ArrowDown') {
    pos.x += 1;
    if (gameState.isValidMove(pos)) {
      gameState.moveSnake(pos);
    }
  }
  if (e.code === 'ArrowLeft') {
    pos.y -= 1;
    if (gameState.isValidMove(pos)) {
      gameState.moveSnake(pos);
    }
  }
  if (e.code === 'ArrowRight') {
    pos.y += 1;
    if (gameState.isValidMove(pos)) {
      gameState.moveSnake(pos);
    }
  }
  // gameState.setGridElement(pos.x, pos.y, 1);
});
