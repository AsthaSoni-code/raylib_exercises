const sketch = require("./sketch");

function loop() {
  while (sketch.running()) {
    sketch.update();
    sketch.draw();
  }
}

function main() {
  // let world = {};
  sketch.setup();
  loop();
  sketch.teardown();
}

main();
