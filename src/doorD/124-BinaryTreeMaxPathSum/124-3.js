class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.mask = false;
    }
}

var mp = function (root) {
    if (!root) return 0;

    let res = root.val;

    var fmp = function (node) {
        if (!node) return null;

        //post order traversal - left - right - root
        let left = fmp(node.left);
        let right = fmp(node.right);

        if (!left && !right && node.mask == false) {
            return null;
            //discard the current node
        }

        let temp = Number.NEGATIVE_INFINITY;
        if (left != null) {
            temp = Math.max(temp, left);
        }
        if (right != null) {
            temp = Math.max(temp, right);
        }
        // active node
        if (node.mask) {
            if (temp != Number.NEGATIVE_INFINITY) {
                res = Math.max(res, temp + node.val);
            }
            // because current node is active
            return node.val;
        } else {
            if (left && right) {
                res = Math.max(res, left + right + node.val);
            }
            return node.val + temp;
        }
    }

    fmp(root);
    return res;
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
console.log(mp(root));