# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        if not head:
            return []

        ans = []
        st = list()

        cur = head
        idx = -1

        while cur:
            idx += 1
            ans.append(0)
            while st and st[-1][0] < cur.val:
                ans[st[-1][1]] = cur.val
                st.pop()
            st.append((cur.val, idx))
            cur = cur.next

        return ans
