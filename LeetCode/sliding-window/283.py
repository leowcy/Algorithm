class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        left = 0

        for i, val in enumerate(nums):
            while val != 0 and i > left and nums[left] != 0:
                left += 1

            # swap
            if left < i and nums[left] == 0:
                nums[left] = nums[i]
                nums[i] = 0


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        left = 0

        for i, val in enumerate(nums):
            if val:
                nums[i], nums[left] = nums[left], nums[i]
                left += 1
