class Solution:
    def titleToNumber(self, columnTitle: str) -> int:

        letter_to_num_map = dict()
        for i in range(26):
            letter = chr(ord("A") + i)
            letter_to_num_map[letter] = i+1

        # print(letter_to_num_map)

        res = 0
        for i in range(len(columnTitle)-1, -1, -1):
            res += (26 ** (len(columnTitle)-1 - i)) * letter_to_num_map[columnTitle[i]] 
            # messed up with ^ in python
            # ** -> Exponentiation
            # ^ -> Bitwise XOR
        
        return res
