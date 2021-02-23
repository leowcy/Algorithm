/**
 * 19. Remove Nth Node From End of List
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//     // create a listNode point to the head
//     const newNode = new ListNode(0, head);
//     // calculate the length of the list
//     let length = 0;
//     let firstNode = head;
//     while(firstNode != null) {
//         length++;
//         firstNode = firstNode.next;
//     }
//     // find the actual index from the beginning
//     length = length - n;
//     // move the node to the index
//     firstNode = newNode;
//     while(length > 0) {
//         firstNode.next;
//         length--;
//     }
//     // make the node.next = node.next.next
//     firstNode.next = firstNode.next.next;
//     // return the list
//     return newNode.next;
// };


//Follow up: Could you do this in one pass?
var removeNthFromEnd = function (head, n) {
    if (!head.next) return null;
    const newNode = new ListNode(0, head);
    let slow = newNode;
    let fast = head;

    while (fast) {
        fast = fast.next;
        if (n > 0) {
            n--;
        } else {
            slow = slow.next;
        }
    }

    slow.next = slow.next.next;
    return newNode.next;
};