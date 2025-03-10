# Worked. But time exceeded.
from collections import defaultdict
class Solution:
    def countOfSubstrings(self, word: str, k: int) -> int:
        n = len(word)
        left, ans = 0, 0
        d = defaultdict(int)
        c_count = 0

        for i, val in enumerate(word):
            if val in "aeiou":
                d[val] += 1
            else:
                c_count += 1

            while c_count > k and left <= i:
                if word[left] in "aeiou":
                    d[word[left]] -= 1
                else:
                    c_count -= 1
                left += 1

            if c_count == k:
                temp = left
                d_temp = d.copy()
                while (
                    d_temp["a"] > 0
                    and d_temp["e"] > 0
                    and d_temp["i"] > 0
                    and d_temp["o"] > 0
                    and d_temp["u"] > 0
                ):  
                    ans += 1
                    if word[temp] in "aeiou":
                        d_temp[word[temp]] -= 1
                        temp += 1
                    else:
                        break

        return ans

s = Solution()
print(s.countOfSubstrings("axaeioua", 1))
# s.countOfSubstrings("iqeaouqi", 2)
# s.countOfSubstrings("iqeaouqqi", 2)
# s.countOfSubstrings("ieaouqqieaouqq", 1)


# LingGod solution - two sliding windows
# 恰好k个 = 至少k个 - 至少k+1个 核心思路
class Solution:
    def countOfSubstrings(self, word: str, k: int) -> int:
        cnt1 = defaultdict(int)
        cnt2 = defaultdict(int)
        c1 = c2 = 0
        ans = l1 = l2 = 0

        for each in word:
            if each in "aeiou":
                cnt1[each] += 1
                cnt2[each] += 1
            else:
                c1 += 1
                c2 += 1

            while len(cnt1) == 5 and c1 >= k:
                out = word[l1]
                if out in "aeiou":
                    cnt1[out] -= 1
                    if cnt1[out] == 0:
                        del cnt1[out]
                else:
                    c1 -= 1
                l1 += 1

            while len(cnt2) == 5 and c2 > k:
                out = word[l2]
                if out in "aeiou":
                    cnt2[out] -= 1
                    if cnt2[out] == 0:
                        del cnt2[out]
                else:
                    c2 -= 1
                l2 += 1

            ans += l1 - l2
        return ans
