import './style.css';
import grid from './grid';
import GameScreen from './gameScreen';
import GameState from './gameState';
import Control from './control';

const gameScreenElement = document.querySelector('.game-screen');
const scoreElement = document.querySelector('.score-value');
// Initialize game screen, which stores grid and current score display elements
const gameScreen = new GameScreen(
  grid.gridStore,
  grid.size,
  gameScreenElement,
  scoreElement,
);

// Initialize object that stores all values related to game state
const gameState = new GameState(grid, gameScreen);

// Initalize controller object
const controller = new Control(gameState, gameState.snakeSpeed);
