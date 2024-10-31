class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        index = 0
        count = 0

        for each in range(1, len(nums)):
            if nums[each] != nums[index]:
                index += 1
                nums[index] = nums[each]
                count = 0
            elif count == 0:
                index += 1
                nums[index] = nums[each]
                count += 1

        return index+1