class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        ans = []
        q = deque()

        for i, val in enumerate(nums):
            # adjust existing queue
            while q and nums[q[-1]] <= val:
                q.pop()
            # in
            q.append(i)

            # out
            if i - q[0] >= k:
                q.popleft() # pop leftest out
            
            # ans
            if i >= k-1:
                ans.append(nums[q[0]])        

        return ans