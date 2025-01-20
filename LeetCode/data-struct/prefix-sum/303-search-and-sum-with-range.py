# Solution 1: Built in function
class NumArray:
    def __init__(self, nums: List[int]):
        self.nums = nums

    def sumRange(self, left: int, right: int) -> int:
        return sum(self.nums[left : right + 1])


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)


# Solution 2: Prefix sum - use accumulate
class NumArray:
    def __init__(self, nums: List[int]):
        self.nums = nums
        self.prefix_sum = list(accumulate(nums, initial=0))

    def sumRange(self, left: int, right: int) -> int:
        return self.prefix_sum[right + 1] - self.prefix_sum[left]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)


# Prefix sum with loop
class NumArray:
    def __init__(self, nums: List[int]):
        n = len(nums)
        prefix_sum = [0] * (n + 1)
        for i, val in enumerate(nums):
            prefix_sum[i + 1] = prefix_sum[i] + val
        self.prefix_sum = prefix_sum

    def sumRange(self, left: int, right: int) -> int:
        return self.prefix_sum[right + 1] - self.prefix_sum[left]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
