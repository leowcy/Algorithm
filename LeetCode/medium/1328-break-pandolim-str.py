# Beat 100% - Same as official ans. This is typicla greedy + thinking.
class Solution:
    def breakPalindrome(self, palindrome: str) -> str:
        n = len(palindrome)
        palindrome = list(palindrome)
        if n == 1:
            return ""

        # handle first half - find a letter bigger than "a", replace it.
        for i in range(n // 2):
            if ord(palindrome[i]) > ord("a"):
                palindrome[i] = "a"
                return "".join(palindrome)

        # for the second half, if reaches here, it means that this str must be
        # currently ending with "a" (since panlindrome concept for the first half)
        # So here simply modify the ending char to "b" will be the ans.
        palindrome[-1] = "b"
        return "".join(palindrome)
