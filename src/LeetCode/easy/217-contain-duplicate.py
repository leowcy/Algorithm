class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        
        idx_map = {value: idx for idx, value in enumerate(nums)}

        for i in range(len(nums)):
            if idx_map.get(nums[i]) != i: # Take O(n) time to do the index. So time exceed. Transform in to map to take O(1) time.
                return True
        
        return False
    
    
        # Convert List to Set:
        # return True if len(set(nums)) < len(nums) else False
        # set(nums): This converts the list nums into a set. 
        # A set automatically removes any duplicate elements because sets only store unique values.