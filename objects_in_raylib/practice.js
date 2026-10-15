const r = require("raylib");

const windowWidth = 800;
const windowHeight = 400;
const FPS = 60;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(FPS);
}
const spaceship = {
  position: {
    x: 100,
    y: 120,
  },

  size: {
    x: 60,
    y: 30,
  },

  color: r.WHITE,
};

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  // r.DrawRectangleV(spaceship.position, spaceship.size, spaceship.color);
  r.DrawRectangleRounded(
    {
      x: spaceship.position.x,
      y: spaceship.position.y,
      width: spaceship.size.x,
      height: spaceship.size.y,
    },
    0.3,
    8,
    spaceship.color,
  );
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
