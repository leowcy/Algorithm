class Solution:
    def maxSum(self, nums: List[int], m: int, k: int) -> int:
        st = deque()
        ans = 0
        temp = 0

        for i, val in enumerate(nums):
            # add
            temp += val
            st.append(val)

            # skip for first k elements
            if i < k - 1:
                continue

            # check
            st_set = set(st)
            if len(st_set) >= m:
                ans = max(ans, temp)

            # remove
            front = st.popleft()
            temp -= front

        return ans
