# Solution 1 - time exceed
class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
        map = {}
        for each in queries:
            for i in range(each[0], each[1]+1):
                map[i] = 1 + map.get(i, 0)

        for i in range(len(nums)):
            if nums[i] > 0:
                temp = map.get(i, 0)
                nums[i] -= temp
                if nums[i] > 0:
                    return False
        return True


# Solution 2 - time exceed
class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
        def _check_all_zero(n):
            for each in n:
                if each > 0:
                    return False
            return True
        for each in queries:
            for i in range(each[0], each[1]+1):
                if nums[i] > 0:
                    nums[i] -= 1
            if _check_all_zero(nums):
                return True
        return False

# Solution 3 - time exceed
class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:

        dq = deque()
        for i, v in enumerate(nums):
            if v != 0:
                dq.append([i, v])
        print(dq)
        # print(len(dq))

        while len(dq) > 0:
            curr_i, curr_v = dq.pop()
            for each in queries:
                if curr_i in range(each[0], each[1]+1) and curr_v > 0:
                    curr_v -= 1
                if curr_v == 0:
                    break
            if curr_v != 0:
                return False

        return True


# Solution 4: AC
class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:

        n = len(nums)

        n_sub = [0] * (n+10)
        q_list = [0] * (n+10)

        for i in range(len(nums)):
            n_sub[i+1] = nums[i]

        # magic happens here. Instead of two loop for start/end indexes, use method below.
        for each in queries:
            l = each[0] + 1
            r = each[1] + 1
            q_list[l] += 1
            q_list[r+1] -= 1

        # each steps value plus prevous value. That is why we mark above r+1 in q_list -= 1.
        # In that case, we can stop adding value which means the query in queries range end.
        for i in range(1, len(q_list)):
            q_list[i] += q_list[i-1]

        for i in range(1, len(nums)+1):
            if q_list[i] < n_sub[i]:
                return False

        return True