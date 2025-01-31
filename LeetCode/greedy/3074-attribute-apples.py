class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        s_apples = sum(apple)
        capacity.sort()
        ans = 0
        for i in range(len(capacity) - 1, -1, -1):
            ans += 1
            s_apples -= capacity[i]
            if s_apples <= 0:
                return ans
