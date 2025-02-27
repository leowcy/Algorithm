class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        n = len(rooms)
        helper = [False] * n
        helper[0] = True

        q = [rooms[0]]
        while q:
            cur = q.pop()
            for each in cur:
                if helper[each] == False:
                    helper[each] = True
                    q.append(rooms[each])

        # ans = True
        # for each in helper:
        #     ans &= each

        # return ans
        return all(helper) # With this, beat 100%
