class Solution:
    def _is_prime(self, x) -> bool:
        if x > 1:
            for i in range(2, isqrt(x) + 1):
                if x % i == 0:
                    return False
            return True
        return False

    def diagonalPrime(self, nums: List[List[int]]) -> int:
        n = len(nums)
        to_check = []

        for i in range(n):
            to_check.append(nums[i][i])
            to_check.append(nums[i][n - 1 - i])

        to_check.sort()
        for i in range(len(to_check) - 1, -1, -1):
            if self._is_prime(to_check[i]):
                return to_check[i]

        return 0
