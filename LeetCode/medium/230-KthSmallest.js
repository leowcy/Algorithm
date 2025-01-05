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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    if (!root) return;

    let res = null,
        counter = 1;

    var helper = function (root) {
        if (!root) return;
        // move left
        helper(root.left);
        // operation
        if (counter == k) {
            res = root.val;
        }
        counter++;
        //  move right
        helper(root.right);
    }

    helper(root);
    return res;
};
