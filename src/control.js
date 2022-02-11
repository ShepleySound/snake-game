import move from './movement';
import scoreBoard from './scoreboard';
import { UP, DOWN, LEFT, RIGHT, SPACE, ENTER } from './constants';
class Control {
  constructor(gameState, interval) {
    this.gameState = gameState;
    this.interval = interval;
    this.state = 0; // 0: idle, 1: running, 2: paused, 3: resumed
    this.enteringName = false;
    this.start();
    this.keydownListener();
    this.dpadListener();

    document
      .querySelector('#resume')
      .addEventListener('click', this.gameResume.bind(this));
    document
      .querySelector('#restart')
      .addEventListener('click', this.gameReset.bind(this));
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

  handleDpad(e) {
    const direction = e.target;
    e.preventDefault();
    if (!this.gameState.isPaused) {
      const pos = {
        x: this.gameState.pos[0].x,
        y: this.gameState.pos[0].y,
      };
      if (move.getDirection() !== UP && move.getDirection() !== DOWN) {
        if (direction.dataset.value === UP) {
          move.up(pos);
          move.setDesired(UP);
        }

        if (direction.dataset.value === DOWN) {
          move.down(pos);
          move.setDesired(DOWN);
        }
      }

      if (move.getDirection() !== LEFT && move.getDirection() !== RIGHT) {
        if (direction.dataset.value === LEFT) {
          move.left(pos);
          move.setDesired(LEFT);
        }

        if (direction.dataset.value === RIGHT) {
          move.right(pos);
          move.setDesired(RIGHT);
        }
      }
    }
  }

  dpadListener() {
    const dpad = document.querySelectorAll('.dpad-button');
    dpad.forEach((direction) => {
      direction.addEventListener('touchstart', this.handleDpad.bind(this));
      direction.addEventListener('click', this.handleDpad.bind(this));
    });
  }

  gamePause() {
    if (this.state !== 2 && this.state !== 0) {
      this.pause();
      scoreBoard.redrawScores();
      this.gameState.isPaused = true;
      document.querySelector('.overlay').style.display = 'flex';
      document.querySelector('.overlay-head').innerText = 'PAUSED';
      document.querySelector('#resume').style.display = 'flex';
    }
  }

  gameResume() {
    if (this.state === 2) {
      this.gameState.isPaused = false;
      document.querySelector('.overlay').style.display = 'none';
      document.querySelector('.overlay-head').innerText = '';
      document.querySelector('#resume').style.display = 'none';
      this.start();
    }
  }

  gameReset() {
    move.setDesired(RIGHT);
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.overlay-head').innerText = '';
    document.querySelector('#restart').style.display = 'none';
    this.gameState.reset();
    this.start();
  }

  submitName(name) {
    if (name !== '' && name.length <= 8) {
      this.gameState.currentName = name;
      this.enteringName = false;

      if (scoreBoard.hiScoreList.length < 5) {
        scoreBoard.addScore(this.gameState.currentName, this.gameState.score);
      } else {
        scoreBoard.updateScore(
          this.gameState.currentName,
          this.gameState.score,
        );
      }
      this.gameState.currentName = '';
      document.querySelector('.entername-container').style.display = 'none';
      this.gameOverOverlay();
    }
  }

  gameOverOverlay() {
    scoreBoard.redrawScores();
    document.querySelector('.overlay').style.display = 'flex';
    document.querySelector('.overlay-head').innerText = 'GAME OVER';
    document.querySelector('#restart').style.display = 'flex';

    window.addEventListener('keydown', (e) => {
      if (e.code === SPACE && this.gameState.isGameOver) {
        this.gameReset();
      }
    });
  }

  gameOver() {
    this.stop();

    // const gameOverOverlay = () => {
    //   scoreBoard.redrawScores();
    //   document.querySelector('.overlay').style.display = 'flex';
    //   document.querySelector('.overlay-head').innerText = 'GAME OVER';
    //   document.querySelector('#restart').style.display = 'flex';

    //   window.addEventListener('keydown', (e) => {
    //     if (e.code === SPACE && this.gameState.isGameOver) {
    //       this.gameReset();
    //     }
    //   });
    // };

    // If there is already a name input OR if not a high score
    if (
      this.gameState.currentName !== '' ||
      !scoreBoard.isHighScore(this.gameState.score)
    ) {
      this.gameOverOverlay();
    }

    // If name is empty AND if the score is high enough to meet list.
    if (
      this.gameState.currentName === '' &&
      scoreBoard.isHighScore(this.gameState.score)
    ) {
      const nameInput = document.querySelector('.entername-input');
      nameInput.focus();
      document.querySelector('.entername-container').style.display = 'flex';
      this.enteringName = true;

      window.addEventListener('keydown', (e) => {
        if (e.code === ENTER && this.enteringName) {
          this.submitName(nameInput.value);
        }
      });
      document.querySelector('#submit-name').addEventListener('click', () => {
        this.submitName(nameInput.value);
      });
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
      this.gameOverOverlay();
    }
  }
}

export default Control;
