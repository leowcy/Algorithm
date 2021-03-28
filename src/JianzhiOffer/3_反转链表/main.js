/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// solution 1: using an array and reverse
var reversePrint = function (head) {
    if (!head) return [];
    if (head.next == null) return [head.val];

    let result = [];
    while (head.next != null) {
        result.push(head.val);
        head = head.next;
    }

    // push the last listNode value
    result.push(head.val);

    // reverse the result array
    return result.reverse();
};

// solution 2: using a stack. In JS, array has the property of stack.
var reversePrint = function (head) {
    if (!head) return [];
    if (head.next == null) return [head.val];

    let result = [];
    while (head.next != null) {
        result.push(head.val);
        head = head.next;
    }

    let response = [];

    // push the last listNode value
    response.push(head.val);
    // pop result array
    let i = 0, len = result.length;
    while (i < len) {
        response.push(result.pop());
        i++;
    }
    return response;
};