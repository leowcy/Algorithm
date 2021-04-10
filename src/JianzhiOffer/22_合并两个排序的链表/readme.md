### 合并两个排序的链表

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
示例 1：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

## solution 1: Recursion
- compare the l1 and l2 val -> choose the smaller one as the current head
- head.next will be the result of the recursion call
- if l1 || l2 is null -> return the not null one
- Time Complexity: O(n) = m+n -> m is l1.length n is l2.length
- Space Complexity: O(n) = 1
