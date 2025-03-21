class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False

        cnt_1 = Counter(word1)
        cnt_2 = Counter(word2)

        t1, t2 = [], []
        for i, val in cnt_1.items():
            if cnt_2[i] == 0:
                return False
            t1.append(val)

        for i, val in cnt_2.items():
            if cnt_1[i] == 0:
                return False
            t2.append(val)

        t1.sort()
        t2.sort()

        for i, val in enumerate(t1):
            if val != t2[i]:
                return False

        return True
