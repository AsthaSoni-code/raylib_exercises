const r = require("raylib");

const windowWidth = 800;
const windowHeight = 400;
const FPS = 60;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(FPS);
}

const window = {
  x: 270,
  y: 70,
  width: 200,
  height: 300,
};

const colour = {
  red: {
    r: 150,
    g: 10,
    b: 240,
    a: 20,
  },

  black: {
    r: 200,
    g: 100,
    b: 225,
    a: 255,
  },
};

const partitions = {
  grilleX: window.x + window.width / 2,
  grilleY: window.y + window.height / 2,
};

function drawGrilles() {
  r.DrawRectangleLines(
    window.x,
    window.y,
    window.width / 2,
    window.height / 2,
    colour.black,
  );
  r.DrawRectangleLines(
    partitions.grilleX,
    window.y,
    window.width / 2,
    window.height / 2,
    colour.black,
  );
  r.DrawRectangleLines(
    window.x,
    partitions.grilleY,
    window.width / 2,
    window.height / 2,
    colour.black,
  );
  r.DrawRectangleLines(
    partitions.grilleX,
    partitions.grilleY,
    window.width / 2,
    window.height / 2,
    colour.black,
  );
}

function drawWindow() {
  r.DrawRectangleRec(window, colour.red);
  r.DrawRectangleLines(
    window.x,
    window.y,
    window.width,
    window.height,
    colour.black,
  );
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawWindow();
  drawGrilles();
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
