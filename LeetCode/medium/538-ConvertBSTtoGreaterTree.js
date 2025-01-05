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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let sum = 0;

    var helper = function (root) {
        if (!root) return null;
        // move to right child
        helper(root.right);
        // add value
        root.val += sum;
        sum = root.val;
        // move to left child
        helper(root.left);
    }

    helper(root);
    return root;
};