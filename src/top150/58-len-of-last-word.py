class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s_list = list(s)
        if len(s_list) == 1:
            return 1
        s_list.insert(0, " ") # insert a space to avoid any potential missing space at front
        found_last_index=False
        find_last_word_last_index=0
        for i in range(len(s_list)-1, -1, -1):
            if not found_last_index and s_list[i] != " ":
                find_last_word_last_index = i
                found_last_index = True
            if found_last_index and s_list[i] == " ":
                return find_last_word_last_index - i