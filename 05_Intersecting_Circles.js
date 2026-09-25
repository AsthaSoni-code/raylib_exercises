const r = require("raylib");

const Width = 900;
const Height = 700;
const FPS = 60;

const cir1X = 200;
const cir1Y = 100;
const cir1R = 60;

const cir2X = 270;
const cir2Y = 100;
const cir2R = 50;

function setup() {
  r.InitWindow(Width, Height, "Raylib");
  r.SetTargetFPS(FPS);
}

function distance(x1, y1, x2, y2) {
  return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
}

function colour(x1, y1, x2, y2, r1, r2) {
  return distance(x1, y1, x2, y2) > (r1 + r2) ? r.BLACK : r.RED;
}

function circle() {
  r.DrawCircle(
    cir1X,
    cir1Y,
    cir1R,
    colour(cir1X, cir1Y, cir2X, cir2Y, cir1R, cir2R),
  );
  r.DrawCircle(
    cir2X,
    cir2Y,
    cir2R,
    colour(cir1X, cir1Y, cir2X, cir2Y, cir1R, cir2R),
  );
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  circle();
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
  r.CloseWindow();
}

main();
