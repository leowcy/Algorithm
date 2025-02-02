# Beat 100%
class Solution:
    def check(self, nums: List[int]) -> bool:
        find_smaller = False
        for i in range(1, len(nums)):
            if not find_smaller:
                if nums[i] >= nums[i-1]:
                    continue
                find_smaller = True
                if nums[i] > nums[0]:
                    return False
            else:
                if nums[i] >= nums[i-1] and nums[i] <= nums[0]:
                    continue
                return False
        
        return True