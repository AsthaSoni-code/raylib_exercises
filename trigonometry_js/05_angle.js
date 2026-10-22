const r = require("raylib");

function setup() {
  const pointA = { x: 100, y: 300 };
  const pointB = { x: 350, y: 150 };

  const length = {
    AB: distance(100, 300, 350, 150),
    AC: distance(100, 300, 350, 300),
    BC: distance(350, 150, 350, 300),
  };

  r.InitWindow(800, 500, "angle");
  r.SetTargetFPS(60);

  return {
    pointA,
    pointB,
    length,
  };
}

function distance(x1, y1, x2, y2) {
  const x = x1 - x2;
  const y = y1 - y2;
  return Math.sqrt(x ** 2 + y ** 2);
}

function angleA(base, perpendicular) {
  const thita = Math.atan(base / perpendicular);
  return Math.round(thita);
}

function angleAIntoDegree(base, perpendicular) {
  return (angleA(base, perpendicular) * 180) / Math.PI;
}

function angleB(base, perpendicular) {
  return 180 - (90 + angleAIntoDegree(base, perpendicular));
}

function text(length, pointA, pointB) {
  r.DrawText("A", pointA.x, pointA.y + 10, 18, r.WHITE);
  r.DrawText("B", pointB.x + 10, pointB.y, 18, r.WHITE);
  r.DrawText("C", pointB.x + 10, pointA.y + 10, 18, r.WHITE);

  r.DrawText(
    `Angle A =  ${angleAIntoDegree(length.AC, length.BC)}  Degree`,
    140,
    350,
    18,
    r.WHITE,
  );
  r.DrawText(
    `Angle B =  ${angleB(length.AC, length.BC)}  Degree`,
    140,
    400,
    18,
    r.WHITE,
  );
}

function drawLines(pointA, pointB) {
  r.DrawLineEx(pointA, pointB, 3, r.RED);
  r.DrawLineEx(pointA, { x: pointB.x, y: pointA.y }, 3, r.WHITE);
  r.DrawLineEx(pointB, { x: pointB.x, y: pointA.y }, 3, r.WHITE);
}

function draw(length, pointA, pointB) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  drawLines(pointA, pointB);

  text(length, pointA, pointB);

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

function loop(length, pointA, pointB) {
  while (!r.WindowShouldClose()) {
    draw(length, pointA, pointB);
  }
}

function main() {
  const world = setup();
  loop(world.length, world.pointA, world.pointB);
  teardown();
}

main();
