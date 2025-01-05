from collections import Counter

class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if not s or not words or not words[0]:
            return []

        word_len = len(words[0])
        word_count = len(words)
        total_len = word_count * word_len

        if len(s) < total_len:
            return []
    
        word_map = Counter(words)

        res = []

        for i in range(word_len):
            left = i
            right = i
            current_map = Counter()
            count = 0

            while right + word_len <= len(s):
                word = s[right:right+word_len]
                right += word_len

                if word in word_map:
                    current_map[word] += 1
                    count += 1
                    
                    while current_map[word] > word_map[word]:
                        current_map[s[left:left+word_len]] -= 1
                        count -= 1
                        left += word_len
                    
                    if count == word_count:
                        res.append(left)

                else:
                    current_map.clear()
                    count = 0
                    left = right
            
        return res