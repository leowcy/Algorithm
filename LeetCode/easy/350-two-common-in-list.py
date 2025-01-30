class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        cnt_1 = Counter(nums1)
        ans = []

        for i, val in enumerate(nums2):
            if cnt_1[val] > 0:
                ans.append(val)
                cnt_1[val] -= 1

        return ans
