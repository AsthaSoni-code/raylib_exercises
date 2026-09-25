const r = require("raylib");
const g = require("./geometry");

const width = 800;
const height = 400;
const FPS = 60;

const source_X = 700;
const source_Y = 150;
const target1X = 350;
const target1Y = 50;
const target2X = 150;
const target2Y = 150;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(width, height, "Raylib");
    r.SetTargetFPS(FPS);
}

function update() {
    // change the state
}

function circle() {

    const radius = 30;

    r.DrawCircle(source_X, source_Y, radius, r.BLUE);
    r.DrawText("Source", source_X, source_Y, 16, r.BLACK);
    r.DrawCircle(target1X, target1Y, radius, r.RED);
    r.DrawCircle(target2X, target2Y, radius, r.GREEN);
}

function line() {
    const distanceFromTarget2 = g.distance(source_X, source_Y, target2X, target2Y);
    const distanceFromTarget1 = g.distance(source_X, source_Y, target1X, target1Y);
    const destX = g.nearestPoint(distanceFromTarget2, distanceFromTarget1, target2X, target1X);
    const destY = g.nearestPoint(distanceFromTarget2, distanceFromTarget1, target2Y, target1Y);

    r.DrawLine(
        source_X,
        source_Y,
        destX,
        destY,
        r.BLACK,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    circle();
    line();
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