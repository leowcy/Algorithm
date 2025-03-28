# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        if not root:
            return

        # find the key
        if root.val == key:
            if not root.left:
                return root.right
            if not root.right:
                return root.left
            t = root.left
            while t.right:
                t = t.right
            t.right = root.right
            return root.left
        # Since it is BST, if small, go right
        elif root.val < key:
            root.right = self.deleteNode(root.right, key)
        else:
            root.left = self.deleteNode(root.left, key)

        return root
