const r = require("raylib");

const WINDOW_WIDTH = 800;
const WINDOW_HIEGHT = 400;
const FPS = 60;

const rect1Xaxis = 300;
const rect1Yaxis = 250;
const rect1Width = 100;
const rect1Height = 100;

const rect2Width = 60;
const rect2Height = 90;

function setup() {
  r.InitWindow(WINDOW_WIDTH, WINDOW_HIEGHT, "Raylib");
  r.SetTargetFPS(FPS);
}

function startAxis(a, b, c) {
  return a * 0.5 - b * 0.5 + c;
}

function rectangle() {
  r.DrawRectangle(rect1Xaxis, rect1Yaxis, rect1Width, rect1Height, r.WHITE);
  r.DrawRectangle(
    startAxis(rect1Width, rect2Width, rect1Xaxis),
    startAxis(rect1Height, rect2Height, rect1Yaxis),
    rect2Width,
    rect2Height,
    r.RED,
  );
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  rectangle()
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    //update();
    draw();
  }
}

function main() {
  setup();
  loop();
}

main();