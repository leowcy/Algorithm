class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        ans = 0
        m = dict()

        for i, val in enumerate(nums):
            if val not in m:
                m[val] = 0
            else:
                m[val] += 1
                ans += m[val]

        return ans
