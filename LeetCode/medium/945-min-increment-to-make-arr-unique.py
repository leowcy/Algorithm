class Solution:
    def minIncrementForUnique(self, nums: List[int]) -> int:
        
        sort_nums = sorted(nums) # O(nlogn) time here
        steps = 0

        for i in range(1, len(sort_nums)):
            if sort_nums[i] <= sort_nums[i-1]:
                steps += sort_nums[i-1] - sort_nums[i] + 1
                sort_nums[i] = sort_nums[i-1] + 1
        
        return steps