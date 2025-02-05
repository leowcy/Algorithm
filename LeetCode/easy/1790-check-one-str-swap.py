# freq map
class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        l1 = [0] * 26
        l2 = [0] * 26
        diff = 0

        for i in range(len(s1)):
            if s1[i] != s2[i]:
                diff += 1
                if diff > 2:
                    return False

            l1[ord(s1[i]) - ord("a")] += 1
            l2[ord(s2[i]) - ord("a")] += 1

        return l1 == l2
