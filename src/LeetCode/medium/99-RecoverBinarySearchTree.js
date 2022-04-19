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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {

    if (!root) return;

    let res = [];
    var helper = function (root) {
        if (!root) return;
        // move left
        helper(root.left);
        // operation
        res.push(root.val);
        // move right
        helper(root.right);
    }

    var refill = function (root) {
        if (!root) return;
        // move left
        refill(root.left);
        // operation
        root.val = res.shift();
        // move right
        refill(root.right);
    }

    helper(root);
    res.sort((a, b) => a - b);
    refill(root);
};

// O(n) = nLogn(sorting) and O(n) = n space
// could we do in O(1) space?

// Solution 2:
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {

    let prev = null,
        bigNode = null,
        smallNode = null;
    var helper = function (root) {
        if (!root) return;

        // move left
        helper(root.left);

        // operation
        if (prev != null && prev.val > root.val) {
            // if bigNode is not null - means we have already found the bigNode
            if (bigNode == null) {
                bigNode = prev;
            }
            // once inside the if condition - means we have found a smaller one for swapping
            smallNode = root;
        }

        prev = root;
        // move right
        helper(root.right);
    }

    helper(root);
    [bigNode.val, smallNode.val] = [smallNode.val, bigNode.val];
};
// O(n) = n and O(1) space