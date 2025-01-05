/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {

    if (!original || !cloned) return null;

    let qO = [original],
        qC = [cloned];

    while (qO.length > 0) {

        for (let i = 0; i < qO.length; i++) {
            let curO = qO.shift(),
                curC = qC.shift();

            // we can use curO instead of curO.val since curO is the node we want to compare
            if (curO == target) {
                return curC;
            }

            if (curO.left) {
                qO.push(curO.left);
                qC.push(curC.left);
            }

            if (curO.right) {
                qO.push(curO.right);
                qC.push(curC.right);
            }
        }
    }
};