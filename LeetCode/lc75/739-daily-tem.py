class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        ans = [0] * n
        st = []

        for i, val in enumerate(temperatures):
            while st and temperatures[st[-1]] < val:
                cur = st.pop()
                ans[cur] = i - cur

            st.append(i)

        return ans
