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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (!root) return [];

    let path = [], allPath = [];
    findPath(root, targetSum, path, allPath);
    return allPath;
};

var findPath = function (root, tempSum, path, allPath) {
    if (!root) return;

    path.push(root.val);
    if (!root.left && !root.right && root.val == tempSum) {
        allPath.push([...path]);
    }

    findPath(root.left, tempSum - root.val, path, allPath);
    findPath(root.right, tempSum - root.val, path, allPath);

    path.pop();
}