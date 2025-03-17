class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        cnt = Counter(nums)
        for _, val in cnt.items():
            if val % 2 == 1:
                return False

        return True
