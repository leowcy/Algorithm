# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        n = 0
        count = head
        ans = head

        while count:
            n += 1
            count = count.next

        if n == 1:
            return None

        mid = n // 2
        idx = 0
        while idx < mid - 1:
            idx += 1
            ans = ans.next

        if ans.next and ans.next.next:
            ans.next = ans.next.next
        else:
            ans.next = None

        return head
