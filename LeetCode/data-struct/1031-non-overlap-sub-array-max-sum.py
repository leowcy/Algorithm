# Beat 11%
class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        n = len(nums)
        suffix_sum = [0] * n
        prefix_sum = [0] * n
        if firstLen < secondLen:
            firstLen, secondLen = secondLen, firstLen

        for i in range(n - secondLen - 1, -1, -1):
            suffix_sum[i] = max(suffix_sum[i + 1], sum(nums[i + 1 : i + 1 + secondLen]))
        for i in range(secondLen, n):
            prefix_sum[i] = max(prefix_sum[i - 1], sum(nums[i - secondLen : i]))

        ans = 0
        for i in range(n - firstLen + 1):
            ans = max(
                ans,
                sum(nums[i : i + firstLen]) + prefix_sum[i],
                sum(nums[i : i + firstLen]) + suffix_sum[i + firstLen - 1],
            )

        return ans


# LingGod solution - use accumulate function - Beat 100%
class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        s = list(accumulate(nums, initial=0))
        ans = 0

        def f(firstLen: int, secondLen: int):
            nonlocal ans
            maxSum = 0
            for i in range(firstLen + secondLen, len(s)):
                maxSum = max(maxSum, s[i - secondLen] - s[i - secondLen - firstLen])
                ans = max(ans, maxSum + s[i] - s[i - secondLen])

        f(firstLen, secondLen)
        f(secondLen, firstLen)
        return ans


# Based on LingGod fix mine - Beat 26%
class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        n = len(nums)
        suffix_sum = [0] * n
        prefix_sum = [0] * n
        s = list(accumulate(nums, initial=0))

        if firstLen < secondLen:
            firstLen, secondLen = secondLen, firstLen

        for i in range(n - secondLen - 1, -1, -1):
            suffix_sum[i] = max(suffix_sum[i + 1], s[i + 1 + secondLen] - s[i + 1])
        for i in range(secondLen, n):
            prefix_sum[i] = max(prefix_sum[i - 1], s[i] - s[i - secondLen])

        ans = 0
        for i in range(n - firstLen + 1):
            ans = max(
                ans,
                s[i + firstLen] - s[i] + prefix_sum[i],
                s[i + firstLen] - s[i] + suffix_sum[i + firstLen - 1],
            )

        return ans
