/**
 * Follow up: Write a class and test case yourself and the path of node's mask has to be true
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.mask = false;
    }
}

var maxPathSum2 = function (root) {
    if (!root) return 0;
    let pathSum = root.val;

    var findMaxPathSum2 = function (root) {
        if (!root) return null;

        // post order traversal
        let left = findMaxPathSum2(root.left);
        let right = findMaxPathSum2(root.right);
        // abandon the inActive leaf node
        if (!root.left && !root.right && !root.mask) return null;

        let curSum = Number.NEGATIVE_INFINITY;
        if (left != null) {
            curSum = Math.max(curSum, left);
        }
        if (right != null) {
            curSum = Math.max(curSum, right);
        }
        if (root.mask) {
            if (curSum != Number.NEGATIVE_INFINITY) {
                pathSum = Math.max(pathSum, curSum + root.val);
            }
            return root.val;
        } else {
            if (left && right) {
                pathSum = Math.max(pathSum, left + right + root.val);
            }
            return curSum + root.val;
        }
    };

    findMaxPathSum2(root);
    return pathSum;
}

let root = new TreeNode(-10);
root.left = new TreeNode(9);
root.left.mask = true;
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.left.mask = false;
root.right.right = new TreeNode(7);
root.right.right.mask = true;

console.log(root)
console.log(maxPathSum2(root));