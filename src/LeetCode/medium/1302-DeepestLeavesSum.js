/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// DFS
var deepestLeavesSum = function (root) {
    if (!root) return null;

    let sum = [];

    helper(root, 0, sum);

    return sum[sum.length - 1];
};

var helper = function (node, level, sum) {
    if (!node) return;

    if (level == sum.length) {
        sum[level] = node.val;
    } else {
        sum[level] += node.val;
    }

    helper(node.left, level + 1, sum);
    helper(node.right, level + 1, sum);
}

// BFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
    let q = [root],
        ans,
        qlen,
        cur;

    while (q.length) {
        qlen = q.length;
        ans = 0;

        for (let i = 0; i < qlen; i++) {
            cur = q.shift();
            ans += cur.val;
            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
    }

    return ans;
};
