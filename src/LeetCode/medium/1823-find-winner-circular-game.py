from sortedcontainers import SortedList

class Solution(object):
    def findTheWinner(self, n, k):
        cycle = SortedList(range(1, n + 1))
        index = 0
        while len(cycle) > 1:
            index = (index+k-1) % len(cycle)
            cycle.pop(index)
        return cycle[0]