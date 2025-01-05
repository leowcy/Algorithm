class Solution:
    def reverseVowels(self, s: str) -> str:
        
        vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

        i, j = 0, len(s)-1
        s_list = list(s)

        while i <= j:
            if s[i] in vowels and s[j] in vowels:
                s_list[i], s_list[j] = s_list[j], s_list[i]
                i += 1
                j -= 1
            elif s[i] in vowels:
                j -= 1
            elif s[j] in vowels:
                i += 1
            else:
                i += 1
                j -= 1
        
        return "".join(s_list)