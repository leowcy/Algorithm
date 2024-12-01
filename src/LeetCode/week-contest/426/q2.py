class Solution:
    def getLargestOutlier(self, nums: List[int]) -> int:
        n = len(nums)
        nums.sort()
        nums_sum = sum(nums)
        cnt = Counter(nums)
        
        for i in range(n):
            remaining = nums_sum - (2 * nums[i])
            if (
                cnt[remaining] == 1 and remaining != nums[i]
            ) or (
                cnt[remaining] > 1
            ):
                return remaining

        return nums[0]