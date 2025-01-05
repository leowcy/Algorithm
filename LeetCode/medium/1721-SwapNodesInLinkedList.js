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
var swapNodes = function (head, k) {

    let slow = head,
        fast = head,
        move = head;

    // swap node in linked list can be done by swapping their node's value
    let i = 1;
    while (i < k) {
        fast = fast.next;
        move = move.next;
        i++;
    }
    const tempFastValue = fast.val;

    while (move.next) {
        slow = slow.next;
        move = move.next;
    }
    const tempSlowValue = slow.val;

    slow.val = tempFastValue;
    fast.val = tempSlowValue;

    return head;
};

// O(n) = n