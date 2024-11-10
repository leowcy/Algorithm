class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        
        # if k == 0 or len(nums) < 2:
        #     return False
        
        # if k+1 > len(nums):
        #     return len(nums) != len(set(nums))
        
        # slow, fast = 0, k+1

        # while fast <= len(nums):
        #     temp_nums = nums[slow:fast]
        #     # find if there is duplicate
        #     temp_nums_set = set(temp_nums)
        #     print(temp_nums_set)
        #     if len(temp_nums) != len(temp_nums_set):
        #         return True
        #     else:
        #         slow += 1
        #         fast += 1
        
        # return False
        # Time exceed above.

        # Solution 2: Using dict/map
        # seen = {}

        # if k == 0 or len(nums) < 2:
        #     return False
        
        # for idx, v in enumerate(nums):
        #     if v in seen and idx - seen[v] <= k:
        #         return True
        #     else:
        #         seen[v] = idx
        
        # return False

        # Solution 3: Keep the seen set up to date real time. 
        seen = set()

        for i, val in enumerate(nums):
            if i > k:
                seen.remove(nums[i-k-1])
            
            if val in seen:
                return True
            
            seen.add(val)
        
        return False

