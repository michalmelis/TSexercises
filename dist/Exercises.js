console.log(totalDistance(0.2, 0.4, 100));
console.log(equal(1, 1, 1));
function totalDistance(heightOfstep, lenghtOfstep, towerHeight) {
    let totalDistance = (towerHeight / heightOfstep) * (lenghtOfstep + heightOfstep);
    return totalDistance;
}
function equal(a, b, c) {
    if (a == b && b == c) {
        return 3;
    }
    else if (a == b || b == c || a == c) {
        return 2;
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=Exercises.js.map