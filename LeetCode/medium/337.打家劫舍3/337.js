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
    let mapOfTreeNodeValue = new Map();

    const dfs = (root) => {
        if (!root) return 0;
        if (mapOfTreeNodeValue.has(root)) return mapOfTreeNodeValue.get(root);

        let robRoot = root.val;
        if (root.left) {
            robRoot += dfs(root.left.left) + dfs(root.left.right);
        }

        if (root.right) {
            robRoot += dfs(root.right.left) + dfs(root.right.right);
        }

        const robChild = dfs(root.left) + dfs(root.right);
        const temp = Math.max(robRoot, robChild);
        mapOfTreeNodeValue.set(root, temp);
        return temp;
    }

    return dfs(root);
};