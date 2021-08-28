/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// solution 1: Recursion
var buildTree = function (preorder, inorder) {
    if (preorder.length == 0) return null;

    let root = new TreeNode();
    root.val = preorder[0];

    const rootIndex = inorder.findIndex(root.val);

    root.left = buildTree(preorder.slice(1, 1 + rootIndex), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));

    return root;
};

// 重温 8-28
var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null;

    let newTree = new TreeNode();
    newTree.val = preorder[0];

    const rootIndex = inorder.findIndex(newTree.val);

    newTree.left = buildTree(preorder.slice(1, 1 + rootIndex), inorder.slice(0, rootIndex));
    newTree.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))

    return newTree;
};