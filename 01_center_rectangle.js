//Rectangle in center of window

const r = require("raylib");

const windowWidth = 800;
const windowHeight = 400;
const FPS = 60;

const rectWidth = 70;
const rectHeight = 70;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(FPS);
}

function rectaxis(a, b) {
  return a * 0.5 - b * 0.5;
}

function rectangle() {
  r.DrawRectangle(
    rectaxis(windowWidth, rectWidth),
    rectaxis(windowHeight, rectHeight),
    rectWidth,
    rectHeight,
    r.WHITE,
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