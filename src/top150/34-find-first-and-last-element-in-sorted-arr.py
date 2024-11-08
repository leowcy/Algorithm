class Solution:
    def binary_search(self, nums: List[int], target: int, is_searching_left: bool) -> int:
        i, j = 0, len(nums)-1
        idx = -1

        while i <= j:
            mid = (i + j) // 2
            if nums[mid] == target:
                idx = mid
                if is_searching_left:
                    j = mid - 1
                else:
                    i = mid + 1
            elif nums[mid] > target:
                j = mid - 1
            else:
                i = mid + 1

        return idx

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        
        l = self.binary_search(nums, target, True)
        r = self.binary_search(nums, target, False)

        return [l, r]