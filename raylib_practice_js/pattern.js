const r = require("raylib");
let cf = 0;

function setup() {
  const world = {
    width: 800,
    height: 800,
    fps: 3,
    colour: {
      r: 0,
      g: 220,
      b: 220,
      a: 255,
    },
    colour1: {
      r: 0,
      g: 255,
      b: 255,
      a: 255,
    },
    numberOfCircles: 50,
  };

  world.circleRadius = world.width / world.numberOfCircles;

  r.InitWindow(world.width, world.height, "patern");
  r.SetTargetFPS(world.fps);

  return world;
}

function chooseColour(a, b, world) {
  const index1 = a < b ? a : b;
  const index2 = a > b ? a : b;

  if ((cf + index1) % 4 === 0) return r.BLUE;
  // if ((cf + index2) % 4 === 0) return r.BLUE;
  return world.colour1;
}

function drawPatterns(world) {
  for (let b = 0; b < world.numberOfCircles; b++)
    for (let a = 0; a < world.numberOfCircles; a++) {
      r.DrawCircleSector(
        { x: a * world.circleRadius, y: b * world.circleRadius },
        world.circleRadius,
        0,
        90,
        20,
        chooseColour(a, b, world),
      );
    }
}

function draw(world) {
  r.BeginDrawing();

  r.ClearBackground(world.colour);
  drawPatterns(world);
  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    // no update!
    // cf = cf % 6;
    cf++;
    draw(world);
  }
}

function main() {
  let cf = 2;
  const world = setup();
  loop(world);
}

main();
