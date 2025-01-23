class Solution:
    def maximumPrimeDifference(self, nums: List[int]) -> int:
        n = len(nums)
        i, j = 0, n - 1

        prime_nums = set([2, 3, 5, 7])
        for num in range(11, 101):
            is_prime = True
            for each in prime_nums:
                if gcd(num, each) != 1:
                    is_prime = False
            if is_prime:
                prime_nums.add(num)

        def _is_prime(x):
            return x in prime_nums

        while i <= j:
            if _is_prime(nums[i]) and _is_prime(nums[j]):
                return j - i
            elif _is_prime(nums[i]):
                j -= 1
            elif _is_prime(nums[j]):
                i += 1
            else:
                i += 1
                j -= 1
