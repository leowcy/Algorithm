class Solution:
    def similarPairs(self, words: List[str]) -> int:
        c = []

        for each in words:
            t = list(set(each))
            t.sort()
            c.append("".join(t))
        
        dt = defaultdict(int)
        for each in c:
            dt[each] += 1
        
        ans = 0
        for _, val in dt.items():
            if val > 1:
                ans += (val * (val - 1)) // 2 # 排列组合 C(x, 2)从x中选2个，最多的组合。
        
        return ans