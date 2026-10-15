const r = require("raylib");

function setup() {
  const world = {
    width: 440,
    height: 440,
    fps: 60,
    numberOfPoints: 12,
    circleRadious: 150,
  };
  world.angle = (2 * Math.PI) / world.numberOfPoints;
  world.pointRadious = world.circleRadious / 50;
  world.circleX = world.width / 2;
  world.circleY = world.height / 2;

  r.InitWindow(world.width, world.height, "Point around a circle");
  r.SetTargetFPS(world.fps);

  return world;
}

function drawCircle(world) {
  r.DrawCircle(world.circleX, world.circleY, world.circleRadious, r.WHITE);
}

function drawPointCircle(world, a) {
  const X = world.circleX + world.circleRadious * Math.cos(world.angle * a);
  const Y = world.circleY - world.circleRadious * Math.sin(world.angle * a);

  r.DrawCircle(X, Y, world.circleRadious / 20, r.RED);
}

function drawPoints(world) {
  for (let a = 0; a < world.numberOfPoints; a++) {
    drawPointCircle(world, a);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  drawCircle(world);
  drawPoints(world);
  r.EndDrawing();
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
}

main();
