class GameState {
  constructor(grid, screen) {
    this.snakeSize = 3;
    this.pos = [{ x: 1, y: 1 }];
    this.food = [];
    this.grid = grid;
    this.screen = screen;
    this.setGridElement(this.pos[0].x, this.pos[0].y, 1);
  }

  setGridElement(x, y, val) {
    this.grid.gridStore[x][y] = val;
    this.screen.setSquareValue(x, y, val);
  }

  moveSnake(newPosition) {
    this.setGridElement(this.pos[0].x, this.pos[0].y, 2);
    this.pos.unshift(newPosition);
    this.setGridElement(newPosition.x, newPosition.y, 1);
    if (this.pos.length > this.snakeSize) {
      const tailRemove = this.pos.pop();
      this.setGridElement(tailRemove.x, tailRemove.y, 0);
    }
    if (this.food.some((e) => e.x === newPosition.x && e.y === newPosition.y)) {
      this.snakeSize += 1;
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
}

export default GameState;
