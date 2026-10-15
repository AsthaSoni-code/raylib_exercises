const r = require("raylib");

function setup() {
  const world = {
    windowWidth: 440,
    windowHeight: 440,
    fps: 60,
    goldX: 0,
    redX: 0,
    y: 0,
    numberOfStrip: 11,
    gapWidth: 4,
  };

  world.whiteStripWidth =
    world.windowWidth - world.gapWidth * world.numberOfStrip;
  world.recWidth = world.whiteStripWidth / world.numberOfStrip;
  world.recHeight = world.windowHeight;
  world.gap = world.recWidth + world.gapWidth;

  r.InitWindow(world.windowWidth, world.windowHeight, "Raylib");
  r.SetTargetFPS(world.fps);

  return world;
}

function drawStrip(start, world, colour) {
  r.DrawRectangle(world.y, start, world.windowWidth, world.recWidth, colour);
}

function chooseColour(x) {
  return (x % 3) % 2 === 0 ? r.GOLD : r.RED;
}

function drawPatterns(world) {
  for (let x = 0; x < world.numberOfStrip; x = x + 1) {
    drawStrip(x * world.gap + world.gapWidth / 2, world, chooseColour(x));
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawPatterns(world);
  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function main() {
  const world = setup();
  loop(world);
}

main();
