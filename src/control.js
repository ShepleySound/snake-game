import move from './movement';
class Control {
  constructor(gameState, interval) {
    this.gameState = gameState;
    this.interval = interval;
    this.state = 0; // 0: idle, 1: running, 2: paused, 3: resumed
  }

  start() {
    console.log('Starting timer');
    this.timerId = window.setInterval(() => {
      this.moveSnake();
    }, this.gameState.snakeSpeed);
    this.state = 1;
    console.log(this.gameState.snakeSpeed);
  }

  updateSpeed() {
    clearInterval(this.timerId);
    this.timerId = window.setInterval(() => {
      this.moveSnake();
    }, this.gameState.snakeSpeed);
    this.gameState.updatingSpeed = false;
  }

  pause() {
    console.log(this.gameState);
    if (this.state != 1 && this.state != 3) return;

    console.log('Pausing timer');
    clearInterval(this.timerId);
    this.state = 2;
  }

  stop() {
    console.log('Stopping timer!!!');
    clearInterval(this.timerId);
    this.state = 0;
  }

  moveSnake() {
    move.setDirection(move.getDesired());
    const pos = { x: this.gameState.pos[0].x, y: this.gameState.pos[0].y };
    if (!this.gameState.isPaused) {
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

    if (!this.gameState.isValidMove(pos) && !this.gameState.isPaused) {
      this.gameState.isGameOver = true;
      this.gameOver();
    }
    if (this.gameState.isValidMove(pos)) {
      this.gameState.moveSnake(pos);
      this.gameState.movesSinceFood += 1;
      if (this.gameState.updatingSpeed) {
        this.updateSpeed();
      }
    }
    if (this.gameState.movesSinceFood >= 400) {
      this.gameState.movesSinceFood = 0;
      this.gameState.generateFood();
    }
    if (this.gameState.isFoodEmpty()) {
      this.gameState.generateFood();
    }
  }

  gameOver() {
    this.stop();
    document.querySelector('.game-over').style.display = 'flex';
    const triggerReset = (e) => {
      if (e.code === 'Space') {
        move.setDesired('right');
        document.querySelector('.game-over').style.display = 'none';
        this.gameState.reset();
        this.start();
        window.removeEventListener('keydown', triggerReset);
      }
    };

    window.addEventListener('keydown', triggerReset);
  }
}

export default Control;
