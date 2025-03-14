class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        cur = sum(nums[:k])
        mx = cur

        for i in range(k, len(nums)):
            cur = cur + nums[i] - nums[i - k]
            if cur > mx:
                mx = cur

        return mx / k
