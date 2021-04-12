/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    // no node in tree -> return true -> it is symmetric
    if (!root) return true;
    // no children node -> return true -> it is symmetric
    if (!root.left && !root.right) return true;
    // make a recursion function
    return checkSymmetricTree(root, root);
};

var checkSymmetricTree = (treeA, treeB) => {
    // check the preOrder of treeA and specific order of treeB
    // both of them is null
    if (!treeA && !treeB) return true;
    // one of left/right child node is null
    if (!treeA || !treeB) return false;
    // treeA and treeB is not null
    // val not match
    if (treeA.val != treeB.val) return false;
    // if val of treeA and treeB match
    return checkSymmetricTree(treeA.left, treeB.right) && checkSymmetricTree(treeA.right, treeB.left);
}