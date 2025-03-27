class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key=lambda x: x[1])
        prev = points[0][1]
        res = 1

        for i in range(1, len(points)):
            if prev < points[i][0]:
                res += 1
                prev = points[i][1]

        return res
