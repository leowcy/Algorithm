# Beat 17%
class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        q1 = deque()
        q2 = deque()
        count = 0

        for i, val in enumerate(nums):
            if val < pivot:
                q1.append(val)
            elif val > pivot:
                q2.append(val)
            else:
                count += 1

        ans = []

        while q1:
            ans.append(q1.popleft())

        while count > 0:
            ans.append(pivot)
            count -= 1

        while q2:
            ans.append(q2.popleft())

        return ans


# Official solution two pointer
class Solution:
    def pivotArray(self, nums, pivot):
        ans = [0] * len(nums)
        less_i = 0
        greater_i = len(nums) - 1

        # zip(left -> right, right -> left) and arrange value into ans
        for i, j in zip(range(len(nums)), range(len(nums) - 1, -1, -1)):
            if nums[i] < pivot:
                ans[less_i] = nums[i]
                less_i += 1
            if nums[j] > pivot:
                ans[greater_i] = nums[j]
                greater_i -= 1

        while less_i <= greater_i:
            ans[less_i] = pivot
            less_i += 1

        return ans
