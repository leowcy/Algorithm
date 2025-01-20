class Solution:
    def fourSumCount(
        self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]
    ) -> int:
        cnt = Counter()
        for x in nums1:
            for y in nums2:
                cnt[x + y] += 1

        ans = 0
        for x in nums3:
            for y in nums4:
                ans += cnt[-x - y]

        return ans
