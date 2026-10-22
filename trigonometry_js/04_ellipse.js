const r = require("raylib");

function setup() {
  const world = {
    width: 640,
    height: 540,
    fps: 60,
    numberOfPoints: 1500,
    horizontalRadius: 200,
    verticalRadius: 100,
  };
  world.angle = (2 * Math.PI) / world.numberOfPoints;
  world.pointRadious = world.verticalRadius / 50;
  world.centerX = 300;
  world.centerY = 200;

  r.InitWindow(world.width, world.height, "ellipse");
  r.SetTargetFPS(world.fps);

  return world;
}

function drawPointCircle(world, a) {
  const X = world.centerX + world.horizontalRadius * Math.cos(world.angle * a);
  const Y = world.centerY - world.verticalRadius * Math.sin(world.angle * a);

  r.DrawCircle(X, Y, world.verticalRadius / 50, r.RED);
}

function drawEllipsePoints(world) {
  for (let a = 0; a < world.numberOfPoints; a++) {
    drawPointCircle(world, a);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawEllipsePoints(world);

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
