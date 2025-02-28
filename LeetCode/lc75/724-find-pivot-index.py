class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)
        prefix = [0] * n
        temp = 0
        for i, val in enumerate(nums):
            temp += val
            prefix[i] = temp

        for j in range(n):
            if j == 0:
                left = 0
                right = prefix[-1] - prefix[0]
            elif j == n - 1:
                right = 0
                left = prefix[-2]
            else:
                left = prefix[j - 1]
                right = prefix[-1] - prefix[j]
            if left == right:
                return j

        return -1
