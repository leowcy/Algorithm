/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head) return [];
    if ((head && head.next == null) || left == right) return head;

    let slow = head,
        fast = head;

    let i = 1;

    while (i < left) {
        slow = fast;
        fast = fast.next;
        i++;
    }

    let prev = null,
        reversedLinkedListTail = fast;
    while (i <= right) {
        const tempNext = fast.next;
        fast.next = prev;
        prev = fast;
        fast = tempNext;
        i++;
    }
    slow.next = prev;
    reversedLinkedListTail.next = fast;

    return left == 1 ? prev : head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const testNode1 = new ListNode(1);
const testNode2 = new ListNode(2);
const testNode3 = new ListNode(3);
// const testNode4 = new ListNode(4);
// const testNode5 = new ListNode(5);
testNode1.next = testNode2;
testNode2.next = testNode3;
// testNode3.next = testNode4;
// testNode4.next = testNode5;

reverseBetween(testNode1, 1, 2);

// O(n) = n