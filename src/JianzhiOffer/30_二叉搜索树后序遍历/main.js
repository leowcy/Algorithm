/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (!postorder.length || postorder.length == 0 || postorder.length == 1) return true;

    // in postorder -> the last element is the  root of the tree
    const root = postorder.pop();

    let left = [];
    let right = [];
    for (let i = 0; i < postorder.length; i++) {
        if (postorder[i] > root) {
            left = postorder.slice(0, i);
            right = postorder.slice(i);
            break;
        }
    }
    if (left.length == 0 && right.length == 0) {
        left = postorder;
        // recursion on the left
        return verifyPostorder(left);
    } else {
        // since the left-hand side is qualified while getting the left and right array value. Check the right half
        for (const element of right) {
            if (element < root) {
                return false;
            }
        }
        return verifyPostorder(left) && verifyPostorder(right);
    }
};