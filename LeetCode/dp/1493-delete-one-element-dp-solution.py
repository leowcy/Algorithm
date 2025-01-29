class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        f = [[0] * 2 for _ in range(n + 1)]
        f[0][1] = -inf
        ans = 0

        for i, val in enumerate(nums):
            if val == 0:
                f[i + 1][0] = 0
                f[i + 1][1] = f[i][0]
            else:
                f[i + 1][0] = f[i][0] + 1
                f[i + 1][1] = max(f[i][0] + 1, f[i][1] + 1)
            ans = max(ans, f[i + 1][0], f[i + 1][1])

        return min(ans, n - 1)
