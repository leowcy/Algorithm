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

## solution 2: Loop
- Create a for loop checking l1 and l2 is null or not -> if (l1 && !l2) || l1.val < l2.val -> make the preNode point to l1 -> make the l1 to l1.next
- Same logic for the else condition -> After this check, make preNode to preNode.next
- Keep another head node to stay at the front to return the list node
- return head.next at the end
- TC: O(n) = m+n
- SC: O(n) = 1