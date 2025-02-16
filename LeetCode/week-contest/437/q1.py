# AC
class Solution:
    def hasSpecialSubstring(self, s: str, k: int) -> bool:
        cnt = 0
        prev = None

        for i, val in enumerate(s):
            if not prev or val == prev:
                cnt += 1
            else:
                cnt = 1
            
            if cnt == k:
                if i < len(s) - 1 and val == s[i+1]:
                    continue
                else:
                    return True
            
            prev = val

        return False


s = Solution()
print(s.hasSpecialSubstring("a", 1))