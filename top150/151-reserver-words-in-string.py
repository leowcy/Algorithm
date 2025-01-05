class Solution:
    def reverseWords(self, s: str) -> str:
        # words = s.split()
        # res = []

        # for i in range(len(words) - 1, -1, -1):
        #     res.append(words[i])
        #     if i != 0:
        #         res.append(" ")
        
        # return "".join(res)

        words = s.split()
        l, r = 0, len(words) - 1

        while l < r:
            words[l], words[r] = words[r], words[l]
            l += 1
            r -= 1
        
        return " ".join(words)