class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0

        temp_max = float("-inf")
        l = len(nums) - 1
        r = 0

        for index, val in enumerate(nums):
            if val > temp_max:
                temp_max = val
            elif val < temp_max:
                r = index
                for f in range(index):
                    if nums[f] > val:
                        l = min(l, f)
                        break

        return r - l + 1 if r > l else 0
    

# Solution 2: Keep left right indexes and min max values to keep track
class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return 0

        temp_max = float("-inf")
        temp_min = float("inf")

        l = len(nums)
        r = -1

        for i in range(n):
            if nums[i] >= temp_max:
                temp_max = nums[i]
            else:
                r = i
            
            if nums[n-i-1] <= temp_min:
                temp_min = nums[n-i-1]
            else:
                l = n-i-1
        
        return r - l + 1 if r != -1 else 0