# beat 100%
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        cnt = Counter(arr)
        s = set()
        for _, val in cnt.items():
            if val in s:
                return False

            s.add(val)
        return True
