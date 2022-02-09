class TimerActions {
  constructor(direction) {
    this.direction = direction;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  moveTimer() {
    return setInterval();
  }
}

export default TimerActions;
