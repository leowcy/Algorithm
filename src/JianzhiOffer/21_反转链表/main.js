/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null,
        next = null,
        cur = head,
        newHead = null;

    while (cur) {
        next = cur.next;
        if (next == null) {
            newHead = cur;
        }
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return newHead;
};