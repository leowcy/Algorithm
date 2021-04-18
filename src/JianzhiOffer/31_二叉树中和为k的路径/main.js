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
 * @param {number} target
 * @return {number[][]}
 */

// class Node {
//     constructor( value = 0, left = null, right = null) {
//         this.val = value;
//         this.left = left;
//         this.right = right;
//     }
// }

// solution 1:
var pathSum = function (root, target) {
    if (!root) return [];

    return findPath(root, target, 0, [], []);
};

var findPath = (root, target, sum, tempRes, res) => {
    if (!root) return;

    const tempVal = root.val;
    sum += tempVal;
    if (sum == target && !root.left && !root.right) {
        res.push(tempRes);
    }
    // keep searching for child node
    tempRes.push(tempVal);
    // 因为这里传递的tmpRes路径是一个数组，如果不用slice浅拷贝的话实际上不同分支之间传递的是同一个引用地址
    root.left && findPath(root.left, target, sum, tempRes.slice(), res);
    root.right && findPath(root.right, target, sum, tempRes.slice(), res);

    return res;
}

// solution 2:
var pathSum = function (root, target) {
    if (!root) return [];

    return dfs(root, target, [], []);
};

var dfs = (root, target, res, stack) => {
    if (!root) return;

    target -= root.val;
    stack.push(root.val);
    if (target == 0 && !root.left && !root.right) {
        // ...浅拷贝
        res.push([...stack]);
    }
    root.left && dfs(root.left, target, res, stack);
    root.right && dfs(root.right, target, res, stack);
    // recover the stack the last situation
    stack.pop();
    return res;
}

// local testing
// const root = new Node(1, new Node(2), new Node(3, null, new Node(-1)));

// console.log(pathSum(root, 3));