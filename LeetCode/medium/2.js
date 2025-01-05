/**
 * 2. Add two numbers
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // set res as new listNode
    let res = new ListNode(-1),
        dummy = res,
        sum = 0,
        carry = 0;

    while (l1 || l2 || sum > 0) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }

        dummy.next = new ListNode(sum);
        dummy = dummy.next;
        sum = carry;
        carry = 0;
    }
    return res.next;
};