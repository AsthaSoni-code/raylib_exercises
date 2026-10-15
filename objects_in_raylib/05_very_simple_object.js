const r = require("raylib");

const windowWidth = 800;
const windowHeight = 400;
const FPS = 60;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(FPS);
}

const center = {
  x: 370,
  y: 200,
};

const colour = {
  r: 189,
  g: 20,
  b: 50,
  a: 50,
};

function drawCircle() {
  r.DrawCircle(center.x, center.y, 80, colour);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawCircle();
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
