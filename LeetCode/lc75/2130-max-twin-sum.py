# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        ans = 0
        slow, fast = head, head
        st = []

        while fast and fast.next:
            st.append(slow.val)
            slow = slow.next
            fast = fast.next.next

        while slow:
            ans = max(ans, st.pop() + slow.val)
            slow = slow.next

        return ans
