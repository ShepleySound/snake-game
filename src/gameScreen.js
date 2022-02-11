class GameScreen {
  constructor(grid, gridSize, screenElement, scoreElement) {
    this.grid = grid;
    this.gridSize = gridSize;
    this.screenElement = screenElement;
    this.screenElement.style.gridTemplate = `repeat(${this.gridSize}, 1fr) / repeat(${this.gridSize}, 1fr)`;
    this.scoreElement = scoreElement;
    this.grid.forEach((x, xIndex) => {
      x.forEach((y, yIndex) => {
        const square = document.createElement('div');
        square.dataset.x = `${xIndex}`;
        square.dataset.y = `${yIndex}`;
        square.dataset.val = `${y}`;
        square.classList.add('square');
        this.screenElement.append(square);
      });
    });
  }

  gridSquare(x, y) {
    return this.screenElement.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  }

  setSquareValue(x, y, value) {
    this.gridSquare(x, y).dataset.val = value;
  }

  setScoreText(score) {
    this.scoreElement.innerText = score;
    this.screenElement.style.boxShadow = `0px 0px ${score / 100}px #ffffff`;
  }
}

export default GameScreen;
