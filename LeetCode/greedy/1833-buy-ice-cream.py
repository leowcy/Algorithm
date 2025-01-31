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


# Counting sort
class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        f = [0] * (max(costs) + 1)

        for each in costs:
            f[each] += 1

        ans = 0
        for i in range(max(costs) + 1):
            while f[i] > 0:
                if i > coins:
                    break
                else:
                    coins -= i
                    ans += 1
                    f[i] -= 1

        return ans
