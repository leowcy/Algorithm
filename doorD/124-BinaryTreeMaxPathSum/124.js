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

 class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.mask = false;
    }
}
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

let root = new TreeNode(-10);
root.left = new TreeNode(9);
root.left.mask = true;
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.left.mask = true;
root.right.right = new TreeNode(7);
root.right.right.mask = true;

console.log(maxPathSum(root));