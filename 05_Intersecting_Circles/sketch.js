const r = require("raylib");
const g = require("./geometry");

const WINDOW_WIDTH = 900;
const WINDOW_HEIGHT = 700;
const FPS = 60;

const cir1X = 200;
const cir1Y = 300;
const cir1R = 60;

const cir2X = 270;
const cir2Y = 100;
const cir2R = 50;


function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "Raylib");
    r.SetTargetFPS(FPS);
}

function update() {
    // change the state
}

function chooseColour(x1, y1, x2, y2, r1, r2) {
    return g.distance(x1, y1, x2, y2) > (r1 + r2) ? r.BLACK : r.RED;
}

function circle() {
    r.DrawCircle(
        cir1X,
        cir1Y,
        cir1R,
        chooseColour(cir1X, cir1Y, cir2X, cir2Y, cir1R, cir2R),
    );
    r.DrawCircle(
        cir2X,
        cir2Y,
        cir2R,
        chooseColour(cir1X, cir1Y, cir2X, cir2Y, cir1R, cir2R),
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    circle();
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