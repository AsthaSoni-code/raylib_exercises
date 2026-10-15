function detectParticleField(dX, dW, pX, pW) {
  const beforeOverlapRange = dX >= pX - dW;
  const afterOverlapRange = dX <= pX + pW;

  return beforeOverlapRange && afterOverlapRange;
}

function isOverlapingRange(d, p1, p2) {
  return (
    detectParticleField(d.x, d.width, p1.x, p1.width) ||
    detectParticleField(d.x, d.width, p2.x, p2.width)
  );
}

function isReachedEdge(movingAxis, end, start) {
  return movingAxis >= end || movingAxis === start;
}

function changeDirection(d, movingAxis) {
  return isReachedEdge(movingAxis, d.end, d.start) ? -d.velocity : d.velocity;
}

module.exports = {
  detectParticleField,
  isOverlapingRange,
  changeDirection,
};
