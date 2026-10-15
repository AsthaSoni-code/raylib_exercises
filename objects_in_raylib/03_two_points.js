const r = require("raylib");

const windowWidth = 800;
const windowHeight = 400;
const FPS = 60;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(FPS);
}

const leftPoint = {
  x: 270,
  y: 70,
};

const rightPoint = {
  x: 670,
  y: 250,
};

const blue = {
  r: 90,
  g: 20,
  b: 250,
  a: 230,
};

const red = {
  r: 210,
  g: 0,
  b: 20,
  a: 200,
};

function drawCircle() {
  r.DrawCircle(leftPoint.x, leftPoint.y, 30, blue);
  r.DrawCircle(rightPoint.x, rightPoint.y, 30, red);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawCircle();
  r.DrawLineV(leftPoint, rightPoint, r.BLACK);
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    draw();
  }
}

function main() {
  setup();
  loop();
}

main();
