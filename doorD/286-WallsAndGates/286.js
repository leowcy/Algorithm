var wng = function (input) {
    if (!input) return null;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == 0) {
                // once found a door, DFS to update the nearby value
                dfs(input, i, j, 0);
            }
        }
    }

    return input;
}

var dfs = function (input, i, j, dis) {
    // edge case
    if (i < 0 || i >= input.length || j < 0 || j >= input[i].length || input[i][j] < dis) return null;

    input[i][j] = dis;

    dfs(input, i + 1, j, dis + 1);
    dfs(input, i - 1, j, dis + 1);
    dfs(input, i, j + 1, dis + 1);
    dfs(input, i, j - 1, dis + 1);
}

const testInput = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]
];

console.log(wng(testInput))