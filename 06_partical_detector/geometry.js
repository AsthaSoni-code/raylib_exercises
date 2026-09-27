function chooseOverlapRange(dX, dW, pX, pW) {

    const beforeOverlapRange = (dX >= pX - dW);
    const afterOverlapRange = (dX <= pX + pW);

    return (beforeOverlapRange && afterOverlapRange);
}

module.exports = {
    chooseOverlapRange,
}