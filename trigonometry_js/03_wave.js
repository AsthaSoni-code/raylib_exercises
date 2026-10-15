const r = require("raylib");

function setup() {
  const world = {
    width: 600,
    height: 440,
    fps: 60,
    numberOfPoints: 10,
    circleRadious: 50,
  };
  world.angle = Math.PI / world.numberOfPoints;
  world.pointRadious = world.circleRadious / 100;
  world.circleX = 100;
  world.circleY = 200;

  r.InitWindow(world.width, world.height, "sin and cos waves");
  r.SetTargetFPS(world.fps);

  return world;
}

function drawPointCircle(world, a) {
  // for (let a = 2.5; a < 7.5; a = a + 0.01) {
  const X = world.circleX - world.circleRadious * Math.sin(world.angle * a);
  const Y = world.circleY + world.circleRadious * Math.cos(world.angle * a);

  r.DrawCircle(X, Y, world.circleRadious / 20, r.RED);
}
// }

function sinWave() {
  for (let x = 1; x < 20; x++) {
    return Math.sin((Math.PI / 2) * x);
  }
}

console.log(sinWave());

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawLine(50, 200, 500, 200, r.WHITE);
  r.DrawLine(50, 50, 50, 350, r.WHITE);
  // sinWave();
  drawPointCircle(world, Math.PI / 2);
  drawPointCircle(world, Math.PI);
  // drawPointCircle(world, -Math.PI);
  drawPointCircle(world, (3 * Math.PI) / 2);
  drawPointCircle(world, 2 * Math.PI);

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
