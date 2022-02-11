class GameState {
  constructor(grid, screen) {
    this.snakeSize = 3;
    this.snakeSpeed = 500;
    this.movesSinceFood = 0;
    this.pos = [{ x: 1, y: 1 }];
    this.food = [];
    this.grid = grid;
    this.screen = screen;
    this.setGridElement(this.pos[0].x, this.pos[0].y, 1);
    this.isPaused = false;
    this.score = 0;
    this.isGameOver = false;
    this.updatingSpeed = false;
    this.currentName = '';
  }

  eatFood(pos) {
    this.snakeSize += 1;
    const foodIndex = this.food.indexOf(pos);
    this.food.splice(foodIndex, 1);
    this.movesSinceFood = 0;
    this.score += 100;
    this.screen.setScoreText(this.score);
    if (this.score % 500 === 0) {
      this.updatingSpeed = true;
      this.snakeSpeed -= 2;
    }
  }

  isFoodEmpty() {
    if (this.food.length) {
      return false;
    }
    return true;
  }

  getHeadPos() {
    return this.pos[0];
  }

  setHeadPos(val) {
    this.pos[0] = val;
  }

  getGridElementValue(x, y) {
    return this.grid.gridStore[x][y];
  }

  setGridElement(x, y, val) {
    this.grid.gridStore[x][y] = val;
    this.screen.setSquareValue(x, y, val);
  }

  clearGrid() {
    for (let x = 1; x <= this.grid.size; x++) {
      for (let y = 1; y <= this.grid.size; y++) {
        this.setGridElement(x, y, 0);
      }
    }
  }

  moveSnake(newPosition) {
    if (this.getGridElementValue(newPosition.x, newPosition.y) === 4) {
      this.eatFood(newPosition);
    }
    this.setGridElement(this.pos[0].x, this.pos[0].y, 2);
    this.pos.unshift(newPosition);
    this.setGridElement(newPosition.x, newPosition.y, 1);
    if (this.pos.length > this.snakeSize) {
      const tailRemove = this.pos.pop();
      this.setGridElement(tailRemove.x, tailRemove.y, 0);
    }
  }

  isValidMove(newPosition) {
    if (this.pos.some((e) => e.x === newPosition.x && e.y === newPosition.y)) {
      return false;
    }
    // eslint-disable-next-line no-restricted-syntax
    if (
      newPosition.x < 1 ||
      newPosition.x > this.grid.size ||
      newPosition.y < 1 ||
      newPosition.y > this.grid.size
    ) {
      return false;
    }

    return true;
  }

  createFood(position) {
    this.setGridElement(position.x, position.y, 4);
    this.food.push(position);
  }

  randomPosition() {
    const x = Math.floor(Math.random() * this.grid.size) + 1;
    const y = Math.floor(Math.random() * this.grid.size) + 1;
    return { x, y };
  }

  generateFood() {
    const newPosition = this.randomPosition();
    if (!this.getGridElementValue(newPosition.x, newPosition.y)) {
      this.createFood(newPosition);
    } else {
      this.generateFood();
    }
  }

  reset() {
    this.snakeSize = 3;
    this.snakeSpeed = 50;
    this.movesSinceFood = 0;
    this.pos = [{ x: 1, y: 1 }];
    this.food = [];
    this.score = 0;
    this.screen.setScoreText(this.score);
    this.isPaused = false;
    this.isGameOver = false;
    this.setGridElement(this.pos[0].x, this.pos[0].y, 1);
    this.clearGrid();
  }
}

export default GameState;
