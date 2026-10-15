function verticalDetector(x, y, width, height, velocity, start, end) {
  return {
    x,
    y,
    width,
    height,
    velocity,
    start,
    end,
  };
}

function horizontalDetector(x, y, width, height, velocity, start, end) {
  return {
    x,
    y,
    width,
    height,
    velocity,
    start,
    end,
  };
}

module.exports = {
  verticalDetector,
  horizontalDetector,
};
