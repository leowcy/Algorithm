/**
 * 24. Swap nodes in Paris
 * Given a linked list, swap every two adjacent nodes and return its head.
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head) return null;
    let newHead = new ListNode(0, head);
    let tempNode = newHead;
    while(head && head.next) {
        let temp = head.next.next;
        head.next.next = head;
        tempNode.next = head.next;
        head.next = temp;
        tempNode = tempNode.next.next;
        head = head.next;
    }
    return newHead.next;
};