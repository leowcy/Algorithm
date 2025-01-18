# Using dict to solve
class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        ans = inf
        seen = dict()

        for j, val in enumerate(cards):
            if val in seen:
                ans = min(ans, j - seen[val] + 1)
                seen[val] = j
            seen[val] = j

        return ans if ans != inf else -1


# Using slice window
class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        ans = inf
        cnt = Counter()
        i = 0

        for j, val in enumerate(cards):
            cnt[val] += 1
            while cnt[val] > 1 and i < j:
                ans = min(ans, j - i + 1)
                cnt[cards[i]] -= 1
                i += 1

        return ans if ans != inf else -1
