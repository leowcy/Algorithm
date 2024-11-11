class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        # res = 0
        # i, j = 0, minutes
        # while j <= len(customers):
        #     temp_res = 0
        #     for idx in range(j, len(customers)): # right side sum
        #         if grumpy[idx] == 0:
        #             temp_res += customers[idx]
        #     for idx in range(0, i): # left side sum
        #         if grumpy[idx] == 0:
        #             temp_res += customers[idx]
        #     temp_sum = sum(customers[i:j]) + temp_res
        #     res = max(res, temp_sum)
        #     i += 1
        #     j += 1

        # return res
        # Time exceed - brute force

        # Solution 2:
        n = len(customers)
        satisfied_without = sum(customers[i] for i in range(n) if grumpy[i] == 0)

        addition_satisfied = 0
        curr_window_satisfied = 0

        # init window
        for i in range(minutes):
            if grumpy[i] == 1:
                curr_window_satisfied += customers[i]
        addition_satisfied = curr_window_satisfied

        for i in range(minutes, n):
            if grumpy[i] == 1:
                curr_window_satisfied += customers[i]
            if grumpy[i - minutes] == 1:
                curr_window_satisfied -= customers[i-minutes]
            addition_satisfied = max(addition_satisfied, curr_window_satisfied)
        
        return satisfied_without + addition_satisfied