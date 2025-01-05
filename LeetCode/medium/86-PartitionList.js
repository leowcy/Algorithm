/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

    let before_node_head = new ListNode(0),
        after_node_head = new ListNode(0),
        before = before_node_head,
        after = after_node_head;

    while (head != null) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }

    after.next = null;
    before.next = after_node_head.next;

    return before_node_head.next;
};

// O(n) = n - one time loop