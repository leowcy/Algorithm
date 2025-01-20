class Solution:
    def getLargestOutlier(self, nums: List[int]) -> int:
        sum_n = sum(nums)
        cnt = Counter(nums)
        ans = min(nums)

        for i, val in enumerate(nums):
            remain = sum_n - val * 2
            if cnt[remain] > 0 and remain != val or cnt[remain] > 1 and remain == val:
                ans = max(sum_n - val * 2, ans)

        return ans
