const r = require("raylib");
const g = require("./geometry");
const s = require("./screen.js");

const d1 = require("./detector1.js");
const d2 = require("./detector2.js");
const d3 = require("./detector3.js");

const p1 = require("./particle1.js");
const p2 = require("./particle2.js");
const p3 = require("./particle3.js");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(s.WIDTH, s.HEIGHT, s.TITLE);
  r.SetTargetFPS(s.FPS);
}

function update() {
  d1.x = d1.velocity + d1.x;
  d2.x = d2.velocity + d2.x;
  d3.y = d3.velocity + d3.y;

  d1.velocity = g.changeDirection(d1.x, s.WIDTH / 2, d1.width, 0, d2.velocity);
  d2.velocity = g.changeDirection(
    d2.x,
    s.WIDTH,
    d2.width,
    s.WIDTH / 2,
    d2.velocity,
  );
  d3.velocity = g.changeDirection(d3.y, s.HEIGHT, d3.height, 0, d3.velocity);
}

function chooseDetectorColour(isDetected) {
  return isDetected ? r.RED : r.WHITE;
}

function drawDetector(X, Y, width, height, colour) {
  r.DrawRectangle(X, Y, width, height, colour);
}

function drawParticleField(X, Y, width, height, colour) {
  r.DrawRectangle(X, Y, width, height, colour);
}

function drawRanges() {
  drawParticleField(p1.x, 0, p1.width, s.HEIGHT, r.SKYBLUE);
  drawParticleField(p2.x, 0, p2.width, s.HEIGHT, r.SKYBLUE);
  drawParticleField(0, p3.y, s.WIDTH, p3.height, r.SKYBLUE);

  const scanner1Overlap = g.isOverlapingRange(
    d1.x,
    d1.width,
    p1.x,
    p1.width,
    p2.x,
    p2.width,
  );
  const scanner2Overlap = g.isOverlapingRange(
    d2.x,
    d2.width,
    p1.x,
    p1.width,
    p2.x,
    p2.width,
  );
  const scanner3Overlap = g.detectParticleField(
    d3.y,
    d3.height,
    p3.y,
    p3.height,
  );

  drawDetector(
    d1.x,
    d1.y,
    d1.width,
    s.HEIGHT,
    chooseDetectorColour(scanner1Overlap),
  );
  drawDetector(
    d2.x,
    d2.y,
    d2.width,
    s.HEIGHT,
    chooseDetectorColour(scanner2Overlap),
  );
  drawDetector(
    d3.x,
    d3.y,
    s.WIDTH,
    d3.height,
    chooseDetectorColour(scanner3Overlap),
  );
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  drawRanges();
  r.EndDrawing();
}
function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
