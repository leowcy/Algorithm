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
var maxPathSum = function (root) {
    if (!root) return 0;

    let maxPathSum = root.val;

    var findMaxPath = function (root) {
        if (!root) return 0;

        let left = Math.max(findMaxPath(root.left), 0);
        let right = Math.max(findMaxPath(root.right), 0);

        let curPath = root.val + left + right;
        maxPathSum = Math.max(maxPathSum, curPath);

        return root.val + Math.max(left, right);
    }

    findMaxPath(root);
    return maxPathSum;
};