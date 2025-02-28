# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        ans, level, mx = 0, 0, -inf
        q = deque([root])
        while q:
            temp = 0
            level += 1  # cur level
            new_q = deque()
            while q:
                cur = q.popleft()
                temp += cur.val
                if cur.left:
                    new_q.append(cur.left)
                if cur.right:
                    new_q.append(cur.right)
            if temp > mx:
                mx = temp
                ans = level
            q = new_q

        return ans
