/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || head.next == null) return head;

    let slow = head,
        fast = head.next;

    while (fast) {
        while (fast && slow.val == fast.val) {
            fast = fast.next;
        }

        if (fast == null) {
            slow.next = null;
            break;
        } else {
            slow.next = fast;
            slow = fast;
            fast = fast.next;
        }
    }

    return head;
};