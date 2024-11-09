class Solution:
    def firstUniqChar(self, s: str) -> int:
        
        # Solution 1:
        # s_index_list = [s.index(each) for each in s]
        # s_index_map = dict()
        # for each in s_index_list:
        #     if each in s_index_map:
        #         s_index_map[each] += 1
        #     else:
        #         s_index_map[each] = 1
        # for i, v in s_index_map.items():
        #     if v == 1:
        #         return i
        # return -1

        # Solution 2:
        # n = [0 for _ in range(len(s))]
        # for i in range(len(s)):
        #     index = s.index(s[i])
        #     n[index] += 1
        # for k, v in enumerate(n):
        #     if v == 1:
        #         return k
        # return -1

        # Solution 3:
        mp = {}

        for a in s:
            mp[a] = 1 + mp.get(a, 0)
        
        for i in range(len(s)):
            if mp[s[i]] == 1:
                return i
        
        return -1