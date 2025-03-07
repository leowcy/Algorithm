# Precompute the prime nums list from range(0, 10**6 + 1)
# Then we can check if num is prime in o(1) time.
# Then we maintain a temp value for the gap and find a smaller pair we update the temp value and ans.
# One quick check we can do is if we find a gap == 2, means the smallest gap already. We just return ans at that early step.
mx = 10**6 + 1
is_prime_list = [1] * mx
for i in range(2, mx):
    for j in range(i * i, mx, i):
        is_prime_list[j] = 0


class Solution:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        x, y = -1, -1
        ans = [-1, -1]

        temp = inf
        for i in range(left, right + 1):
            if is_prime_list[i]:
                print(i)
                if x == -1:
                    x = i
                    continue
                elif y == -1:
                    y = i
                else:
                    x, y = y, i

                if abs(y - x) < temp:
                    temp = abs(y - x)
                    ans = [x, y]

                if temp == 2:
                    return ans

        return ans
