# Solution 1: Wrong answer. I want to use a counter map here. But turns out that I can't handle a case like 0001 or 00100.
# Since I keep tracking the cnt[0] value is not meaningful. I should check adjacent value which mean check s[i] and s[i-1]
# which is the key for this.
class Solution:
    def longestSemiRepetitiveSubstring(self, s: str) -> int:
        ans = left = 0
        cnt = Counter()
        is_adjacent_same_found = False
        prev = 0

        for right, val in enumerate(s):
            # Keep adding
            cnt[val] += 1

            # Found duplicate
            if cnt[val] > 1:
                # Have found duplicate before, it is okay. Update bool value.
                if not is_adjacent_same_found:
                    is_adjacent_same_found = True
                else:
                    # Found before, keep remove from left.
                    while cnt[prev] > 1:
                        cnt[s[left]] -= 1
                        left += 1
                    is_adjacent_same_found = False
                prev = val # Mark the val for next time removal
            
            # Update ans
            ans = max(ans, right - left + 1)
        
        return ans
    

# Solution 2 by using a same (int) to keep track of times repeat.
class Solution:
    def longestSemiRepetitiveSubstring(self, s: str) -> int:
        ans = left = 0
        same = 0 # couldn't use a bool flag here since 1 time is also allowed. Bool can only represent 0 or 1.

        for right in range(1, len(s)):
            if s[right] == s[right - 1]:
                same += 1
            
            # More than one time
            if same > 1:
                left += 1 # move the next of left since we gonna compare left and left - 1
                while (s[left] != s[left-1]):
                    left += 1 # keep moving
                # reduce the same value
                same -= 1
            
            # Update ans
            ans = max(ans, right - left + 1)
        
        return ans if ans > 0 else 1