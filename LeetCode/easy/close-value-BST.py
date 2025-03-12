# Input: root = [4,2,5,1,3], target = 3.714286

#     4
#    / \
#   2   5
#  / \
# 1   3

# Output: 4
import unittest
from math import inf

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def find_closest_value(root, target):
    ans = -1
    def dfs(r, d):
        nonlocal ans
        if r.value == target:
            ans = target
            return

        temp_d = abs(r.value - target)
        if temp_d < d:
            ans = r.value # update ans

        if r.value > target and r.left:
            dfs(r.left, min(temp_d, d))
        elif r.value < target and r.right:
            dfs(r.right, min(temp_d, d))

    dfs(root, inf)
    return ans


class TestFindClosestValue(unittest.TestCase):
    def setUp(self):
        # Creating a sample BST
        self.root = BST(10)
        self.root.left = BST(5)
        self.root.right = BST(15)
        self.root.left.left = BST(2)
        self.root.left.right = BST(5)
        self.root.left.left.left = BST(1)
        self.root.right.left = BST(13)
        self.root.right.right = BST(22)
        self.root.right.left.right = BST(14)

    #     10
    #    / \
    #   5   15
    #  / \  / \
    # 2   5 13 22
    # /       \
    # 1        14
    def test_find_closest_value(self):
        self.assertEqual(find_closest_value(self.root, 12), 13)
        self.assertEqual(find_closest_value(self.root, 11), 10)
        self.assertEqual(find_closest_value(self.root, 23), 22)
        self.assertEqual(find_closest_value(self.root, 1), 1)
        self.assertEqual(find_closest_value(self.root, 8), 10)
        self.assertEqual(find_closest_value(self.root, 5), 5)
        self.assertEqual(find_closest_value(self.root, 14), 14)


if __name__ == "__main__":
    unittest.main()
