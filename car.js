class Car {
  constructor(x, y, speed, sprite, width, direction) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = 25;
    this.direction = direction;
    this.sprite = sprite;
  }

  show() {
    image(this.sprite, this.x, this.y, this.width, this.height);
    // rect(this.x, this.y, this.width, this.height);
  }

  isNotVisible(x, direction) {
    if (direction == "west") return x < -85;
    return x > width + 85;
  }

  update() {
    if (this.direction == "west") {
      this.x -= this.speed;

      if (this.isNotVisible(this.x, this.direction)) {
        this.x = 670;
      }
    } else {
      this.x += this.speed;

      if (this.isNotVisible(this.x, this.direction)) {
        this.x = -90;
      }
    }
  }
}
