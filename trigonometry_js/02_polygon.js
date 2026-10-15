const r = require("raylib");

function setup() {
  const world = {
    width: 440,
    height: 440,
    fps: 60,
    numberOfPoints: 7,
    circleRadious: 150,
  };

  world.angle = (2 * Math.PI) / world.numberOfPoints;
  world.pointRadious = world.circleRadious / 50;
  world.circleX = world.width / 2;
  world.circleY = world.height / 2;

  r.InitWindow(world.width, world.height, "Polygon");
  r.SetTargetFPS(world.fps);

  return world;
}

function drawline(world, a) {
  startX = world.circleX + world.circleRadious * Math.cos(world.angle * a);
  startY = world.circleY - world.circleRadious * Math.sin(world.angle * a);
  endX = world.circleX + world.circleRadious * Math.cos(world.angle * (a + 1));
  endY = world.circleY - world.circleRadious * Math.sin(world.angle * (a + 1));

  r.DrawLine(startX, startY, endX, endY, r.RED);
}

function drawPolygon(world) {
  for (let a = 0; a < world.numberOfPoints; a++) {
    drawline(world, a);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  drawPolygon(world);
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
