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
    const rectWidth = 70;
    const rectHeight = 70;

    r.DrawRectangle(
        g.rectaxis(WINDOW_WIDTH, rectWidth),
        g.rectaxis(WINDOW_HEIGHT, rectHeight),
        rectWidth,
        rectHeight,
        r.WHITE,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    rectangle();
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