### 反转链表

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

## solution 1:
- create 3 link (pre, cur, next)
- In the while loop, note down the cur.next value first. -> Then check if the next is null or not. If yes, that means we reach the end -> Then we redirect cur.next to pre link. -> At the end, we will move pre and cur to its next value to continue the loop.
- TC: O(n) = n
- SC: O(n) = 1