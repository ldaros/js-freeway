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

  // draws the car on screen{
  show() {
    image(this.sprite, this.x, this.y, this.width, this.height);
    // rect(this.x, this.y, this.width, this.height);
  }

  // check to see if the car is out of bounds
  isNotVisible(x, direction) {
    if (direction == "west") return x < -85;
    return x > width + 85;
  }

  // updates the car position
  update() {
    if (this.direction == "west") {
      this.x -= this.speed;

      if (this.isNotVisible(this.x, this.direction)) {
        this.x = 670;
      }
      return;
    }

    this.x += this.speed;
    if (this.isNotVisible(this.x, this.direction)) {
      this.x = -90;
    }
  }
}
