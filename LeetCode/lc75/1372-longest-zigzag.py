# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:

        def dfs(node, cur, goLeft):
            if not node:
                return cur

            # if goLeft is True, we will need to go right and append the cur + 1. If still
            # go left, we will need to erase the cur to 0 and restart calculating. Same for
            # the else block in line 19.
            if goLeft:
                return max(dfs(node.left, cur + 1, False), dfs(node.right, 0, True))
            return max(dfs(node.right, cur + 1, True), dfs(node.left, 0, False))

        # init - go left or right. We need to compare the init two different directions.
        return max(dfs(root.left, 0, False), dfs(root.right, 0, True))
