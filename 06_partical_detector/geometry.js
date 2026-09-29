function detectParticleField(dX, dW, pX, pW) {
  const beforeOverlapRange = dX >= pX - dW;
  const afterOverlapRange = dX <= pX + pW;

  return beforeOverlapRange && afterOverlapRange;
}

function isOverlapingRange(
  start,
  dWidth,
  particle1X,
  particle1Width,
  particle2X,
  particle2Width,
) {
  return (
    detectParticleField(start, dWidth, particle1X, particle1Width) ||
    detectParticleField(start, dWidth, particle2X, particle2Width)
  );
}

function changeDirection(start, a, b, initialPoint, speed) {
  const end = a - b;

  return start >= end || start === initialPoint ? -speed : speed;
}

module.exports = {
  detectParticleField,
  isOverlapingRange,
  changeDirection,
};
