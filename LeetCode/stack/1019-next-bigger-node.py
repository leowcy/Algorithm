# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        if not head:
            return []

        ans = list()
        st = list()

        idx = -1
        cur = head

        while cur:
            idx += 1
            ans.append(0)

            while st and st[-1][0] < cur.val:
                _, i = st.pop()
                ans[i] = cur.val

            st.append([cur.val, idx])
            cur = cur.next

        return ans
