let img_road;
let img_cars = [];

let spritesheet;
let spritedata;
let animation = [];

let sfx_bg;
let sfx_splort;
let sfx_happy;

function preload() {
  img_road = loadImage("media/road-bg.png");
  spritedata = loadJSON("media/chicken.json");
  spritesheet = loadImage("media/chicken.png");

  bit8 = loadFont("media/8bitwonder.otf");

  sfx_bg = loadSound("media/bg.ogg");
  sfx_splort = loadSound("media/roadkill.ogg");
  sfx_happy = loadSound("media/win.ogg");

  img_cars.push(loadImage("media/cars/muscle.png"));
  img_cars.push(loadImage("media/cars/sport.png"));
  img_cars.push(loadImage("media/cars/police.png"));
  img_cars.push(loadImage("media/cars/semi.png"));
  img_cars.push(loadImage("media/cars/van.png"));
  img_cars.push(loadImage("media/cars/sedan.png"));
  img_cars.push(loadImage("media/cars/hatchback.png"));
  img_cars.push(loadImage("media/cars/mini.png"));
  img_cars.push(loadImage("media/cars/truck.png"));
  img_cars.push(loadImage("media/cars/taxi.png"));
  img_cars.push(loadImage("media/cars/super.png"));
  img_cars.push(loadImage("media/cars/bus.png"));
}

function setup() {
  createCanvas(640, 400);
  player = new Actor(120, 366, 2);
  car = [];

  let frames = spritedata.frames;

  //parse json and grab frames
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  car.push(new Car(600, 25, 2, img_cars[4], 44, "west"));
  car.push(new Car(600, 63, 2.5, img_cars[5], 44, "west"));
  car.push(new Car(600, 98, 1.3, img_cars[3], 80, "west"));
  car.push(new Car(600, 133, 3.8, img_cars[0], 44, "west"));
  car.push(new Car(730, 133, 3.8, img_cars[2], 44, "west"));
  car.push(new Car(600, 165, 3.9, img_cars[1], 44, "west"));
  car.push(new Car(-200, 205, 1.9, img_cars[6], 44, "east"));
  car.push(new Car(-90, 239, 1.2, img_cars[11], 80, "east"));
  car.push(new Car(-150, 239, 1.2, img_cars[9], 44, "east"));
  car.push(new Car(-90, 273, 2.4, img_cars[7], 44, "east"));
  car.push(new Car(-90, 308, 5, img_cars[10], 44, "east"));
  car.push(new Car(-90, 340, 2, img_cars[8], 44, "east"));

  sfx_bg.loop();
}

function loopCars(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].show();
    array[i].update();
  }
}

function drawPoints(score) {
  textFont(bit8);
  textAlign(CENTER);
  textSize(25);
  fill(255, 204, 229);
  text(score, width / 2, 20);
}

function draw() {
  background(img_road);
  player.show();
  loopCars(car);
  player.move();
  player.update(car);
  drawPoints(player.score);
}
