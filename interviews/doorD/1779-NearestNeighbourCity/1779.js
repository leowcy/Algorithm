/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    let ans = -1;
    let manDistance = Infinity;

    for (let i = 0; i < points.length; i++) {
        if (points[i][0] == x || points[i][1] == y) {
            let currentManDistance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            if (currentManDistance < manDistance) {
                manDistance = currentManDistance;
                ans = i;
            }
        }
    }

    return ans;
};