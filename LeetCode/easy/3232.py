class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        nums_sum = sum(nums)
        if nums_sum % 2 == 1: # Odd, win
            return True

        target = nums_sum // 2
        temp = 0
        for each in nums:
            if each < 10:
                temp += each
        
        if temp != target:
            return True
        
        return False