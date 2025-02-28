# Two pointers
class Solution:
    def compress(self, chars: List[str]) -> int:
        n = len(chars)
        idx, i = 0, 0

        while i < n:
            cur = chars[i]
            count = 0
            while i < n and chars[i] == cur:
                count += 1
                i += 1
            if count == 1:
                chars[idx] = cur
                idx += 1
            else:
                chars[idx] = cur
                idx += 1
                for digit in str(count):
                    chars[idx] = digit
                    idx += 1
        chars = chars[:idx]
        return idx
