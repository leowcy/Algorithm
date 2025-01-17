class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        n = len(nums1)
        m = len(nums2)
        st = []
        helper = dict()

        for i, val in enumerate(nums2):
            while st and nums2[st[-1]] < val:
                cur = st.pop()
                helper[nums2[cur]] = val

            st.append(i)

        ans = [-1] * n
        for i, val in enumerate(nums1):
            if val in helper:
                ans[i] = helper[val]

        return ans
