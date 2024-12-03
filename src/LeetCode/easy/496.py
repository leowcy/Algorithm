# Solution 1: Brute force
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        n = len(nums1)
        ans = [-1] * n

        for j, x in enumerate(nums1):
            index_x = nums2.index(x) # use .index for list
            # print(index_x)
            for i in range(index_x, len(nums2)):
                if nums2[i] > x:
                    ans[j] = nums2[i]
                    break
            
        return ans


# Solution 2: Map + Stack + Back to Front
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        n = len(nums1)
        st = []
        ans = [-1] * n
        n1_map = {x:i for i, x in enumerate(nums1)}

        for each in reversed(nums2):
            while st and st[-1] < each:
                st.pop()
            
            if st and each in n1_map:
                ans[n1_map[each]] = st[-1]
            
            st.append(each)
            
        return ans
