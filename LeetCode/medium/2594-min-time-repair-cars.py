class Solution:
    def repairCars(self, ranks: List[int], cars: int) -> int:
        def check(x):
            cars_can_fix = 0
            for each in ranks:
                time = x // each
                cars_can_fix += int(math.sqrt(time))
            return cars_can_fix >= cars

        right = max(ranks) * cars * cars
        left = 0
        while left + 1 < right:
            mid = (left + right) // 2
            if check(mid):
                right = mid
            else:
                left = mid

        return right
