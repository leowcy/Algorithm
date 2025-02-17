class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        cnt = []
        for each in bank:
            cnt.append(Counter(each))

        prev = 0
        ans = 0
        for i, val in enumerate(cnt):
            if not prev and val["1"] > 0:
                prev = val["1"]
            elif prev and val["1"] > 0:
                ans += prev * val["1"]
                prev = val["1"]

        return ans


# Clearer solution:
class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        prev = 0
        ans = 0
        for each in bank:
            val = Counter(each)
            if val["1"] > 0:
                ans += prev * val["1"]
                prev = val["1"]

        return ans
