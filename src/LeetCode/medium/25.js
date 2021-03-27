/**
 * 25. Reverse Nodes in k-Group
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
k is a positive integer and is less than or equal to the length of the linked list.
If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
Follow up:
Could you solve the problem in O(1) extra memory space?
You may not alter the values in the list's nodes, only nodes itself may be changed.
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head) return null;
    let times = k;
    let temp = head;
    let flag = false;
    let arrayOfNode = [];
    // first check if the head has enough kth Nodes
    while (times > 0) {
        if (temp === null) {
            flag = true;
            break;
        }
        // store the first K nodes into an array for future usage
        arrayOfNode.push(temp);
        temp = temp.next;
        times--;
    }
    // If not -> means return head directly. No need to reverse.
    if (flag) return head;
    // recursion approach -> make rest ready
    let rest = reverseKGroup(temp, k);
    // deal with the first K element
    // point the head.next to the rest which has already been processed
    head.next = rest;
    let newNode = new ListNode(0);
    let tempNewNode = newNode;
    // for loop the first K nodes and reverse them
    for (let i = arrayOfNode.length - 1; i > 0; i--) {
        tempNewNode.next = arrayOfNode[i];
        tempNewNode = tempNewNode.next;
    }
    tempNewNode.next = head;
    // return value
    return newNode.next;
};