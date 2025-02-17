class Solution:
    def findGCD(self, nums: List[int]) -> int:
        def _gcd(a, b):
            while b:
                a, b = b, a % b
            return a

        return _gcd(max(nums), min(nums))
