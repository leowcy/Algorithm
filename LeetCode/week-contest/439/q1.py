class Solution:
    def largestInteger(self, nums: List[int], k: int) -> int:
        cnt = Counter(nums)
        if k == 1:
            ans = -1
            for k, v in cnt.items():
                if v == 1:
                    ans = max(ans, k)
            return ans

        if k == len(nums):
            return max(nums)

        l, r = cnt[nums[0]], cnt[nums[-1]]
        if l == 1 and r == 1:
            return max(nums[0], nums[-1])
        elif l == 1:
            return nums[0]
        elif r == 1:
            return nums[-1]
        return -1