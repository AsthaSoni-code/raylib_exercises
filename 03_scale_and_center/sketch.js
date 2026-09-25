const r = require("raylib");
const g = require("./geometry");

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 400;
const FPS = 60;


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

function rectangle() {

    const outRectX = 200;
    const outRectY = 70;
    const outRecWidth = 200;
    const outRectHeight = 200;

    const ratio = 0.25;
    const inRectWidth = g.inRectSides(outRecWidth, ratio);
    const inRectHeight = g.inRectSides(outRectHeight, ratio);

    r.DrawRectangle(outRectX, outRectY, outRecWidth, outRectHeight, r.WHITE);
    r.DrawRectangle(
        g.rectAxis(outRecWidth, inRectWidth, outRectX),
        g.rectAxis(outRectHeight, inRectHeight, outRectY),
        inRectWidth,
        inRectHeight,
        r.RED,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    rectangle()
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