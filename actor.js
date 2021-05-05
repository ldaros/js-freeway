class Actor {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.hit = false;
    this.width = 19;
    this.height = 27;
    this.score = 0;
    this.speed = speed;
    this.sprite = animation;
    this.animIndex = 3;
    this.animBuffer = 0;
    this.isdown = false;
  }

  reset() {
    this.y = height - 10;
    this.animBuffer = 0;
  }

  show() {
    image(this.sprite[this.animIndex], this.x, this.y, this.width, this.height);
    // rect(this.x, this.y, this.width, this.height);
  }

  animate(direction) {
    this.animBuffer++;

    if (this.animBuffer % 2 != 0) return;
    if (direction == "up") {
      if (this.isdown == true) {
        this.isdown = false;
        this.animIndex = 3;
      }
      this.animIndex++;

      if (this.animIndex > 5) {
        this.animIndex = 3;
      }
    }

    if (direction == "down") {
      if (this.isdown == false) {
        this.isdown = true;
        this.animIndex = 0;
      }

      this.animIndex++;
      if (this.animIndex > 2) {
        this.animIndex = 0;
      }
    }
  }

  move() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
      this.animate("up");
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (this.y < height - 30) this.y += this.speed;
      this.animate("down");
    }
  }

  update(car_array) {
    for (let i = 0; i < car_array.length; i++) {
      this.hit = collideRectRect(
        car_array[i].x,
        car_array[i].y,
        car_array[i].width,
        car_array[i].height,
        this.x,
        this.y,
        this.width - 2,
        this.height - 10
      );
      if (this.hit) {
        this.reset();
        if (this.score > 0) this.score--;
        sfx_splort.play();
      }
    }
    if (this.y < 0) {
      this.reset();
      this.score++;
      sfx_happy.play();
    }
  }
}
