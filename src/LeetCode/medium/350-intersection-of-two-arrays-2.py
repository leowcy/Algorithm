from collections import Counter


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        
        ans = []

        hash_map = Counter(nums1)
        for num in nums2:
            if num in hash_map and hash_map[num] > 0:
                ans.append(num)
                hash_map[num] -= 1
        
        return ans