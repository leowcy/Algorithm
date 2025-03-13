# Beat 5%
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        n = len(candies)
        mx = max(candies)
        ans = [False] * n
        for i, val in enumerate(candies):
            if val + extraCandies >= mx:
                ans[i] = True

        return ans


# Beat 100%
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        n = len(candies)
        mn = max(candies) - extraCandies # Calculate this once which will be faster
        ans = [False] * n
        for i, val in enumerate(candies):
            if val >= mn:
                ans[i] = True

        return ans
