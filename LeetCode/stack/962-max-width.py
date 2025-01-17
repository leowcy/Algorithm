# Still O(n^2) time but not time exceeded. Beat only 5%.
class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        n = len(nums)
        st = []
        ans = [0] * n

        for i, val in enumerate(nums):
            if st and nums[st[-1]] <= val:
                for each in st:
                    if nums[each] <= val:
                        ans[each] = i - each
            else:
                st.append(i)

        return max(ans)


# A better O(n) stack solution - pre compute the data and get them ready for usage. Then loop the nums array.
# Beat 87.3%
class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        n = len(nums)
        st = []
        ans = 0

        for i, val in enumerate(nums):
            if not st or nums[st[-1]] > val:
                st.append(i)

        while st:
            for j in range(n - 1, -1, -1):
                while st and nums[st[-1]] <= nums[j]:
                    cur = st.pop()
                    ans = max(ans, j - cur)

        return ans
