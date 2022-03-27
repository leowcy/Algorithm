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

    let newHead = new ListNode(0),
        tempHead = new ListNode(0);
    newHead.next = head;
    tempHead.next = newHead;

    while (newHead.next) {
        if (newHead.next.next && newHead.next.val == newHead.next.next.val) {
            let superNext = newHead.next.next.next;
            while (superNext && superNext.val == newHead.next.val) {
                superNext = superNext.next;
            }
            newHead.next = superNext;
        } else {
            newHead = newHead.next;
        }
    }

    return tempHead.next.next;
};

// O(n) = n