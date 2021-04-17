/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    const queue = [root], data = [];

    while (queue.length) {
        const temp = queue.shift();
        data.push(temp.val);
        temp.left && queue.push(temp.left);
        temp.right && queue.push(temp.right);
    }

    return data;
};