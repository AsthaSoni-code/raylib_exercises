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

let detector3X = 0;
let detector3Y = 0;
let detector3Height = 20;

let revDirectionD1 = WINDOW_WIDTH / 2 - detector1Width;
let revDirectionD2 = WINDOW_WIDTH - detector2Width;
let revDirectionD3 = WINDOW_HEIGHT - detector3Height;

const particle1X = WINDOW_WIDTH * 0.4;
const particle1Y = 0;
const particle1Width = 50;

const particle2X = WINDOW_WIDTH * 0.8;
const particle2Y = 0;
const particle2Width = 10;

const particle3X = 0;
let particle3Y = WINDOW_HEIGHT * 0.3;
const particle3Height = 15;

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

function moveDtector3() {
    let speed = detector3Height / 9;

    if (detector3Y < revDirectionD3) {
        revDirectionD3 = WINDOW_HEIGHT - detector3Height;
        detector3Y = detector3Y + speed;
    } else {
        revDirectionD3 = WINDOW_HEIGHT - WINDOW_HEIGHT;
        detector3Y = detector3Y - speed;
    }
}

function update() {
    moveDetector1();
    moveDtector2();
    moveDtector3();
}

function chooseDetecColour(a, b) {
    return (g.chooseOverlapRange(a, b, particle1X, particle1Width) || g.chooseOverlapRange(a, b, particle2X, particle2Width)) ? r.RED : r.WHITE;
}
function chooseDetec3Colour(a, b) {
    return g.chooseOverlapRange(a, b, particle3Y, particle3Height) ? r.RED : r.WHITE;
}

function rectangle() {
    r.DrawRectangle(particle1X, particle1Y, particle1Width, WINDOW_HEIGHT, r.SKYBLUE);
    r.DrawRectangle(particle2X, particle2Y, particle2Width, WINDOW_HEIGHT, r.SKYBLUE);
    r.DrawRectangle(particle3X, particle3Y, WINDOW_WIDTH, particle3Height, r.SKYBLUE);
    r.DrawRectangle(detector1X, detector1Y, detector1Width, WINDOW_HEIGHT, chooseDetecColour(detector1X, detector1Width));
    r.DrawRectangle(detector2X, detector2Y, detector2Width, WINDOW_HEIGHT, chooseDetecColour(detector2X, detector2Width));
    r.DrawRectangle(detector3X, detector3Y, WINDOW_WIDTH, detector3Height, chooseDetec3Colour(detector3Y, detector3Height));
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