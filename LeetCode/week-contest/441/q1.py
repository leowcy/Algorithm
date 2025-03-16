# AC after 3 retry.
class Solution:
    def maxSum(self, nums: List[int]) -> int:
        t = []
        mx = max(nums)
        if mx > 0:
            for each in nums:
                if each > 0 and each not in t:
                    t.append(each)
        else:
            return mx

        left = 0
        s = []
        ans = -inf
        temp = 0
        for i, val in enumerate(t):
            while s and val in s:
                cur = s.pop(0)
                temp -= cur

            s.append(val)
            temp += val
            ans = max(ans, temp)
        return ans


# S2:
class Solution:
    def maxSum(self, nums: list[int]) -> int:
        t = []
        mx = max(nums)
        if mx > 0:
            for each in nums:
                if each > 0 and each not in t:
                    t.append(each)
        else:
            return mx

        return sum(t)


s = Solution()
print(s.maxSum([-6, 12, 20, 20, -14, 10, -12]))
