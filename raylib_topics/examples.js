const r = require("raylib");

function setup() {
  r.InitWindow(400, 600, "random");
  r.SetTargetFPS(60);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(50, 50, 100, 100, r.RED);

  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    draw();
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const world = setup();
  loop(world);
  draw();
  teardown();
}

main();
