from collections import deque


class Solution:
    def shortestSubarray(self, nums: list[int], k: int) -> int:
        # res = float("inf")

        # for i in range(len(nums)):
        #     temp = nums[i]
        #     if temp >= k:
        #         return 1
        #     for j in range(i+1, len(nums)):
        #         # find if satisfied and sub array length
        #         temp += nums[j]
        #         if temp >= k:
        #             res = min(res, j-i+1)
        #             break

        # return res if res != float("inf") else -1
        # Works above but time exceed

        shortest = float("inf")
        queue = deque([])
        total = currLen = 0

        for n in nums:
            if n < 0:
                if total + n <= 0:
                    # all number before plus this one is negative. So no hope to continue.
                    # Erase all records and restart from 0.
                    queue = deque([])
                    total = currLen = 0
                    continue
                else:
                    # Pop the latest one out
                    removed, removeLen = queue.pop()
                    curr = n + removed
                    stackLength = 1 + removeLen

                    while queue and curr < 0:
                        removed, removeLen = queue.pop()
                        curr += removed
                        stackLength += removeLen
                    
                    total += n
                    queue.append((curr, stackLength))
                    currLen += 1
            else:
                queue.append((n, 1))
                total += n
                currLen += 1
            
            while queue and total >= k:
                # found one satisfied ->start shrinking left
                shortest = min(shortest, currLen)
                removed, removeLen = queue.popleft()
                total -= removed
                currLen -= removeLen
        
        return shortest if shortest <= len(nums) else -1
        

s = Solution()
print(s.shortestSubarray([2,-2,3], 3))