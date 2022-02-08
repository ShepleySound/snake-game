class Grid {
  constructor(size) {
    const grid = [];
    for (let x = 1; x <= size; x++) {
      const gridY = [];
      grid[x] = gridY;
      for (let y = 1; y <= size; y++) {
        gridY[y] = 0;
      }
    }
    this.size = size;
    this.gridStore = grid;
  }
}

export default new Grid(50);
