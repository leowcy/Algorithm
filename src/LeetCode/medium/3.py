class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = left = 0
        cnt = Counter()

        for i, v in enumerate(s):
            # keep adding
            cnt[v] += 1

            # found duplicate
            while cnt[v] > 1:
                cnt[s[left]] -= 1 # shrink left
                left += 1
            
            # update ans
            ans = max(ans, i - left + 1)
        
        return ans
