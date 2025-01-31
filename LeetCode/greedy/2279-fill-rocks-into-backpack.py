class Solution:
    def maximumBags(
        self, capacity: List[int], rocks: List[int], additionalRocks: int
    ) -> int:
        for i, val in enumerate(capacity):
            capacity[i] = val - rocks[i]
        capacity.sort()

        ans = 0
        for each in capacity:
            if each == 0:
                ans += 1
                continue
            if additionalRocks <= 0:
                return ans
            if additionalRocks >= each:
                additionalRocks -= each
                ans += 1

        return ans


# Similar solution
class Solution:
    def maximumBags(
        self, capacity: List[int], rocks: List[int], additionalRocks: int
    ) -> int:
        for i, val in enumerate(capacity):
            capacity[i] = val - rocks[i]
        capacity.sort()

        ans = 0
        for each in capacity:
            if each > additionalRocks:
                break
            additionalRocks -= each
            ans += 1

        return ans
