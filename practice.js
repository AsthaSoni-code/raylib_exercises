const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 800;
const FPS = 4;

let bodyrectXaxis = 50;
let bodyrectYaxis = 350;
let bodyrectWidth = 50;
let bodyrectHeight = 100;
const headradius = 30;
const eyeradius = 8;
//const leyeradius = 10;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(FPS);
}

function update() {
  if (bodyrectXaxis > 1000) return bodyrectXaxis
  bodyrectXaxis = bodyrectXaxis + 10;
  // if (bodyrectXaxis > 900) return 1000 - bodyrectXaxis;
  // bodyrectXaxis = bodyrectXaxis + 10;
}

function headXaxis(a, b) {
  return a + b / 2;
}

function eyeX1axis(a, b, c) {
  return headXaxis(a, b) - c / 2;
}

function eyeX2axis(a, b, c) {
  return headXaxis(a, b) + c / 2;
}

function line() {

  const leftHandEndX = bodyrectXaxis - bodyrectWidth / 2;
  const leftHandEndY = bodyrectYaxis + bodyrectHeight * 0.7;
  const rightHandstaX = bodyrectXaxis + bodyrectWidth;
  const rightHandEndX = bodyrectXaxis + bodyrectWidth * 3 / 2;

  r.DrawLine(bodyrectXaxis, bodyrectYaxis, leftHandEndX, leftHandEndY, r.BLACK);
  r.DrawLine(rightHandstaX, bodyrectYaxis, rightHandEndX, leftHandEndY, r.BLACK);

  r.DrawCircle(leftHandEndX, leftHandEndY, eyeradius / 2, r.BLACK);
  r.DrawCircle(rightHandEndX, leftHandEndY, eyeradius / 2, r.BLACK);

  const leftLegStaX = bodyrectXaxis + bodyrectWidth / 4;
  const leftLegStaY = bodyrectYaxis + bodyrectHeight;
  const leftLegEndY = leftLegStaY + bodyrectWidth * 0.9;
  const rightLegStaX = bodyrectXaxis + (bodyrectWidth / 4) * 3;

  r.DrawLine(leftLegStaX, leftLegStaY, leftLegStaX, leftLegEndY, r.BLACK);
  r.DrawLine(rightLegStaX, leftLegStaY, rightLegStaX, leftLegEndY, r.BLACK);

  r.DrawCircle(leftLegStaX, leftLegEndY, eyeradius / 2, r.BLACK);
  r.DrawCircle(rightLegStaX, leftLegEndY, eyeradius / 2, r.BLACK);
}

function circle() {
  //HEAD
  r.DrawCircle(
    headXaxis(bodyrectXaxis, bodyrectWidth),
    bodyrectYaxis - headradius,
    headradius,
    r.YELLOW,
  );
  //LEFT EYE
  r.DrawCircle(
    eyeX1axis(bodyrectXaxis, bodyrectWidth, headradius),
    bodyrectYaxis - headradius - eyeradius / 2,
    eyeradius,
    r.BLACK,
  );
  r.DrawCircle(
    eyeX1axis(bodyrectXaxis, bodyrectWidth, headradius),
    bodyrectYaxis - headradius - eyeradius / 2,
    eyeradius / 3,
    r.WHITE,
  );
  //RIGHT EYE
  r.DrawCircle(
    eyeX2axis(bodyrectXaxis, bodyrectWidth, headradius),
    bodyrectYaxis - headradius - eyeradius / 2,
    eyeradius,
    r.BLACK,
  );
  r.DrawCircle(
    eyeX2axis(bodyrectXaxis, bodyrectWidth, headradius),
    bodyrectYaxis - headradius - eyeradius / 2,
    eyeradius / 3,
    r.WHITE,
  );
  // MOUTH
  r.DrawCircle(
    headXaxis(bodyrectXaxis, bodyrectWidth),
    bodyrectYaxis - headradius / 2,
    eyeradius,
    r.RED,
  );
  const mouthRectX = headXaxis(bodyrectXaxis, bodyrectWidth) - eyeradius;
  const mouthRectY = (bodyrectYaxis - headradius / 2) - eyeradius;

  r.DrawRectangle(mouthRectX, mouthRectY, 20, 10, r.YELLOW);


}

function rectangle() {
  // r.DrawRectangle(
  //   bodyrectXaxis,
  //   bodyrectYaxis,
  //   bodyrectWidth,
  //   bodyrectHeight,
  //   r.RED,
  // );
  // r.DrawText(("HI"), bodyrectXaxis + 50, bodyrectYaxis + bodyrectHeight / 2, 20, r.GREEN);

  const roadX = 0;
  const roadY = 500;
  const roadHieght = windowHeight * 3 / 8;
  const stripX = 10;
  const stripY = 625
  const stripWidth = windowWidth / 6;
  const stripHieght = 40;

  r.DrawRectangle(roadX, roadY, windowWidth, roadHieght, r.GRAY);
  r.DrawRectangle(stripX, stripY, stripWidth, stripHieght, r.WHITE);
  r.DrawRectangle((stripX + stripWidth + 30), stripY, stripWidth, stripHieght, r.WHITE);
  r.DrawRectangle((stripX + (stripWidth + 30) * 2), stripY, stripWidth, stripHieght, r.WHITE);
  r.DrawRectangle((stripX + (stripWidth + 30) * 3), stripY, stripWidth, stripHieght, r.WHITE);
  r.DrawRectangle((stripX + (stripWidth + 30) * 4), stripY, stripWidth, stripHieght, r.WHITE);
  r.DrawRectangle((stripX + (stripWidth + 30) * 5), stripY, stripWidth, stripHieght, r.WHITE);

  r.DrawRectangle(roadX + 90, roadY - 400, windowWidth - 190, 400, r.BLUE);
  //r.DrawText(("THOUGHTWORKS"), windowWidth / 4, windowHeight * 7, 25, r.BLACK);
  r.DrawRectangle(
    bodyrectXaxis,
    bodyrectYaxis,
    bodyrectWidth,
    bodyrectHeight,
    r.RED,
  );
  r.DrawText(("HI"), bodyrectXaxis + 50, bodyrectYaxis + bodyrectHeight / 2, 20, r.GREEN);

  r.DrawText(("THOUGHTWORKS"), roadX + 90, roadY - 450, 50, r.BLACK);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  rectangle();
  circle();
  line();
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    update();
    draw();
  }
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}

main();
