// const { height } = require("./detector3");
const s = require("./screen.js");

const detector = {
  d1: {
    x: 0,
    y: 0,
    width: 20,
    height: s.HEIGHT,
    velocity: 2,
    start: 0,
  },
  d2: {
    x: s.WIDTH / 2,
    y: 0,
    width: 20,
    height: s.HEIGHT,
    velocity: 2,
    start: s.WIDTH / 2,
  },
  d3: {
    x: 0,
    y: 0,
    width: s.WIDTH,
    height: 20,
    velocity: 3,
    start: 0,
  },
};

module.exports = {
  detector,
};
