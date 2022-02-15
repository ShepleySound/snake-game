class move {
  static desiredDirection = 'right';

  static direction = 'right';

  static up(pos) {
    pos.x -= 1;
  }

  static down(pos) {
    pos.x += 1;
  }

  static left(pos) {
    pos.y -= 1;
  }

  static right(pos) {
    pos.y += 1;
  }

  static getDesired() {
    return this.desiredDirection;
  }

  static setDesired(desiredDirection) {
    this.desiredDirection = desiredDirection;
  }

  static getDirection() {
    return this.direction;
  }

  static setDirection(direction) {
    this.direction = direction;
  }
}

export default move;
