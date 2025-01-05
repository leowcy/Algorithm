class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        
        magazine_map = dict()

        for each in magazine:
            if each in magazine_map:
                magazine_map[each] += 1
            else:
                magazine_map[each] = 1
        
        for each in ransomNote:
            if each in magazine_map:
                magazine_map[each] -= 1
                if magazine_map[each] < 0:
                    return False
            else:
                return False
        
        return True