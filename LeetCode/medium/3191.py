class Solution:
    def minOperations(self, nums: List[int]) -> int:
        ans = 0
        for i in range(len(nums) - 2):
            if nums[i] == 0:
                nums[i], nums[i + 1], nums[i + 2] = 1, 1 - nums[i + 1], 1 - nums[i + 2]
                ans += 1

        return ans if sum(nums) == len(nums) else -1
