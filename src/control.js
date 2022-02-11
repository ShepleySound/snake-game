import move from './movement';
import scoreBoard from './scoreboard';
import { UP, DOWN, LEFT, RIGHT, SPACE } from './constants';
class Control {
  constructor(gameState, interval) {
    this.gameState = gameState;
    this.interval = interval;
    this.state = 0; // 0: idle, 1: running, 2: paused, 3: resumed
    this.start();
    this.keydownListener();
    this.dpadListener();
  }
  // Start the timer that controls snake movement and food spawn
  start() {
    this.timerId = window.setInterval(() => {
      this.moveSnake();
    }, this.gameState.snakeSpeed);
    this.state = 1;
  }
  // Clear the timer so that a new interval can be set
  updateSpeed() {
    clearInterval(this.timerId);
    this.timerId = window.setInterval(() => {
      this.moveSnake();
    }, this.gameState.snakeSpeed);
    this.gameState.updatingSpeed = false;
  }
  //
  pause() {
    if (this.state != 1 && this.state != 3) return;

    clearInterval(this.timerId);
    this.state = 2;
  }

  stop() {
    clearInterval(this.timerId);
    this.state = 0;
  }

  moveSnake() {
    move.setDirection(move.getDesired());
    const pos = { x: this.gameState.pos[0].x, y: this.gameState.pos[0].y };
    if (!this.gameState.isPaused) {
      switch (move.getDirection()) {
        case UP:
          move.up(pos);
          break;
        case DOWN:
          move.down(pos);
          break;
        case LEFT:
          move.left(pos);
          break;
        case RIGHT:
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

  keydownListener() {
    window.addEventListener('keydown', (e) => {
      if (!this.gameState.isPaused) {
        const pos = { x: this.gameState.pos[0].x, y: this.gameState.pos[0].y };
        if (move.getDirection() !== UP && move.getDirection() !== DOWN) {
          if (e.code === 'ArrowUp') {
            move.up(pos);
            move.setDesired(UP);
          }

          if (e.code === 'ArrowDown') {
            move.down(pos);
            move.setDesired(DOWN);
          }
        }

        if (move.getDirection() !== LEFT && move.getDirection() !== RIGHT) {
          if (e.code === 'ArrowLeft') {
            move.left(pos);
            move.setDesired(LEFT);
          }

          if (e.code === 'ArrowRight') {
            move.right(pos);
            move.setDesired(RIGHT);
          }
        }
      }

      if (e.code === SPACE) {
        if (!this.gameState.isGameOver && !this.gameState.isPaused) {
          this.gamePause();
        } else {
          this.gameResume();
        }
      }
    });
  }

  dpadListener() {
    const dpad = document.querySelectorAll('.dpad-button');
    dpad.forEach((direction) => {
      direction.addEventListener('click', () => {
        if (!this.gameState.isPaused) {
          const pos = {
            x: this.gameState.pos[0].x,
            y: this.gameState.pos[0].y,
          };
          if (move.getDirection() !== UP && move.getDirection() !== DOWN) {
            if (direction.value === UP) {
              move.up(pos);
              move.setDesired(UP);
            }

            if (direction.value === DOWN) {
              move.down(pos);
              move.setDesired(DOWN);
            }
          }

          if (move.getDirection() !== LEFT && move.getDirection() !== RIGHT) {
            if (direction.value === LEFT) {
              move.left(pos);
              move.setDesired(LEFT);
            }

            if (direction.value === RIGHT) {
              move.right(pos);
              move.setDesired(RIGHT);
            }
          }
        }
      });
    });
  }

  gamePause() {
    if (this.state !== 2 && this.state !== 0) {
      this.pause();
      scoreBoard.redrawScores();
      this.gameState.isPaused = true;
      document.querySelector('.overlay').style.display = 'flex';
      document.querySelector('.overlay-head').innerText = 'PAUSED';
    }
  }

  gameResume() {
    if (this.state === 2) {
      this.gameState.isPaused = false;
      document.querySelector('.overlay').style.display = 'none';
      document.querySelector('.overlay-head').innerText = '';
      this.start();
    }
  }

  gameOver() {
    this.stop();

    const triggerReset = (e) => {
      if (e.code === SPACE) {
        move.setDesired(RIGHT);
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.overlay-head').innerText = '';
        this.gameState.reset();
        this.start();
        window.removeEventListener('keydown', triggerReset);
      }
    };

    const submitName = (e) => {
      const nameInput = document.querySelector('.entername-input');
      nameInput.focus();
      this.gameState.currentName = nameInput.value;
      if (e.code === 'Enter') {
        if (nameInput.value !== '' && nameInput.value.length <= 8) {
          if (scoreBoard.hiScoreList.length < 5) {
            scoreBoard.addScore(
              this.gameState.currentName,
              this.gameState.score,
            );
          } else {
            scoreBoard.updateScore(
              this.gameState.currentName,
              this.gameState.score,
            );
          }
          nameInput.value = '';
          this.gameState.currentName = '';
          window.removeEventListener('keydown', submitName);
          document.querySelector('.entername-container').style.display = 'none';
          gameOverOverlay();
        }
      }
    };
    const gameOverOverlay = () => {
      scoreBoard.redrawScores();
      document.querySelector('.overlay').style.display = 'flex';
      document.querySelector('.overlay-head').innerText = 'GAME OVER';
      window.addEventListener('keydown', triggerReset);
    };

    // If there is already a name input OR if not a high score
    if (
      this.gameState.currentName !== '' ||
      !scoreBoard.isHighScore(this.gameState.score)
    ) {
      gameOverOverlay();
    }

    // If name is empty AND if the score is high enough to meet list.
    if (
      this.gameState.currentName === '' &&
      scoreBoard.isHighScore(this.gameState.score)
    ) {
      document.querySelector('.entername-container').style.display = 'flex';
      window.addEventListener('keydown', submitName);
    }

    // If name is already given AND if the score is high enough to meet list.
    if (
      this.gameState.currentName !== '' &&
      scoreBoard.isHighScore(this.gameState.score)
    ) {
      if (scoreBoard.hiScoreList.length < 5) {
        scoreBoard.addScore(this.gameState.currentName, this.gameState.score);
      } else {
        scoreBoard.updateScore(
          this.gameState.currentName,
          this.gameState.score,
        );
      }
      gameOverOverlay();
    }
  }
}

export default Control;
