# Use the prefix-sum concept + single stack to keep track possible left child
class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        n = len(hours)
        if max(hours) <= 8:
            return 0

        helper = [1 if each > 8 else -1 for each in hours]
        s = [0] * (n + 1)
        st = [0]

        for i, val in enumerate(helper, 1):
            s[i] = s[i - 1] + val
            if s[i] < s[st[-1]]:
                st.append(i)

        ans = 0
        for i in range(n, 0, -1):
            while st and s[st[-1]] < s[i]:
                ans = max(ans, i - st.pop())

        return ans
