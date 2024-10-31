class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1

        tank = idx = 0
        for i in range(len(gas)):
            tank+= gas[i]-cost[i] 
            if tank < 0: tank, idx = 0, i+1
        return idx 