/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    let res = false;

    if (A && B) {
        if (A.val == B.val) {
            res = isRootSame(A, B)
        }
        if (!res) {
            res = isSubStructure(A.left, B) || isSubStructure(A.right, B)
        }
    }

    return res;
};

var isRootSame = (A, B) => {
    if (!B) return true;
    if (!A) return false;
    if (A.val != B.val) return false;
    return isRootSame(A.left, B.left) && isRootSame(A.right, B.right)
}