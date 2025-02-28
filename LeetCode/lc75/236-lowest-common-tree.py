# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def lowestCommonAncestor(
        self, root: "TreeNode", p: "TreeNode", q: "TreeNode"
    ) -> "TreeNode":

        def dfs(n):
            # if reach leaf or found a n == q or p, we return it
            if not n or n == p or n == q:
                return n

            # try to find ans from left child
            l = dfs(n.left)

            # try to find ans from righ child
            r = dfs(n.right)

            # if found from both, means the n is the root. return it.
            if l and r:
                return n

            # not found from both, means we must find a root from one of left or right.
            return l or r

        return dfs(root)
