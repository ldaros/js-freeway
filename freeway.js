// images
let img = {
  cars: [],
};

// sound effects
let sfx = {};

// animations
let sprite = {
  sheet: "",
  data: "",
  frame: [],

  parse: function () {
    let frames = this.data.frames;
    for (let i = 0; i < frames.length; i++) {
      //parse json and grab frames
      let pos = frames[i].position;
      let img = this.sheet.get(pos.x, pos.y, pos.w, pos.h);
      this.frame.push(img);
    }
  },
};

// load all the assets
function preload() {
  img.road = loadImage("media/road-bg.png");
  img.post = loadImage("media/post.png");
  img.bench = loadImage("media/bench.png");
  img.booth = loadImage("media/booth.png");
  img.hidrant = loadImage("media/hidrant.png");
  img.plant = loadImage("media/plant.png");
  img.trash = loadImage("media/trash.png");
  sprite.data = loadJSON("media/chicken.json");
  sprite.sheet = loadImage("media/chicken.png");

  bit8 = loadFont("media/8bitwonder.otf");

  sfx.bg = loadSound("media/bg.ogg");
  sfx.splort = loadSound("media/roadkill.ogg");
  sfx.point = loadSound("media/win.ogg");

  img.cars.push(loadImage("media/cars/muscle.png"));
  img.cars.push(loadImage("media/cars/sport.png"));
  img.cars.push(loadImage("media/cars/police.png"));
  img.cars.push(loadImage("media/cars/semi.png"));
  img.cars.push(loadImage("media/cars/van.png"));
  img.cars.push(loadImage("media/cars/sedan.png"));
  img.cars.push(loadImage("media/cars/hatchback.png"));
  img.cars.push(loadImage("media/cars/mini.png"));
  img.cars.push(loadImage("media/cars/truck.png"));
  img.cars.push(loadImage("media/cars/taxi.png"));
  img.cars.push(loadImage("media/cars/super.png"));
  img.cars.push(loadImage("media/cars/bus.png"));
}

function setup() {
  createCanvas(640, 400);
  player = new Actor(301, 366, 2);
  car = [];

  sprite.parse();

  car.push(new Car(600, 25, 2, img.cars[4], 44, "west"));
  car.push(new Car(600, 63, 2.5, img.cars[5], 44, "west"));
  car.push(new Car(600, 98, 1.3, img.cars[3], 80, "west"));
  car.push(new Car(600, 133, 3.8, img.cars[0], 44, "west"));
  car.push(new Car(730, 133, 3.8, img.cars[2], 44, "west"));
  car.push(new Car(600, 165, 3.9, img.cars[1], 44, "west"));
  car.push(new Car(-200, 205, 1.9, img.cars[6], 44, "east"));
  car.push(new Car(-90, 239, 1.2, img.cars[11], 80, "east"));
  car.push(new Car(-150, 239, 1.2, img.cars[9], 44, "east"));
  car.push(new Car(-90, 273, 2.4, img.cars[7], 44, "east"));
  car.push(new Car(-90, 308, 5, img.cars[10], 44, "east"));
  car.push(new Car(-90, 340, 2, img.cars[8], 44, "east"));

  // loop the background sound
  sfx.bg.loop();
}

// iterate over each car
function loopCars(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].show();
    array[i].update();
  }
}

//draws extra details on the screen
function drawMisc() {
  image(img.hidrant, 20, 4, 10, 15);
  image(img.plant, 590, 1, 13, 18);
  image(img.hidrant, 610, 4, 10, 15);
  image(img.bench, 100, 1, 23, 18);
  image(img.trash, 125, 6, 10, 12);

  for (let i = 20; i < width; i += 200) {
    image(img.post, i, 350, 20, 45);
  }

  image(img.booth, 190, 365, 20, 30);
  image(img.bench, 500, 380, 23, 18);
  image(img.plant, 530, 380, 13, 18);
}

//draws the score on the screen
function drawPoints(score) {
  textFont(bit8);
  textAlign(CENTER);
  textSize(25);
  fill(255, 204, 229);
  text(score, 500, 20);
}

function draw() {
  background(img.road);
  player.show();
  loopCars(car);
  player.move();
  player.update(car);
  drawPoints(player.score);
  drawMisc();
}
