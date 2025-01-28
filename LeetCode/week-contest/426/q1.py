class Solution:
    def smallestNumber(self, n: int) -> int:
        t = 0
        while n > 1:
            n //= 2
            t += 1

        return 2 ** (t+1) - 1


class Solution:
    def smallestNumber(self, n: int) -> int:
        return (1 << n.bit_length()) - 1
