const s = require("./screen.js");

const particle = {
  p1: {
    x: s.WIDTH * 0.4,
    y: 0,
    width: 50,
    height: s.HEIGHT,
  },
  p2: {
    x: s.WIDTH * 0.8,
    y: 0,
    width: 10,
    height: s.HEIGHT,
  },
  p3: {
    x: 0,
    y: s.HEIGHT * 0.4,
    width: s.WIDTH,
    height: 15,
  },
};
// const x = s.WIDTH * 0.4;
// const width = 50;

module.exports = {
  particle,
};
