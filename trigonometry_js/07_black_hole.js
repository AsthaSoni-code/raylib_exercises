const r = require("raylib");

function setup() {
  const screen = {
    width: 800,
    height: 500,
    fps: 60,
  };

  r.InitWindow(screen.width, screen.height, "trig pattern");
  r.SetTargetFPS(screen.fps);

  let cf = 0;
  return {
    screen,
    cf,
  };
}

function pattern(screen, cf) {
  const startX = screen.width / 2;
  const startY = screen.height / 2;

  const numOfPoints = 10000;

  for (let i = 1; i < numOfPoints / 2; i++) {
    const step = (2 * Math.PI * i) / numOfPoints;

    const angle = Math.cos(i) * step;

    const radius = ((cf * 100) % 200) + 2 / Math.tan(angle); //Black Hole

    const x = startX + radius * Math.sin(angle + i + cf);
    const y = startY + radius * Math.cos(angle + i + cf);

    r.DrawCircle(x, y, 2, r.WHITE);
  }
}

function draw(screen, cf) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  pattern(screen, cf);

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

function loop(screen, cf) {
  while (!r.WindowShouldClose()) {
    draw(screen, cf);
    cf += 0.005;
  }
}

function main() {
  const world = setup();

  loop(world.screen, world.cf);
  teardown();
}

main();
