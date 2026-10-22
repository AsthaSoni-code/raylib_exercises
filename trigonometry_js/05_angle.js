const r = require("raylib");

function setup() {
  const screen = {
    width: 800,
    height: 500,
    fps: 60,
  };

  const pointA = { x: 100, y: 250 };
  const pointB = { x: 300, y: 150 };

  const length = {
    AB: distance(pointA.x, pointA.y, pointB.x, pointB.y),
    AC: distance(pointA.x, pointA.y, pointB.x, pointA.y),
    BC: distance(pointB.x, pointB.y, pointB.x, pointA.y),
  };

  r.InitWindow(screen.width, screen.height, "angle");
  r.SetTargetFPS(screen.fps);

  return {
    pointA,
    pointB,
    length,
    screen,
  };
}

function distance(x1, y1, x2, y2) {
  const x = x2 - x1;
  const y = y2 - y1;

  return Math.sqrt(x ** 2 + y ** 2);
}

function angleA(base, perpendicular) {
  return Math.atan2(perpendicular, base);
}

function angleAInDegree(base, perpendicular) {
  return (angleA(base, perpendicular) * 180) / Math.PI;
}

function angleB(base, perpendicular) {
  return 90 - angleAInDegree(base, perpendicular);
}

function text(length, pointA, pointB, screen) {
  r.DrawText("A", pointA.x, pointA.y + 10, 18, r.WHITE);
  r.DrawText("B", pointB.x + 10, pointB.y, 18, r.WHITE);
  r.DrawText("C", pointB.x + 10, pointA.y + 10, 18, r.WHITE);

  r.DrawText(
    `Angle A =  ${angleAInDegree(length.AC, length.BC)}  Degree`,
    screen.width / 2,
    10,
    18,
    r.WHITE,
  );
  r.DrawText(
    `Angle B =  ${angleB(length.AC, length.BC)}  Degree`,
    screen.width / 2,
    40,
    18,
    r.WHITE,
  );
}

function drawLines(pointA, pointB) {
  r.DrawLineEx(pointA, pointB, 3, r.RED);
  r.DrawLineEx(pointA, { x: pointB.x, y: pointA.y }, 3, r.WHITE);
  r.DrawLineEx(pointB, { x: pointB.x, y: pointA.y }, 3, r.WHITE);
}

function draw(length, pointA, pointB, screen) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawLines(pointA, pointB);

  text(length, pointA, pointB, screen);

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

function loop(length, pointA, pointB, screen) {
  while (!r.WindowShouldClose()) {
    draw(length, pointA, pointB, screen);
  }
}

function main() {
  const world = setup();

  loop(world.length, world.pointA, world.pointB, world.screen);
  teardown();
}

main();
