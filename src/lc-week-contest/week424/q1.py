# Solution 1 - Recur - Time exceed. Not accept.
class Solution:
    def _is_solution_valid(self, index: int, nums: List[int], direction: bool) -> bool:
        # True will go left, False will go right.
        if sum(nums) == 0:
            return True

        if index < 0 or index >= len(nums):
            return False

        if nums[index] == 0:
            if direction:
                return self._is_solution_valid(index-1, nums, True)
            else:
                return self._is_solution_valid(index+1, nums, False)
        else:
            nums[index] -= 1
            if direction:
                return self._is_solution_valid(index+1, nums, False)
            else:
                return self._is_solution_valid(index-1, nums, True)
        
    
    def countValidSelections(self, nums: List[int]) -> int:
        zero_indexes = []
        
        for i, v in enumerate(nums):
            if v == 0:
                zero_indexes.append(i)

        count = 0

        for each in zero_indexes:
            temp = nums.copy()
            if self._is_solution_valid(each, temp, True):
                count += 1

            temp_1 = nums.copy()
            if self._is_solution_valid(each, temp_1, False):
                count += 1
            
        return count


# Solution 2: Brute force loop. Using * -1 to change direction. Count sum if match to decide whether found a solution.
class Solution:    
    def countValidSelections(self, nums: list[int]) -> int:
        count = 0
        sum_nums = sum(nums)

        def _move(i, n, direction) -> int:
            temp_sum = 0
            while 0 <= i < len(n):
                if n[i] > 0:
                    n[i] -= 1
                    temp_sum += 1
                    direction *= -1

                i += direction
            return 1 if temp_sum == sum_nums else 0
                
        for i in range(len(nums)):
            if nums[i] == 0:
                # check go left
                temp = nums.copy()
                count += _move(i, temp, -1)
                # check go right
                temp_1 = nums.copy()
                count += _move(i, temp_1, 1)
            
        return count