class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        ans = left = 0
        cnt = Counter()

        for right, val in enumerate(s):
            # keep adding
            cnt[val] += 1

            # shrink left
            while cnt[val] > 2:
                cnt[s[left]] -= 1
                left += 1
            
            ans = max(ans, right - left + 1)
        
        return ans