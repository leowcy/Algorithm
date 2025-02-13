class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        n = len(position)
        position.sort()

        def find_next(num):
            left = -1
            right = n
            while left + 1 < right:
                mid = (left + right) // 2
                if position[mid] >= num:
                    right = mid
                else:
                    left = mid
            return right

        def check(x, balls):
            start_num = position[0]
            balls -= 1

            while balls > 0:
                next_num = start_num + x
                next_id = find_next(next_num)
                if next_id >= n:
                    break
                start_num = position[next_id]
                balls -= 1

            return balls == 0

        left = 0
        right = position[-1] - position[0] + 1
        while left + 1 < right:
            mid = (left + right) // 2
            if check(mid, m):
                left = mid
            else:
                right = mid

        return left


# Better check function without twice binary search
class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        n = len(position)
        position.sort()

        def check(x, balls):
            start_num = position[0]
            balls -= 1

            for i in range(1, n):
                if position[i] - start_num >= x:
                    balls -= 1
                    start_num = position[i]

            return balls <= 0

        left = 0
        right = position[-1] - position[0] + 1
        while left + 1 < right:
            mid = (left + right) // 2
            if check(mid, m):
                left = mid
            else:
                right = mid

        return left
