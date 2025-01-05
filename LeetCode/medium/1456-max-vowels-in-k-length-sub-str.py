class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        n = len(s)
        vowel_str = "aeiou"

        ans, count = 0, 0

        for i in range(n):
            # keep adding once found
            if s[i] in vowel_str:
                count += 1
            
            # check the index
            if i < k - 1:
                # do nothing. Still forming the window.
                continue
            
            # Update the ans
            ans = max(ans, count)

            # make it faster once reach largest number
            if ans == k:
                return k
            
            # check the leftest one is vowel or not. Pop left.
            if s[i + 1 - k] in vowel_str:
                count -= 1
        
        return ans
        