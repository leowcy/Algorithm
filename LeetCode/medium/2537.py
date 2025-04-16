class Solution:
    def countGood(self, nums: List[int], k: int) -> int:
        f = defaultdict(int)
        left = 0
        count = 0
        good = 0

        for right in range(len(nums)):
            count += f[nums[right]]
            f[nums[right]] += 1

            while count >= k:
                good += len(nums) - right
                f[nums[left]] -= 1
                count -= f[nums[left]]
                left += 1

        return good
