function square(number) {
    return number ** 2;
}

function distance(x1, y1, x2, y2) {
    return (square(x1 - x2) + square(y1 - y2)) ** 0.5;
}

function nearestPoint(d1, d2, p1, p2) {
    return d1 < d2 ? p1 : p2;
}

module.exports = {
    distance,
    nearestPoint,
};