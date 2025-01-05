class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        n = len(s)
        
        # maintain a diff arr for each char diff in ASCII integer
        diff = [abs(ord(sc) - ord(tc)) for sc, tc in zip(s, t)]

        maxLength = start = 0
        total = 0

        for end in range(n):
            total += diff[end]

            while total > maxCost:
                total -= diff[start]
                start += 1
            
            maxLength = max(maxLength, end - start + 1)
        
        return maxLength