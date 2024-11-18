class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        n_set = set(nums) # remove duplicate and can do O(1) find/search time
        res = 0
        
        for each in n_set:
            # make sure no earlier index before
            if (each-1) not in n_set: # O(1) time
                n = each + 1
                k = 1
                while n in n_set:
                    k += 1
                    n += 1
                res = max(k, res)

        return res