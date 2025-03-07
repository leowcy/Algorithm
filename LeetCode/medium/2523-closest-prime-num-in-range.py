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
