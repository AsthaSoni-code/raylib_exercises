function rectAxis(a, b, c) {
    return a * 0.5 - b * 0.5 + c;
}

function inRectSides(c, d) {
    return c * d;
}

module.exports = {
    rectAxis,
    inRectSides,
};