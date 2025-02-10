class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        cnt = Counter()
        left = 0
        ans = 0

        for i, val in enumerate(nums):
            cnt[val] += 1

            while cnt[0] > k:
                cnt[nums[left]] -= 1
                left += 1

            ans = max(ans, i - left + 1)

        return ans


# O(1) space solution
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        cnt = 0
        left = 0
        ans = 0

        for i, val in enumerate(nums):
            cnt += 1 if val == 0 else 0

            while cnt > k:
                cnt -= 1 if nums[left] == 0 else 0
                left += 1

            ans = max(ans, i - left + 1)

        return ans
