# Beat 25%
class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        cnt_1 = Counter(nums1)
        cnt_2 = Counter(nums2)

        ans = [[], []]
        temp = []
        for each in set(nums1):
            if cnt_2[each] == 0:
                temp.append(each)
        ans[0] = temp

        temp = []
        for each in set(nums2):
            if cnt_1[each] == 0:
                temp.append(each)
        ans[1] = temp
        return ans


# Beat 97%
class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        s_1 = set(nums1)
        s_2 = set(nums2)

        temp_1, temp_2 = [], []
        for each in s_1:
            if each not in s_2: # O(1)
                temp_1.append(each)

        for each in s_2:
            if each not in s_1:  # O(1)
                temp_2.append(each)

        return [temp_1, temp_2]
