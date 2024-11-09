# You must implement a solution with a linear runtime complexity and use only constant extra space.


class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        
        # O(n) time but O(n) space
        # counter_map = dict()
        # for each in nums:
        #     if each not in counter_map:
        #         counter_map[each] = 1
        #     else:
        #         counter_map[each] = 2
        # for k, v in counter_map.items():
        #     if v == 1:
        #         return k
        # enumerate(list) - index + value
        # dict.items() is for key and value on dict or map

        # Solution 2: O(n^2) and O(1) space
        # i, j = 0, 1
        # while j < len(nums) and len(nums) > 1:
        #     if nums[i] != nums[j]:
        #         j += 1
        #     else:
        #         # nums.remove(index)
        #         # nums.pop(index)
        #         del nums[i]
        #         del nums[j-1]
        #         j = 1
        # return nums[0]
        
        # Solution 3: Use Xor/Bit Manipulation
        # Intuition:
        # Xor of any two num gives the difference of bit as 1 and same bit as 0.
        # Thus, using this we get 1 ^ 1 == 0 because the same numbers have same bits.
        # So, we will always get the single element because all the same ones will
        # evaluate to 0 and 0^single_number = single_number.
        # Time: O(n)
        # Space: O(1)
        xor = 0
        for num in nums:
            xor ^= num
        
        return xor