class Solution:
    def evenOddBit(self, n: int) -> List[int]:
        b_n = bin(n)[2:]
        len_b = len(b_n)
        ans = [0, 0]

        for i, val in enumerate(b_n):
            cur_bit = (len_b - 1 - i) % 2
            ans[cur_bit] += int(val)

        return ans
