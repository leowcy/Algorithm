# O(n) solution
class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        n = len(nums)

        n_count, p_count = 0, 0
        for i, val in enumerate(nums):
            if val < 0:
                n_count += 1
            elif val > 0:
                p_count += 1

        return max(n_count, p_count)


# Can you do it in O(logn)? Yes, binary search.
class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        n = len(nums)

        # find max negative number index
        left = -1
        right = n
        while left + 1 < right:
            mid = (left + right) // 2
            if nums[mid] < 0:
                left = mid
            else:
                right = mid

        l_count = left + 1

        # find min positive number index
        left = -1
        right = n
        while left + 1 < right:
            mid = (left + right) // 2
            if nums[mid] > 0:
                right = mid
            else:
                left = mid

        r_count = n - right

        return max(l_count, r_count)
