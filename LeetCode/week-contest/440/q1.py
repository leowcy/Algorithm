# AC - brute force
class Solution:
    def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
        n = len(fruits)
        f = [False] * n
        ans = 0

        for i in range(n):
            is_placed = False
            for j in range(n):
                if fruits[i] <= baskets[j] and not f[j]:
                    f[j] = True
                    is_placed = True
                    break
            if not is_placed:
                ans += 1

        return ans