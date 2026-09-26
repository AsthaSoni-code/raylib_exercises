const r = require("raylib");

const WINDOW_WIDTH = 1000;
const WINDOW_HEIGHT = 600;
const FPS = 60;

let firstDetectorX = 0;
const firstDetectorY = 0;
const firstDetectorWidth = 20;

let secondDetectorX = WINDOW_WIDTH / 2;
const secondDetectorY = firstDetectorY;
const secondDetectorWidth = firstDetectorWidth;

let revDirection = WINDOW_WIDTH / 2 - firstDetectorWidth;

const firstParticleX = WINDOW_WIDTH * 0.4;
const firstParticleY = 0;
const firstParticleWidth = 50;

const secondParticleX = WINDOW_WIDTH * 0.8;
const secondParticleY = 0;
const secondParticleWidth = 10;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "Raylib");
    r.SetTargetFPS(FPS);
}

function update() {

    let X = firstDetectorWidth / 8;

    if (firstDetectorX < revDirection) {
        revDirection = WINDOW_WIDTH / 2 - firstDetectorWidth;
        firstDetectorX = firstDetectorX + X;
    } else {
        revDirection = 1;
        firstDetectorX = firstDetectorX - X;
    }
}

function chooseDetecColour(dX, dW, pX, pW) {

    const beforeOverlapRange = (dX >= pX - dW);
    const afterOverlapRange = (dX <= pX + pW);

    return (beforeOverlapRange && afterOverlapRange) ? r.RED : r.WHITE;
}

// function chooseOverlapRange() {
//     return (WINDOW_WIDTH < ) ? chooseDetecColour(firstParticleX, firstParticleWidth) : chooseDetecColour(secondParticleX, secondParticleWidth);


//     // firstDetectorX < (firstParticleX + firstParticleWidth)
// }

function rectangle() {
    r.DrawRectangle(firstParticleX, firstParticleY, firstParticleWidth, WINDOW_HEIGHT, r.SKYBLUE);
    r.DrawRectangle(secondParticleX, secondParticleY, secondParticleWidth, WINDOW_HEIGHT, r.SKYBLUE);
    r.DrawRectangle(firstDetectorX, firstDetectorY, firstDetectorWidth, WINDOW_HEIGHT, chooseDetecColour(firstDetectorX, firstDetectorWidth, firstParticleX, firstParticleWidth));
    r.DrawRectangle(secondDetectorX, secondDetectorY, secondDetectorWidth, WINDOW_HEIGHT, chooseDetecColour(secondDetectorX, secondDetectorWidth, secondParticleX, secondParticleWidth));
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