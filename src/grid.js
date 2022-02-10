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

  // clear() {
  //   this.gridStore.forEach((x) => {
  //     x.forEach((square) => {
  //       square = 0;
  //       console.log(square);
  //     });
  //   });
  // }
}

export default new Grid(50);
