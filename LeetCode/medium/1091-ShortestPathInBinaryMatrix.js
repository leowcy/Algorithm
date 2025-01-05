/**
 * @param {number[][]} grid
 * @return {number}
 */

// BFS - O(n) Time and O(n) space for queue

const d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
];

var shortestPathBinaryMatrix = function (grid) {
    if (!grid || grid.length == 0) return -1;

    if (grid[0][0] == 1) return -1;

    let queue = [],
        path = -1,
        len = grid.length,
        cur;

    queue.push([0, 0, 1]);

    while (queue.length) {
        cur = queue.shift();
        if (cur[0] == len - 1 && cur[1] == len - 1) return cur[2];

        for (const [r, c] of d) {
            let newR = cur[0] + r;
            let newC = cur[1] + c;

            if (newR < 0 || newR >= len || newC < 0 || newC >= len || grid[newR][newC] == 1) continue;
            queue.push([newR, newC, cur[2] + 1]);
            grid[newR][newC] = 1;
        }
    }

    return -1;
};