class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        
        list_index_pattern = [pattern.index(each) for each in pattern]        
        s_list = s.split(" ")
        list_index_s = [s_list.index(v) for _, v in enumerate(s_list)]

        return list_index_pattern == list_index_s