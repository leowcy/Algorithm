var uas = function (input) {
    if (!input) return null;

    let res = new Array(input.length).fill(Infinity).map(() => new Array(input[0].length).fill(Infinity));

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == 1) {
                dfs(input, res, i, j, 0);
            }
        }
    }

    return res;
}

var dfs = function (input, res, x, y, d) {
    if (x >= input.length || x < 0 || y >= input[0].length || y < 0  || res[x][y] < d) return null;

    res[x][y] = d;

    dfs(input, res, x + 1, y, d + 1);
    dfs(input, res, x - 1, y, d + 1);
    dfs(input, res, x, y + 1, d + 1);
    dfs(input, res, x, y - 1, d + 1);
}


const testInput = [
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1]
];

// Assuming the 0 is user and 1 is the supermarket center
console.log(uas(testInput))