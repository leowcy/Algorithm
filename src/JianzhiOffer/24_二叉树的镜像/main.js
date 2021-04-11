/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// swap children node
var mirrorTree = function (root) {
    // root is null -> return null -> This could be the edge case when input is null or when it reach the non existing child node of leaf node
    if (root == null) return null;

    // reach leaf node -> return root back
    if (!root.left && !root.right) {
        return root;
    }

    // swap left and right
    let tempRoot = root.left;
    root.left = root.right;
    root.right = tempRoot;

    if (root.left) {
        // recursion call on the root left
        mirrorTree(root.left)
    }
    if (root.right) {
        // recursion call on the root right
        mirrorTree(root.right)
    }

    return root;
};

//one line solution:
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
    return root == null ? null : new TreeNode(root.val, mirrorTree(root.right), mirrorTree(root.left));
};