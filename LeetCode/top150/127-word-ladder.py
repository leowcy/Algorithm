from collections import deque


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordSet = set(wordList)

        if endWord not in wordSet:
            return 0
        
        wordQueue = deque([beginWord])

        distance = 1

        while wordQueue:
            size = len(wordQueue)
            distance += 1

            for _ in range(size):
                curr_word = wordQueue.popleft()

                for i in range(len(curr_word)):
                    for j in range(26):
                        temp = curr_word[:i] + chr(ord('a')+j) + curr_word[i+1:]

                        if temp == endWord:
                            return distance

                        if temp in wordSet:
                            wordQueue.append(temp)
                            wordSet.remove(temp)
        
        return 0