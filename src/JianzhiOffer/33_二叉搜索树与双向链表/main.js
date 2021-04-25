/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function (root) {
    if (!root) return;

    let head = null,
        cur = head;

    var transferTreeToDoublyList = (node) => {
        // tree inorder traversal here: left - root - right
        if (!node) return;
        // move to the leftest
        transferTreeToDoublyList(node.left);
        // process -> find the smallest one
        if (!cur) {
            // moved to the leftest one - set it as the head
            head = node;
        } else {
            // if cur exist -> that means it is not the leftest node -> now the node is the parent, the cur is the left child.
            // so leftChild.right = parent
            cur.right = node;
        }
        // this is for all the cases -> node is the parent, cur is the leftChild -> so parent.left = leftChild
        node.left = cur;
        // move the cur from leftChild to its parent
        cur = node;
        // find right
        transferTreeToDoublyList(node.right, cur);
    }

    transferTreeToDoublyList(root, null);

    // do with the head and tail. Now the cur is the tail.
    head.left = cur;
    cur.right = head;
    return head;
};