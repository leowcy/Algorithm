var findMaxForm = function (strs, m, n) {
    //count how many zeros and ones in each str
    strs = strs.map(function (str) {
        var result = [0, 0];
        for (var i = 0; i < str.length; i++) {
            result[str[i]]++;
        }
        return result;
    });
    //dp[i][j] -> how many str can be added into a bag with i capacity of 0 and j capacity of 1
    var dp = new Array(m + 1);
    for (var i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    for (var i = 0; i < strs.length; i++) {
        for (var j = m; j >= strs[i][0]; j--) {
            for (var z = n; z >= strs[i][1]; z--) {
                dp[j][z] = Math.max(dp[j][z], dp[j - strs[i][0]][z - strs[i][1]] + 1);
            }
        }
    }
    return dp[m][n];
};