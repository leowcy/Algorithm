# AC
class Solution:
    def maxDifference(self, s: str) -> int:
        cnt = Counter(s)
        odd_max = -inf
        even_min = inf
        for i, val in cnt.items():
            if val % 2 == 1:
                odd_max = max(odd_max, val)
            else:
                even_min = min(even_min, val)

        return odd_max - even_min
