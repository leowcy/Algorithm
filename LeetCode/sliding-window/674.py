# Beat 8%
class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        ans = 1
        cnt = 1

        for i in range(len(nums) - 1):
            cnt = 1 + cnt if nums[i] < nums[i + 1] else 1
            ans = max(ans, cnt)

        return ans


# Solution 2: Beat 43%
class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        ans, left = 1, 0

        for i in range(1, len(nums)):
            if nums[i] <= nums[i - 1]:
                left = i
                continue

            ans = max(ans, i - left + 1)

        return ans
