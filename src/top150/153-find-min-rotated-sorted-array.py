class Solution:
    def findMin(self, nums: List[int]) -> int:
        
        l, r = 0, len(nums)-1

        while l <= r:
            mid = (l + r) // 2
            if nums[mid] >= nums[l]: # ascending this half. Larger or equal to.
                if nums[l] < nums[r]: # leftest smaller than rightest
                    return nums[l]
                else:
                    l = mid + 1
            else:
                r = mid # move to mid instead of mid - 1.
        
        return nums[r]