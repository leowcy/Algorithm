class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return 0

        if len(nums) == 2:
            return 0 if nums[0] > nums[1] else 1
        
        i, j = 0, len(nums)-1

        while i < j:
            mid = (i + j) // 2
            if nums[mid] > nums[mid+1]:
                j = mid
            else:
                i = mid + 1
        
        return j