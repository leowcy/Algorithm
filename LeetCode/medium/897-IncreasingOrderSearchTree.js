// Solution 1: O(n) = n - Loop all root (left-root-right) and rebuild the tree
var increasingBST = function (root) {
    if (!root) return null;

    let res = [];
    var getValue = function (node) {
        if (!node) return null;
        getValue(node.left);
        res.push(node.val);
        getValue(node.right);
    }

    getValue(root);

    let resHead = new TreeNode(0);
    let newHead = resHead;
    for (let i = 0; i < res.length; i++) {
        newHead.right = new TreeNode(res[i]);
        newHead = newHead.right;
    }

    return resHead.right;
};

// Solution 2: Recursion - O(n) = n
var increasingBST = function (root) {
    if (!root) return null;

    let newRoot = null,
        newTree = null;

    var helper = function (root) {
        if (!root) return;

        // move left
        helper(root.left);

        // operation
        if (!newRoot) {
            newRoot = root;
            newTree = root;
        } else {
            newTree.right = root;
            newTree = newTree.right;
            // do newTree.left to Null as last step to avoid cycle
            newTree.left = null;
        }

        // move right
        helper(root.right);
    }

    helper(root);
    return newRoot;
};