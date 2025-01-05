class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        jobs = sorted(zip(difficulty, profit))
        worker.sort()

        profitSum, maxProfit = 0, 0
        j = 0

        for ability in worker:
            while j < len(jobs) and ability >= jobs[j][0]:
                maxProfit = max(maxProfit, jobs[j][1])
                j += 1
            profitSum += maxProfit
        
        return profitSum