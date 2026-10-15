const r = require("raylib");

function setup() {
  const world = {
    windowWidth: 600,
    windowHeight: 500,
    fps: 60,
    data: [31, 43, 18, 23, 100, 16, 70, 60, 43, 20, 60, 30, 29, 24, 40],
    peakPointRadius: 5,
  };
  world.scalingFactor =
    (world.windowHeight - world.windowHeight * 0.1) / maxValue(world.data);

  world.gap = world.windowWidth / (world.data.length - 1);

  r.InitWindow(world.windowWidth, world.windowHeight, "peak values");
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

function getY(windowHeight, scalingFactor, value) {
  return windowHeight - scalingFactor * value;
}

function drawLine(world, i, value, nextValue) {
  const y1 = getY(world.windowHeight, world.scalingFactor, value);
  const y2 = getY(world.windowHeight, world.scalingFactor, nextValue);

  r.DrawLine(world.gap * i, y1, world.gap * (i + 1), y2, r.BLACK);
}

function drawPeak(i, world, value) {
  const y = getY(world.windowHeight, world.scalingFactor, value);

  r.DrawCircle(i * world.gap, y, world.peakPointRadius, r.RED);
}

function isPeak(values, index) {
  if (index < 0 || index >= values.length) return false;
  return values[index] > Math.max(values[index - 1], values[index + 1]);
}

function drawLineGraph(world) {
  const data = world.data;
  for (let i = 0; i < data.length - 1; i++) {
    if (isPeak(data, i)) drawPeak(i, world, data[i]);
    drawLine(world, i, data[i], data[i + 1]);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.RAYWHITE);
  drawLineGraph(world);
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
