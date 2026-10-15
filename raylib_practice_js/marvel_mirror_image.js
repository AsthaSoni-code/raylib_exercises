const r = require("raylib");
const { wolverine } = require("./wolverine.js");

function setup() {
  const world = {
    screen: {
      width: 440,
      height: 440,
      fps: 60,
    },

    bitmap: {
      width: wolverine.width,
      height: wolverine.height,
      points: wolverine.points,
    },
  };
  world.reversedBitmap = {
    width: wolverine.width,
    height: wolverine.height,
    points: reverse(world.bitmap),
  };

  world.pixel = {
    width: world.screen.width / world.bitmap.width,
    height: world.screen.height / world.bitmap.height,
  };

  r.InitWindow(world.screen.width, world.screen.height, "sentinel");
  r.SetTargetFPS(world.screen.fps);

  return world;
}

function reverse(bitmap) {
  const reverseBitmap = [];
  for (let key = 0; key < bitmap.points.length; key++) {
    reverseBitmap.unshift(bitmap.points[key]);
  }

  return reverseBitmap;
}

function getColour(column, row, reversedBitmap) {
  return {
    r: reversedBitmap.points[column][row],
    g: reversedBitmap.points[column][row],
    b: reversedBitmap.points[column][row],
    a: 255,
  };
}

function recObject(row, column, pixel, bitmap) {
  return {
    x: row * pixel.width,
    y: column * pixel.height,
    width: bitmap.width,
    height: bitmap.height,
  };
}

function drawBitmap(bitmap, pixel, reversedBitmap) {
  for (let row = 0; row < bitmap.height; row++) {
    for (let column = 0; column < bitmap.width; column++) {
      r.DrawRectangleRec(
        recObject(row, column, pixel, bitmap),
        getColour(column, row, reversedBitmap),
      );
    }
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawBitmap(world.bitmap, world.pixel, world.reversedBitmap);
  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    // no update!
    draw(world);
  }
}

function main() {
  const world = setup();
  loop(world);
  teardown();
}

main();
