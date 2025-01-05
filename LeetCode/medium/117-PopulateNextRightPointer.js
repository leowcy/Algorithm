/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

    const level = 0;
    const queue = [[root, level]];

    while (queue.length) {
        const [current, level] = queue.shift();

        if (queue.length) {
            const [next, nextLevel] = queue[0];
            if (level == nextLevel) {
                current.next = next;
            }
        }

        if (current && current.left) queue.push([current.left, level + 1]);
        if (current && current.right) queue.push([current.right, level + 1]);
    }

    return root;
};