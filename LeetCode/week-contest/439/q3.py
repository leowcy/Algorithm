# This solution is for getting Sum of K subarrays with length of M.
# But it is asking for at least M. Will need to update a bit.
class Solution:
    def maxSum(self, nums: List[int], k: int, m: int) -> int:
        n = len(nums)
        prefix = [0] * (n+1)
        for i in range(n):
            prefix[i+1] = prefix[i] + nums[i]
        print(prefix)

        @cache
        def dfs(x, times):
            if x < m - 1:
                return 0 if times == 0 else -inf

            print(f"{x} - {times}:")
            print(prefix[x+1] - prefix[x+1-m])

            if times == 0:
                return dfs(x-1, times)

            return max(
                dfs(x-1, times),
                dfs(x-m, times-1) + prefix[x+1] - prefix[x+1-m]
            )

        return dfs(n-1, k)


# 记忆化搜索这题写不过，必须递推。
class Solution:
    def maxSum(self, nums: List[int], k: int, m: int) -> int:
        n = len(nums)
        s = [0] * (n + 1)
        for i in range(n):
            s[i + 1] = s[i] + nums[i]

        f = [0] * (n+1)
        d = [0] * (n+1)

        for i in range(1, k+1):
            d = [fl - sl for fl, sl in zip(f, s)]
            f[i * m - m: i * m] = [-inf] * m
            mx = -inf
            for j in range(i * m, n - (k - i) * m + 1):
                mx = max(mx, d[j - m])
                f[j] = max(f[j - 1], mx + s[j]) # pick or not pick
        return f[n]
