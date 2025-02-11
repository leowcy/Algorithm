class Solution:
    def checkZeroOnes(self, s: str) -> bool:
        one_count = 0
        zero_count = 0
        left = 0

        for i, val in enumerate(s):
            if s[i] != s[left]:
                left = i

            if s[left] == "0":
                zero_count = max(zero_count, i - left + 1)
            one_count = max(one_count, i - left + 1)

        return one_count > zero_count


# Clear solution: Beat 100%
class Solution:
    def checkZeroOnes(self, s: str) -> bool:
        max_ones = 0
        max_zeros = 0
        current_ones = 0
        current_zeros = 0

        for char in s:
            if char == "1":
                current_ones += 1
                max_ones = max(max_ones, current_ones)
                current_zeros = 0
            else:
                current_zeros += 1
                max_zeros = max(max_zeros, current_zeros)
                current_ones = 0

        return max_ones > max_zeros
