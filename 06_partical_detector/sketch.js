const r = require("raylib"); //i can use change direction function to change the colour of detector
const g = require("./geometry");
const s = require("./screen.js");
const d = require("./detector");
const p = require("./particle");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(s.WIDTH, s.HEIGHT, s.TITLE);
  r.SetTargetFPS(s.FPS);

  d1 = d.verticalDetector(0, 0, 20, s.HEIGHT, 2, 0, s.WIDTH / 2);
  d2 = d.verticalDetector(
    s.WIDTH / 2,
    0,
    20,
    s.HEIGHT,
    3,
    s.WIDTH / 2,
    s.WIDTH - 20,
  );
  d3 = d.horizontalDetector(0, 0, s.WIDTH, 20, 4, 0, s.HEIGHT - 20);
  p1 = p.verticalParticle(s.WIDTH * 0.4, 0, 50, s.HEIGHT);
  p2 = p.verticalParticle(s.WIDTH * 0.8, 0, 10, s.HEIGHT);
  p3 = p.horizontalParticle(0, s.HEIGHT * 0.4, s.WIDTH, 15);
}

function update() {
  d1.x = d1.velocity + d1.x;
  d2.x = d2.velocity + d2.x;
  d3.y = d3.velocity + d3.y;

  d1.velocity = g.changeDirection(d1, d1.x);
  d2.velocity = g.changeDirection(d2, d2.x);
  d3.velocity = g.changeDirection(d3, d3.y);
}

function chooseDetectorColour(isDetected) {
  return isDetected ? r.RED : r.WHITE;
}

function drawDetector(a, colour) {
  r.DrawRectangle(a.x, a.y, a.width, a.height, colour);
}

function drawParticleField(a) {
  r.DrawRectangle(a.x, a.y, a.width, a.height, r.SKYBLUE);
}

function drawRanges() {
  drawParticleField(p1);
  drawParticleField(p2);
  drawParticleField(p3);

  const scanner1Overlap = g.isOverlapingRange(d1, p1, p2);
  const scanner2Overlap = g.isOverlapingRange(d2, p1, p2);
  const scanner3Overlap = g.detectParticleField(
    d3.y,
    d3.height,
    p3.y,
    d3.height,
  );
  drawDetector(d1, chooseDetectorColour(scanner1Overlap));
  drawDetector(d2, chooseDetectorColour(scanner2Overlap));
  drawDetector(d3, chooseDetectorColour(scanner3Overlap));
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
