# Solution 1: Using stack
class Solution:
    def maxPower(self, s: str) -> int:
        st = []
        ans = 0

        for i, val in enumerate(s):
            while st and s[st[-1]] != val:
                st.pop()

            st.append(i)
            ans = max(ans, len(st))

        return ans


# Solution 2: Move left pointer to next
class Solution:
    def maxPower(self, s: str) -> int:
        ans = 0
        left = 0

        for right in range(len(s)):
            while left < right and s[right] != s[left]:
                left += 1

            ans = max(ans, right - left + 1)

        return ans


# Solution 3: Even faster, move left pointer to right point immediately
class Solution:
    def maxPower(self, s: str) -> int:
        ans = 1
        left = 0

        for right in range(len(s)):
            if s[right] != s[left]:
                left = right
                continue

            ans = max(ans, right - left + 1)

        return ans
