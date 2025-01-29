# O(n) = n^2
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        ans = 0

        @cache
        def dfs(x):
            res = 0
            for i in range(x):
                if nums[i] < nums[x]:
                    res = max(res, dfs(i))
            return res + 1

        for i in range(n):
            ans = max(ans, dfs(i))
        return ans


# O(n) = n^2
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        f = [0] * n

        for i in range(n):
            for j in range(i):
                if nums[j] < nums[i]:
                    f[i] = max(f[i], f[j])
            f[i] += 1

        return max(f)


# O(nlogN) solution + O(n)
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        # maintain an array g and store LIS array and keep updating it real time
        g = []
        for x in nums:
            j = bisect_left(g, x)
            if j == len(g):
                g.append(x)
            else:
                g[j] = x
        return len(g)


# O(nlogN) + O(1)
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        ng = 0

        for x in nums:
            j = bisect_left(nums, x, 0, ng)
            if j == ng:
                ng += 1
            nums[j] = x

        return ng
