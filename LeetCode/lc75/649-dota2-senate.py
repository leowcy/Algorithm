# https://leetcode.com/problems/dota2-senate/solutions/6476203/two-queue-with-deque-solution-lower-prio-0szn/
class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        n = len(senate)
        r, d = deque(), deque()

        for i, val in enumerate(senate):
            if val == "R":
                r.append(i)
            else:
                d.append(i)

        while len(r) > 0 and len(d) > 0:
            if r[0] < d[0]:
                d.popleft()  # remove
                r.popleft()
                r.append(n)
            else:
                r.popleft()
                d.popleft()
                d.append(n)
            n += 1

        return "Radiant" if len(r) > 0 else "Dire"
