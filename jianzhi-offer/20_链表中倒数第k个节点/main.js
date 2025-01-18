/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// solution 1: brute force -> get the length of singly-linked list first and then return the list.
var getKthFromEnd = function (head, k) {
    let listLength = 0,
        headCopy = head;

    while (head.next != null) {
        head = head.next;
        listLength++;
    }

    listLength = listLength + 1;

    if (listLength < k) return null;
    let sub = listLength - k;

    while (headCopy.next != null && sub > 0) {
        headCopy = headCopy.next;
        sub--;
    }

    return headCopy;
};

// solution 2: store the each step value and one loop will be fine
var getKthFromEnd = function (head, k) {
    let listLength = 0,
        listMap = new Map();

    while (head != null) {
        listMap.set(listLength, head);
        head = head.next;
        listLength++;
    }

    return listMap.get(listLength - k);
};

// solution 3: double pointer
var getKthFromEnd = function (head, k) {
    let fast = slow = head;

    while (fast != null) {
        fast = fast.next;

        if (k-- <= 0) {
            slow = slow.next;
        }
    }

    return slow;
}