class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        s = defaultdict(int)
        ans = 0

        for each in dominoes:
            if each[0] > each[1]:
                each[0], each[1] = each[1], each[0]
            each[0] = str(each[0])
            each[1] = str(each[1])
            t = "".join(each)
            ans += s[t]
            s[t] += 1

        return ans
