//Stationary rectangle in rectangle

const r = require("raylib");

const windowWidth = 800;
const windowHeight = 400;
const FPS = 60;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(FPS);
}

function rect_axis(a, b) {
  return a * 0.5 - b * 0.5;
}

function rectangle() {

  const rect1Width = 200;
  const rect1Height = 300;

  const rect2Width = 100;
  const rect2Height = 50;

  r.DrawRectangle(
    rect_axis(windowWidth, rect1Width),
    rect_axis(windowHeight, rect1Height),
    rect1Width,
    rect1Height,
    r.WHITE,
  );
  r.DrawRectangle(
    rect_axis(windowWidth, rect2Width),
    rect_axis(windowHeight, rect2Height),
    rect2Width,
    rect2Height,
    r.RED,
  );
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  rectangle();
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    //Update();
    draw();
  }
}

function main() {
  setup();
  loop();
}

main();