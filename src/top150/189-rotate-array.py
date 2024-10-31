class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)

        new_nums = [0] * n


        k = k % n

        for i in range(n):
            if i + k < n:
                new_nums[i+k] = nums[i]
            elif i + k > n:
                new_nums[i + k - n] = nums[i]
            else:
                new_nums[0] = nums[i]
        
        print(new_nums)
        
        for i in range(n):
            nums[i] = new_nums[i]