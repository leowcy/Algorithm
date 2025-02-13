# Heap operations (push and pop) are O(log n). The while loop runs O(n) times in the worst case. Overall complexity: O(n log n).
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)

        ans = 0

        while nums[0] < k:
            x = heapq.heappop(nums)
            y = heapq.heappop(nums)
            heapq.heappush(nums, min(x, y) * 2 + max(x, y))

            ans += 1

        return ans


# We can use heapq to sort
# def heap_sort(nums):
#     heapq.heapify(nums)  # Convert list into a heap
#     sorted_nums = [
#         heapq.heappop(nums) for _ in range(len(nums))
#     ]  # Extract elements in order
#     return sorted_nums
