/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return null;
    if (k == 0) return head;

    let newHead = new ListNode();
    let slow = newHead,
        fast = newHead;

    newHead.next = head;

    let i = 0;
    while (fast.next != null) {
        fast = fast.next;
        i++;
    }

    const headIndex = k % i;

    for (let index = 0; index < i - headIndex; index++) {
        slow = slow.next;
    }

    fast.next = newHead.next;
    newHead.next = slow.next;
    slow.next = null;

    return newHead.next;
};