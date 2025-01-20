class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = dict()
        hash_map[nums[0]] = 0

        for i in range(1, len(nums)):
            if target - nums[i] in hash_map:
                return [hash_map[target - nums[i]], i]
            hash_map[nums[i]] = i
