class Solution:
    def romanToInt(self, s: str) -> int:
        roman_map = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        res = 0
        
        for a, b in zip(s, s[1:]):
            if roman_map[a] < roman_map[b]:
                res -= roman_map[a]
            else:
                res += roman_map[a]
        
        return res + roman_map[s[-1]]