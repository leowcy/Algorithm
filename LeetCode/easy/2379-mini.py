# Fix sliding window
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        n = len(blocks)

        init = blocks[:k]
        cnt = Counter(init)
        ans = cnt["W"]
        temp = cnt["W"]

        for i in range(1, n - k + 1):
            if blocks[i - 1] == "W":
                temp -= 1
            if blocks[i + k - 1] == "W":
                temp += 1
            ans = min(ans, temp)

        return ans
