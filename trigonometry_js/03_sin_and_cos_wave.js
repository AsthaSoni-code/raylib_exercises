const r = require("raylib");

function setup() {
  const world = {
    width: 600,
    height: 440,
    fps: 60,
    numberOfPoints: 5,
    circleRadious: 20,
  };
  world.angle = Math.PI / world.numberOfPoints;
  world.pointRadious = world.circleRadious / 100;
  world.circleX = 150;
  world.circleY = 200;

  r.InitWindow(world.width, world.height, "Point around a circle");
  r.SetTargetFPS(world.fps);

  return world;
}

// function drawCircle(world) {
//   r.DrawCircle(world.circleX, world.circleY, world.circleRadious, r.WHITE);
// }

function drawPointCircle(world, a) {
  const X = world.circleX - world.circleRadious * Math.cos(world.angle * a);
  const Y = world.circleY + world.circleRadious * Math.sin(world.angle * a);

  r.DrawCircle(X, Y, world.circleRadious / 20, r.RED);
}

// function drawPoints(world) {
//   for (let a = 0; a < world.numberOfPoints; a++) {
//     drawPointCircle(world, a);
//   }
// }

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  // drawPoints(world);
  r.DrawLine(50, 200, 400, 200, r.WHITE);
  r.DrawLine(50, 50, 50, 350, r.WHITE);
  r.DrawCircle(
    world.circleX - world.circleRadious * Math.cos(world.angle * 0),
    world.circleY + world.circleRadious * Math.sin(world.angle * 0),
    world.circleRadious / 10,
    r.RED,
  );
  // r.DrawCircle(
  //   world.circleX - world.circleRadious * Math.cos(world.angle * a),
  //   world.circleY + world.circleRadious * Math.sin(world.angle * a),
  //   world.circleRadious / 10,
  //   r.RED,
  // );
  // r.DrawCircle(
  //   world.circleX - world.circleRadious * Math.cos(world.angle * 0),
  //   world.circleY + world.circleRadious * Math.sin(world.angle * 0),
  //   world.circleRadious / 10,
  //   r.RED,
  // );

  //   drawCircle(world);
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
