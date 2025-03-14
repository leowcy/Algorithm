class Solution:
    def isBalanced(self, num: str) -> bool:
        s = 0

        for i, val in enumerate(num):
            if i % 2 == 0:
                s -= int(val)
            else:
                s += int(val)

        return s == 0
