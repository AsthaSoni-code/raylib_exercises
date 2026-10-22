const r = require("raylib");

function setup() {
  const screen = {
    width: 800,
    height: 500,
    fps: 60,
  };

  r.InitWindow(screen.width, screen.height, "trig pattern");
  r.SetTargetFPS(screen.fps);

  return screen;
}

let cf = 0;
function pattern(screen) {
  const startX = screen.width / 2;
  const startY = screen.height / 2;

  const numOfPoints = 10000;

  const baseRadius = 20;

  for (let i = 1; i < numOfPoints / 2; i++) {
    const step = (2 * Math.PI * i) / numOfPoints;

    const angle = Math.cos(i) * step;

    // const radius = baseRadius + Math.cos(angle) + angle * i + (cf % 50);
    const radius = Math.sin(angle) * baseRadius * (cf % 50);

    const x = startX + radius * Math.sin(angle + i + cf);
    const y = startY + radius * Math.cos(angle + i + cf);

    r.DrawCircle(x, y, 2, r.WHITE);
  }
}

function draw(screen) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  pattern(screen);

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

function loop(screen) {
  while (!r.WindowShouldClose()) {
    draw(screen);
    cf += 0.005;
  }
}

function main() {
  const world = setup();

  loop(world);
  teardown();
}

main();
