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
 * @return {number}
 */
var rob = function (root) {
    if (!root) return 0;
    let memoMap = new Map();

    return robHouse(root, memoMap);
};

var robHouse = function (root, memoMap) {
    if (!root) return 0;

    if (memoMap.has(root)) {
        return memoMap.get(root);
    }

    let moneyFromRoot = 0,
        moneyFromLeftChild = 0,
        moneyFromRightChild = 0,
        moneyFromNeighbour = robHouse(root.left, memoMap) + robHouse(root.right, memoMap);

    if (root.left != null) {
        moneyFromLeftChild = robHouse(root.left.left, memoMap) + robHouse(root.left.right, memoMap);
    }

    if (root.right != null) {
        moneyFromRightChild = robHouse(root.right.left, memoMap) + robHouse(root.right.right, memoMap);
    }

    moneyFromRoot = root.val + moneyFromLeftChild + moneyFromRightChild;

    let money = Math.max(moneyFromRoot, moneyFromNeighbour);

    memoMap.set(root, money);
    return money;
}

// DP solution - find the recursion rules and add a memorization map for keeping the value in the middle to reduce the time for calculation