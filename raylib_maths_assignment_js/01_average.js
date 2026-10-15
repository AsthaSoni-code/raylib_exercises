const r = require("raylib");

function setup() {
  const world = {
    windowWidth: 500,
    windowHeight: 500,
    fps: 60,
    gapWidth: 6,
    data: [12, 45, 78, 23, 91, 56, 34, 67, 89, 40],
  };
  world.maxHeight = world.windowHeight - world.windowHeight * 0.1;
  world.averageLineYAxis =
    world.windowHeight -
    (world.windowHeight * calculateAverage(world.data)) / 100;
  world.barWidth = 10;
  world.barHeight = world.windowHeight;
  world.gap = world.barWidth + world.gapWidth;

  r.InitWindow(world.windowWidth, world.windowHeight, "average");
  r.SetTargetFPS(world.fps);

  return world;
}

function maxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    max = Math.max(max, array[i]);
  }

  return max;
}

function sum(array) {
  let sum = 0;
  for (let a = 0; a < array.length; a++) {
    sum = sum + array[a];
  }
  return sum;
}

function calculateAverage(array) {
  return sum(array) / array.length;
}

function barXAxis(x, gap, gapWidth) {
  return x * gap + gapWidth / 2;
}

function drawAverageLine(world) {
  r.DrawLine(
    0,
    world.averageLineYAxis,
    world.windowWidth,
    world.averageLineYAxis,
    r.RED,
  );
}

function drawBar(x, y, world, colour) {
  world.barWidth = world.barWidth === 0 ? 1 : world.barWidth;
  r.DrawRectangle(
    barXAxis(x, world.gap, world.gapWidth),
    y,
    world.barWidth,
    world.windowHeight,
    colour,
  );
}

function drawPatterns(world) {
  for (let x = 0; x < world.data.length; x++) {
    drawBar(
      x,
      world.windowHeight -
        world.maxHeight * (world.data[x] / maxValue(world.data)),
      world,
      r.BLUE,
    );
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.RAYWHITE);
  drawPatterns(world);
  drawAverageLine(world);
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
