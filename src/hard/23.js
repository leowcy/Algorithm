/**
 * 23. Merge K sorted lists
 * Share
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
 */

/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//1. Priority Queue -> compare the first two linked-list inside the array and push the result back to lists
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;

    let finalListNode;
    while (lists.length > 1) {
        let firstListNode = lists.shift();
        let secondListNode = lists.shift();
        finalListNode = mergeTwoListNode(firstListNode, secondListNode);
        lists.push(finalListNode);
    }
    return lists[0];

    function mergeTwoListNode(m, n) {
        let headNode = new ListNode(0);
        let temp = headNode;
        while (m && n) {
            if (m.val > n.val) {
                temp.next = n;
                n = n.next;
            } else {
                temp.next = m;
                m = m.next;
            }
            temp = temp.next;
        }
        if (m) {
            temp.next = m;
        }
        if (n) {
            temp.next = n;
        }
        return headNode.next;
    }
};

/**
 * 2. Divide and conquer -> cut the list into half -> Deal with each half and then merge(left, right) -> Inside
 * each half -> Another merge function which will compare the left and right current value.
 */

function mergeDivideAndConquer(lists, left, right) {
    if (left === right) {
        return lists[left];
    } else if (left < right) {
        const mid = Math.floor((left + right) / 2);
        let leftHalf = mergeDivideAndConquer(lists, left, mid);
        let rightHalf = mergeDivideAndConquer(lists, mid + 1, right);
        return merge(leftHalf, rightHalf);
    } else {
        // edge case when lists.length is 0
        return null;
    }
}

function merge(leftHalf, rightHalf) {
    if (!leftHalf) {
        return rightHalf;
    } else if (!rightHalf) {
        return leftHalf;
    } else if (leftHalf && rightHalf) {
        if (leftHalf.val < rightHalf.val) {
            leftHalf.next = merge(leftHalf.next, rightHalf);
            return leftHalf;
        } else {
            rightHalf.next = merge(leftHalf, rightHalf.next);
            return rightHalf;
        }
    }
}

var mergeKLists = function (lists) {
    return mergeDivideAndConquer(lists, 0, lists.length - 1);
}

/**
 * Results: 1. Solution one 80% 2. 50%. Divide and conquer is slower.
 */