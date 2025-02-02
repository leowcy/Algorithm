class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()
        ans = 0
        for i, val in enumerate(seats):
            ans += abs(val - students[i])
        return ans
