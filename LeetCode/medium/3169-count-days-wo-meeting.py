# Brute force - time exceeded
class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        helper = [False] * (days + 1)
        helper[0] = True

        for i, j in meetings:
            for x in range(i, j + 1):
                helper[x] = True

        ans = 0
        for each in helper:
            if not each:
                ans += 1

        return ans


# Solution 2: Passed. Greedy.
class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        meetings.sort()
        prev = 0
        ans = 0

        for x, y in meetings:
            if x > prev + 1:
                ans += x - prev - 1
            prev = max(y, prev)

        return ans + days - prev
