/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let newHead = new ListNode(0);
    // keep a initHead for returning the result
    const initHead = newHead;
    newHead.next = head;

    while (newHead.next) {
        let currentNode = newHead.next;
        if (currentNode.val == val) {
            newHead.next = currentNode.next;
            return initHead.next;
        }
        newHead = currentNode;
    }
    // if no newHead.next and still no return value -> means that we reach the last element
    if (newHead.val == val) {
        newHead = null;
    }
    return initHead.next;
};