const r = require("raylib");

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 600;
const FPS = 60;

let detectorX = 0;
const detectorY = 0;
const detectorWidth = 20;
let revDirection = WINDOW_WIDTH - detectorWidth;

const particleX = WINDOW_WIDTH * 0.4;
const particleY = 0;
const particleWidth = 50;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "Raylib");
    r.SetTargetFPS(FPS);
}

function update() {

    let X = detectorWidth / 8;

    if (detectorX < revDirection) {
        revDirection = WINDOW_WIDTH - detectorWidth;
        detectorX = detectorX + X;
    } else {
        revDirection = 1;
        detectorX = detectorX - X;
    }
}

function choseDetecColour() {

    const beforeOverlapRange = detectorX >= particleX - detectorWidth
    const afterOverlapRange = detectorX <= particleX + particleWidth

    return (beforeOverlapRange && afterOverlapRange) ? r.RED : r.WHITE;
}

function rectangle() {
    r.DrawRectangle(particleX, particleY, particleWidth, WINDOW_HEIGHT, r.BLUE,);
    r.DrawRectangle(detectorX, detectorY, detectorWidth, WINDOW_HEIGHT, choseDetecColour(),);
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