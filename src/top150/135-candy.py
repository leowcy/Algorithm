class Solution:
    def candy(self, ratings: List[int]) -> int:
        n = len(ratings)

        # if n == 0:
        #     return 0
        # if n == 1:
        #     return 1
        # if n == 2:
        #     return 3 if ratings[1] != ratings[2] else 2
        
        total_candies = n
        i = 1

        while i < n:
            if ratings[i] == ratings[i-1]:
                i+=1
                continue

            current_peak = 0
            while i < n and ratings[i-1] < ratings[i]:
                current_peak += 1
                total_candies += current_peak
                i+= 1
            
            if i == n:
                return total_candies

            current_valley = 0
            while i < n and ratings[i-1] > ratings[i]:
                current_valley += 1
                total_candies += current_valley
                i += 1

            total_candies -= min(current_peak, current_valley)

        return total_candies 