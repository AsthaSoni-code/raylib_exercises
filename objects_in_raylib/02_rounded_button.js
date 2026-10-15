const r = require("raylib");

const windowWidth = 800;
const windowHeight = 400;
const FPS = 60;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(FPS);
}

const button = {
  x: 270,
  y: 70,
  width: 200,
  height: 300,
};

const blue = {
  r: 190,
  g: 200,
  b: 250,
  a: 230,
};

const darkblue = {
  r: 10,
  g: 0,
  b: 250,
  a: 230,
};

function drawbutton() {
  r.DrawRectangleRounded(button, 0.2, 10, blue);
  r.DrawRectangleRoundedLines(button, 0.2, 10, 10, darkblue);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawbutton();
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
