class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        left = 0
        for i, val in enumerate(nums):
            while val != 0 and left < i:
                if nums[left] == 0:
                    nums[left], nums[i] = nums[i], nums[left]
                    val = 0
                left += 1
