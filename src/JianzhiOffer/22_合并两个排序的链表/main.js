/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//solution 1: recursion
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }

};

//solution 2: loop
var mergeTwoLists = function (l1, l2) {

    let pre = head = { next: null };

    while (l1 || l2) {
        if ((l1 && !l2) || (l1 && l1.val < l2.val)) {
            pre.next = l1;
            l1 = l1.next;
        } else {
            pre.next = l2;
            l2 = l2.next;
        }

        pre = pre.next;
    }

    return head.next;
}