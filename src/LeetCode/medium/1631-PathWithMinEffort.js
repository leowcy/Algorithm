/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    if (!heights || heights.length == 0) return 0;

    let minValue = Infinity,
        maxValue = -Infinity;

    // loop the heights array to get the difference of max and min - take o(m*n) time
    for (const row of heights) {
        for (const column of row) {
            minValue = Math.min(column, minValue);
            maxValue = Math.max(column, maxValue);
        }
    }

    const maxDiff = maxValue - minValue;
    // binary search from 0-difference to try each value to see if satisfied - take (log(m*n)) time
    let l = 0,
        r = maxDiff,
        res = -1;

    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (dfs(0, 0, heights, mid, visited = [])) {
            res = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    // return result
    return res;
};

const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

var dfs = (r, c, heights, diff, visited) => {
    // end condition: each the target - return true
    if (r == heights.length - 1 && c == heights[0].length - 1) {
        return true;
    }

    // init key
    let visitedKey = r + ":" + c;
    // if visited - set to true
    if (visited[visitedKey]) return true;

    // if not visited before - mark as visited
    visited[visitedKey] = true;

    for (const [m, n] of directions) {
        if (r + m >= 0 && r + m <= heights.length - 1 && c + n >= 0 && c + n <= heights[0].length) {
            const newVisitedKey = (r + m) + ":" + (c + n);
            if (Math.abs(heights[r + m][c + n] - heights[r][c]) <= diff && !visited[newVisitedKey]) {
                if (dfs(r + m, c + n, heights, diff, visited)) {
                    return true;
                }
            }
        }
    }

    return false;
}

minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]);