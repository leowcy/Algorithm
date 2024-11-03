class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1 if nums[0] >= target else 0
        
        # A subarray is a contiguous non-empty sequence of elements within an array.

        min_len = float("inf")
        l = 0
        cur_sum = 0

        for r in range(len(nums)):
            cur_sum += nums[r]

            while cur_sum >= target:
                if r - l + 1 < min_len:
                    min_len = r - l + 1
                cur_sum -= nums[l]
                l += 1
        
        return min_len if min_len != float("inf") else 0