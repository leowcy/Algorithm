class Solution:
    def calculateScore(self, s: str) -> int:
        if len(s) == 1:
            return 0
        
        ans = 0

        letter_array = letter_mirror = []
        for i in range(ord("a"), ord("z")+1):
            letter_array.append(chr(i))
        letter_mirror = letter_array[::-1]

        def _is_mirror(a: str, b: str) -> bool:
            return letter_array.index(a) == letter_mirror.index(b)

        def _find_mirror(a: str) -> str:
            return letter_mirror[letter_array.index(a)]

        n = len(s)
        s_dict = dict()

        for i in range(n):
            cur = s[i]
            cur_mirror = _find_mirror(cur)
            if s_dict.get(cur_mirror) is None:
                if s_dict.get(cur) is None:
                    s_dict[cur] = [i]
                else:
                    s_dict[cur].append(i)
            else:
                mirror = s_dict.get(cur_mirror)
                ans += i - mirror[-1]
                if len(mirror) == 1:
                    del s_dict[cur_mirror]
                else:
                    s_dict[cur_mirror] = mirror[:-1]
            print(s_dict)
        
        print(ans)
        return ans

s = Solution()
s.calculateScore("azapfwonwwcdagew")
