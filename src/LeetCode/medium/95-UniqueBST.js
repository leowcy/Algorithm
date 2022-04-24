/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n == 0) return [];
    if (n == 1) return [new TreeNode(1)];

    return dp(n, 1, n);
};

var dp = function (n, start, end) {
    const res = [];

    if (start > end) {
        res.push(null);
        return res;
    }

    for (let i = start; i <= end; i++) {
        const left = dp(n, start, i - 1);
        const right = dp(n, i + 1, end);

        for (const l of left) {
            for (const r of right) {
                const newNode = new TreeNode(i, l, r);
                res.push(newNode);
            }
        }
    }

    return res;
}

// O(n) = N * (2^n) since it has 2*n subsets and it loops for n times