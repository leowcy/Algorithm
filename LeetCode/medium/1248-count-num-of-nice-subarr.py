class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        # if len(nums) == 1:
        #     return 1 if k == 1 else 0

        # # loop the sliding window from size 2 to len(nums) and see how many
        # # nice subarrays we can find
        # count = 0
        # for i in range(k, len(nums)+1):
        #     window_left = 0
        #     window_right = window_left + i
        #     while window_right <= len(nums):
        #         temp_subarr = nums[window_left: window_right]
        #         temp_odd_found = 0
        #         for each in temp_subarr:
        #             if each % 2 == 1:
        #                 temp_odd_found += 1
        #         if temp_odd_found == k:
        #             count += 1
        #         window_left += 1
        #         window_right += 1

        # return count
        # Solution is good, but time exceed above. Brute force above. O(n ** 2)

        count = 0
        n = len(nums)
        ans = 0
        i = 0
        for j in range(n):
            if nums[j] % 2 == 1: # found odd
                count += 1
            while (count > k):
                if nums[i] % 2 == 1:
                    count -= 1
                i += 1
            
            temp = i
            temp_count = count

            while temp_count == k: # once satisfied, shrink left index to see how many more subarr we can find there and increment ans by 1
                ans += 1
                if nums[temp] % 2 == 1:
                    temp_count -= 1
                temp += 1
        return ans

        

