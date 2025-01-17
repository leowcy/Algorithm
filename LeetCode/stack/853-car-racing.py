# O(nlogn) - Key is we calculate the time and order by the position.
# If the former postion spends lesser or euqal time and reach the target comparing with the later position time, we assume
# that they will become and join as the same team.
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        n = len(position)
        if n == 1:
            return 1

        t = [0] * n

        for i, [p, s] in enumerate(sorted(zip(position, speed))):
            t[i] = (target - p) / s

        st = []
        for i, v in enumerate(t):
            while st and t[st[-1]] <= v:
                cur = st.pop()
            st.append(i)

        return len(st)
