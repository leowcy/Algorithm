class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        found_odds = 0
        for j in range(len(arr)):
            if arr[j] % 2 == 1:
                found_odds += 1
                if found_odds == 3:
                    return True
            else:
                found_odds = 0
        
        return False
