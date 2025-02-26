# O(n) and O(1)
class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        mx = -inf
        temp = 0
        # get a maximum val first
        for i, val in enumerate(nums):
            if temp + val < 0:
                temp = 0
            else:
                temp += val
            mx = max(mx, temp)

        temp = 0
        mn = inf
        # get a minimun val next
        for i, val in enumerate(nums):
            if temp + val > 0:
                temp = 0
            else:
                temp += val
            mn = min(mn, temp)

        # compare and return
        return max(mx, abs(mn))
