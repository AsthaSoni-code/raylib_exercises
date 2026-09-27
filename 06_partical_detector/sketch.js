const r = require("raylib");
const g = require("./geometry");

const WINDOW_WIDTH = 1000;
const WINDOW_HEIGHT = 600;
const FPS = 60;

let detector1X = 0;
const detector1Y = 0;
const detector1Width = 20;

let detector2X = WINDOW_WIDTH / 2;
const detector2Y = 0;
const detector2Width = 20;

let revDirectionD1 = WINDOW_WIDTH / 2 - detector1Width;
let revDirectionD2 = WINDOW_WIDTH - detector2Width;

const particle1X = WINDOW_WIDTH * 0.4;
const particle1Y = 0;
const particle1Width = 50;

const particle2X = WINDOW_WIDTH * 0.6;
const particle2Y = 0;
const particle2Width = 10;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "Raylib");
    r.SetTargetFPS(FPS);
}

function moveDetector1() {
    let speed = detector1Width / 7;

    if (detector1X < revDirectionD1) {
        revDirectionD1 = WINDOW_WIDTH / 2 - detector1Width;

        detector1X = detector1X + speed;
    } else {
        revDirectionD1 = 1;
        detector1X = detector1X - speed;
    }
}

function moveDtector2() {
    let speed = detector2Width / 9;

    if (detector2X < revDirectionD2) {
        revDirectionD2 = WINDOW_WIDTH - detector2Width;

        detector2X = detector2X + speed;
    } else {
        revDirectionD2 = WINDOW_WIDTH - WINDOW_WIDTH / 2;
        detector2X = detector2X - speed;
    }
}

function update() {
    moveDetector1();
    moveDtector2();
}

function choose1DetecColour(a, b) {
    return (g.chooseOverlapRange(a, b, particle1X, particle1Width) || g.chooseOverlapRange(a, b, particle2X, particle2Width)) ? r.RED : r.WHITE;
}

function rectangle() {
    r.DrawRectangle(particle1X, particle1Y, particle1Width, WINDOW_HEIGHT, r.SKYBLUE);
    r.DrawRectangle(particle2X, particle2Y, particle2Width, WINDOW_HEIGHT, r.SKYBLUE);
    r.DrawRectangle(detector1X, detector1Y, detector1Width, WINDOW_HEIGHT, choose1DetecColour(detector1X, detector1Width));
    r.DrawRectangle(detector2X, detector2Y, detector2Width, WINDOW_HEIGHT, choose1DetecColour(detector2X, detector2Width));
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