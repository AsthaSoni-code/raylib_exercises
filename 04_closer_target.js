const r = require("raylib");

const width = 800;
const height = 400;

const source_X = 700;
const source_Y = 150;
const target1X = 350;
const target1Y = 50;
const target2X = 150;
const target2Y = 150;

function setup() {
  r.InitWindow(width, height, "Raylib");
  r.SetTargetFPS(60);
}

function square(number) {
  return number ** 2;
}

function distance(x1, y1, x2, y2) {
  return (square(x1 - x2) + square(y1 - y2)) ** 0.5;
}

function nearestPoint(d1, d2, p1, p2) {
  return d1 < d2 ? p1 : p2;
}

function circle() {
  const radius = 30;

  r.DrawCircle(source_X, source_Y, radius, r.BLUE);
  r.DrawText("Source", source_X, source_Y, 16, r.BLACK);
  r.DrawCircle(target1X, target1Y, radius, r.RED);
  r.DrawCircle(target2X, target2Y, radius, r.GREEN);
}

function line() {
  const distanceFromTarget2 = distance(source_X, source_Y, target2X, target2Y);
  const distanceFromTarget1 = distance(source_X, source_Y, target1X, target1Y);
  const destX = nearestPoint(distanceFromTarget2, distanceFromTarget1, target2X, target1X);
  const destY = nearestPoint(distanceFromTarget2, distanceFromTarget1, target2Y, target1Y);

  r.DrawLine(
    source_X,
    source_Y,
    destX,
    destY,
    r.BLACK,
  );
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  circle();
  line();
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    // update();
    draw();
  }
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}

main();