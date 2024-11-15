class Solution:
    def frequencySort(self, nums: list[int]) -> list[int]:
        freq_map = {}
        max_fre = 0
        for each in nums:
            freq_map[each] = 1 + freq_map.get(each, 0)
            max_fre = max(max_fre, freq_map[each])
        
        print(freq_map)

        res = []
        for i in range(1, max_fre+1):
            temp = []
            for num, times in freq_map.items():
                if i == times:
                    temp.extend([num] * i)
            temp.sort(reverse=True)
            print(temp)
            res.extend(temp)

        return res