# Sort + prefix - Beat 5%
class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        nums.sort()
        pre = list(accumulate(nums, initial=0))

        ans = [0] * len(queries)

        for i in range(1, len(pre)):
            for j, val in enumerate(queries):
                if pre[i] <= val:
                    ans[j] = i

        return ans


# Sort + prefix + binary search - Beat 41%
class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        nums.sort()
        pre = list(accumulate(nums, initial=0))

        def _binary_search(x):
            l = 0
            r = len(pre)
            while l + 1 < r:
                mid = (l + r) // 2
                if pre[mid] <= x:
                    l = mid
                else:
                    r = mid
            return l

        ans = [0] * len(queries)
        for j, val in enumerate(queries):
            ans[j] = _binary_search(val)

        return ans
