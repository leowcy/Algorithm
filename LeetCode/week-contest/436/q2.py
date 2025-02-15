# Brute force - time exceed
class Solution:
    def assignElements(self, groups: List[int], elements: List[int]) -> List[int]:
        n = len(groups)
        ans = [-1] * n

        for i, val in enumerate(groups):
            if ans[i] != -1:
                continue

            for j, ele in enumerate(elements):
                if val % ele == 0:
                    ans[i] = j
                    break

        return ans


# Solution 2: Time exceed
class Solution:
    def assignElements(self, groups: List[int], elements: List[int]) -> List[int]:
        m = max(groups)
        helper = [-1] * (m + 1)

        for i, each in enumerate(elements):
            for val in range(each, m + 1, each):
                if helper[val] == -1:
                    helper[val] = i

        return [helper[each] for each in groups]


# Solution 2-1: Slightly optimize beat 96% - time complexity: O(mlogn) - it is not n^2 调和级数
class Solution:
    def assignElements(self, groups: List[int], elements: List[int]) -> List[int]:
        m = max(groups)
        helper = [-1] * (m + 1)

        for i, each in enumerate(elements):
            if (
                each > m or helper[each] != -1
            ):  # magic here "helper[each] != -1" and then beat 96%
                continue
            for val in range(each, m + 1, each):
                if helper[val] == -1:
                    helper[val] = i

        return [helper[each] for each in groups]
