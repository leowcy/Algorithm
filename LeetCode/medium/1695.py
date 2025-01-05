class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        ans = left = 0
        cnt = Counter()

        for right, val in enumerate(nums):
            cnt[val] += 1

            while cnt[val] > 1:
                cnt[nums[left]] -= 1
                left += 1

            ans = max(ans, sum(nums[left:right+1]))
        
        return ans


# Solution 2:
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        ans = left = 0
        cnt = Counter()
        temp = 0

        for _, val in enumerate(nums):
            cnt[val] += 1
            temp += val

            while cnt[val] > 1:
                cnt[nums[left]] -= 1
                temp -= nums[left]
                left += 1

            ans = max(ans, temp)
        
        return ans