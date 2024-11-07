# You must write an algorithm with O(log n) runtime complexity.


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if len(nums) == 1:
            return 0 if target <= nums[0] else 1
        
        i, j = 0, len(nums)-1

        # satisfied but it is not Binary search in O(log n) time
        # while i <= j:
        #     if target > nums[j]:
        #         return j+1
        #     elif target == nums[j]:
        #         return j
        #     elif target <= nums[i]:
        #         return i
        #     elif nums[j] - target > target - nums[i]: # see who is closer
        #         i += 1
        #     else:
        #         j -= 1
        # return -1

        # Do it in binary search - O(log n) time
        while i <= j:
            mid = (i + j) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                i = mid + 1
            else:
                j = mid - 1
        
        return i