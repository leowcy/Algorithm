class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        if len(deck) == 1: # [1] should return False, altho I don't understand why.
            return False

        cnt = Counter(deck)
        prev = 0
        for i, val in cnt.items():
            if not prev:
                prev = val
                continue

            prev = gcd(val, prev)

        return prev > 1
