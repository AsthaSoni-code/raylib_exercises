const r = require("raylib");

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 400;
const FPS = 60;

function setup() {
  r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "Raylib");
  r.SetTargetFPS(FPS);
}

function rectaxis(a, b, c) {
  return a * 0.5 - b * 0.5 + c;
}

function inRectSides(c, d) {
  return c * d;
}

function rectangle() {

  const outRectX = 200;
  const outRectY = 70;
  const outRecWidth = 200;
  const outRectHeight = 200;

  const ratio = 0.25;
  const inRectWidth = inRectSides(outRecWidth, ratio);
  const inRectHeight = inRectSides(outRectHeight, ratio);

  r.DrawRectangle(outRectX, outRectY, outRecWidth, outRectHeight, r.WHITE);
  r.DrawRectangle(
    rectaxis(outRecWidth, inRectWidth, outRectX),
    rectaxis(outRectHeight, inRectHeight, outRectY),
    inRectWidth,
    inRectHeight,
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

