# Count the number of 1's inside the loop
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        ans = left = 0
        cnt = Counter()

        for right, val in enumerate(nums):
            cnt[val] += 1
            while left < right and cnt[0] > 1:
                cnt[nums[left]] -= 1 # easy to mess up here. I wrote cnt[left] - should be cnt[nums[left]]
                left += 1

            temp = cnt[1] - 1 if cnt[0] == 0 else cnt[1]
            ans = max(ans, temp)

        return ans
