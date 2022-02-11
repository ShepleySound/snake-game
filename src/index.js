import './style.css';
import grid from './grid';
import GameScreen from './gameScreen';
import GameState from './gameState';
import Control from './control';
import { UP, DOWN, LEFT, RIGHT } from './constants';
import upArrow from './assets/svgs/keyboard_arrow_up_white_36dp.svg';
import downArrow from './assets/svgs/keyboard_arrow_down_white_36dp.svg';
import leftArrow from './assets/svgs/keyboard_arrow_left_white_36dp.svg';
import rightArrow from './assets/svgs/keyboard_arrow_right_white_36dp.svg';

const scoreElement = document.querySelector('.score-value');
const gameScreenElement = document.querySelector('.game-screen');
const dpadElements = document.querySelectorAll('.dpad-button');

const addArrow = (arrowAsset) => {
  const arrowElement = document.createElement('embed');
  arrowElement.classList.add('dpad-arrow');
  arrowElement.src = arrowAsset;
  return arrowElement;
};

dpadElements.forEach((element) => {
  switch (element.dataset.value) {
    case UP:
      element.append(addArrow(upArrow));
      break;
    case DOWN:
      element.append(addArrow(downArrow));
      break;
    case LEFT:
      element.append(addArrow(leftArrow));
      break;
    case RIGHT:
      element.append(addArrow(rightArrow));
      break;
    default:
      break;
  }
});
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
