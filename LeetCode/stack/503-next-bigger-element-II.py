class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        n = len(nums)
        st = []
        temp = nums + nums
        ans = [-1] * (n * 2)

        for i, val in enumerate(temp):
            while st and temp[st[-1]] < val:
                cur = st.pop()
                if ans[cur] == -1:
                    ans[cur] = val

            st.append(i)

        return ans[:n]
