class Solution:
    def maxScoreSightseeingPair(self, values: List[int]) -> int:
        ans = 0
        n = len(values)
        pre_max = values[0]

        for i in range(1, n):
            ans = max(
                ans, pre_max + values[i] - 1
            )  # minus one here represent the distance
            if (
                values[i] >= pre_max
            ):  # here is larger and equal to. Reason is if two number the same, we always want the later one since the i-j distance will be smaller.
                pre_max = values[i]
            else:
                pre_max -= 1  # if the largest number remain the same, we do a minus one here since the distance + 1 so the pre_max decrease one.

        return ans
