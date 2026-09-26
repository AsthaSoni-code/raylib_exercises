const r = require("raylib");

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 600;
const FPS = 7;

let detectorX = 0;
const detectorY = 0;
const detectorWidth = 20;
let revDirection = WINDOW_WIDTH - detectorWidth;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "Raylib");
    r.SetTargetFPS(FPS);
}

function update() {

    let X = detectorWidth / 2;

    if (detectorX < revDirection) {
        revDirection = WINDOW_WIDTH - detectorWidth;
        detectorX = detectorX + X;
    } else {
        revDirection = 1;
        detectorX = detectorX - X;
    }
}


function rectangle() {

    const particalX = WINDOW_WIDTH * 0.4;
    const particalY = 0;
    const particalWidth = 50;

    r.DrawRectangle(particalX, particalY, particalWidth, WINDOW_HEIGHT, r.BLUE,);
    r.DrawRectangle(detectorX, detectorY, detectorWidth, WINDOW_HEIGHT, r.WHITE,);
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